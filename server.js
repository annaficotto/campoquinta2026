const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'materiali.json');
const UPLOADS_DIR = path.join(__dirname, 'data', 'uploads');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(UPLOADS_DIR));

// Crea cartelle se non esistono
[path.join(__dirname, 'data'), UPLOADS_DIR].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ materiali: [], note: {} }, null, 2));
}

function leggiDati() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}
function scriviDati(dati) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(dati, null, 2));
}

// Multer: salva file con nome univoco, preserva estensione
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});
const upload = multer({ storage, limits: { fileSize: 20 * 1024 * 1024 } }); // max 20MB

// GET tutti i materiali
app.get('/api/materiali', (req, res) => {
  res.json(leggiDati().materiali);
});

// POST aggiungi materiale (JSON: link o testo)
app.post('/api/materiali', (req, res) => {
  const { nome, tipo, descrizione, contenutoTipo, link, testo, giorno } = req.body;
  if (!nome || !tipo || !contenutoTipo) {
    return res.status(400).json({ errore: 'Nome, tipo e contenutoTipo sono obbligatori' });
  }
  const dati = leggiDati();
  const nuovo = {
    id: Date.now().toString(),
    nome, tipo,
    descrizione: descrizione || '',
    contenutoTipo,          // 'link' | 'testo' | 'file'
    link: link || '',
    testo: testo || '',
    nomeFile: '',
    percorsoFile: '',
    giorno: giorno || 'generale',
    creato: new Date().toISOString()
  };
  dati.materiali.push(nuovo);
  scriviDati(dati);
  res.status(201).json(nuovo);
});

// POST upload file
app.post('/api/materiali/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ errore: 'Nessun file ricevuto' });
  const { nome, tipo, descrizione, giorno } = req.body;
  if (!nome || !tipo) return res.status(400).json({ errore: 'Nome e tipo obbligatori' });

  const dati = leggiDati();
  const nuovo = {
    id: Date.now().toString(),
    nome, tipo,
    descrizione: descrizione || '',
    contenutoTipo: 'file',
    link: '',
    testo: '',
    nomeFile: req.file.originalname,
    percorsoFile: `/uploads/${req.file.filename}`,
    giorno: giorno || 'generale',
    creato: new Date().toISOString()
  };
  dati.materiali.push(nuovo);
  scriviDati(dati);
  res.status(201).json(nuovo);
});

// DELETE elimina materiale (e file se presente)
app.delete('/api/materiali/:id', (req, res) => {
  const dati = leggiDati();
  const idx = dati.materiali.findIndex(m => m.id === req.params.id);
  if (idx === -1) return res.status(404).json({ errore: 'Non trovato' });
  const m = dati.materiali[idx];
  if (m.percorsoFile) {
    const assoluto = path.join(__dirname, 'data', m.percorsoFile.replace('/uploads/', 'uploads/'));
    if (fs.existsSync(assoluto)) fs.unlinkSync(assoluto);
  }
  dati.materiali.splice(idx, 1);
  scriviDati(dati);
  res.json({ ok: true });
});

// GET nota
app.get('/api/note/:contesto', (req, res) => {
  const dati = leggiDati();
  res.json({ testo: dati.note[req.params.contesto] || '' });
});

// PUT nota
app.put('/api/note/:contesto', (req, res) => {
  const dati = leggiDati();
  dati.note[req.params.contesto] = req.body.testo || '';
  scriviDati(dati);
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Server su http://localhost:${PORT}`));
