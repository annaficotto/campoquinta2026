const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'materiali.json');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Assicura che la cartella data esista
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}

// Inizializza il file JSON se non esiste
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ materiali: [], note: {} }, null, 2));
}

function leggiDati() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function scridiDati(dati) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(dati, null, 2));
}

// GET tutti i materiali
app.get('/api/materiali', (req, res) => {
  const dati = leggiDati();
  res.json(dati.materiali);
});

// POST aggiungi materiale
app.post('/api/materiali', (req, res) => {
  const { nome, tipo, descrizione, link, giorno } = req.body;
  if (!nome || !tipo) {
    return res.status(400).json({ errore: 'Nome e tipo sono obbligatori' });
  }
  const dati = leggiDati();
  const nuovo = {
    id: Date.now().toString(),
    nome,
    tipo,
    descrizione: descrizione || '',
    link: link || '',
    giorno: giorno || 'generale',
    creato: new Date().toISOString()
  };
  dati.materiali.push(nuovo);
  scridiDati(dati);
  res.status(201).json(nuovo);
});

// DELETE elimina materiale
app.delete('/api/materiali/:id', (req, res) => {
  const dati = leggiDati();
  const idx = dati.materiali.findIndex(m => m.id === req.params.id);
  if (idx === -1) return res.status(404).json({ errore: 'Materiale non trovato' });
  dati.materiali.splice(idx, 1);
  scridiDati(dati);
  res.json({ ok: true });
});

// GET note (per giorno o generale)
app.get('/api/note/:contesto', (req, res) => {
  const dati = leggiDati();
  res.json({ testo: dati.note[req.params.contesto] || '' });
});

// PUT salva nota
app.put('/api/note/:contesto', (req, res) => {
  const { testo } = req.body;
  const dati = leggiDati();
  dati.note[req.params.contesto] = testo || '';
  scridiDati(dati);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
