const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const NOTES_FILE = path.join(__dirname, 'data', 'notes.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}
if (!fs.existsSync(NOTES_FILE)) {
  fs.writeFileSync(NOTES_FILE, JSON.stringify({}));
}

function readNotes() {
  try { return JSON.parse(fs.readFileSync(NOTES_FILE, 'utf8')); }
  catch { return {}; }
}
function writeNotes(data) {
  fs.writeFileSync(NOTES_FILE, JSON.stringify(data, null, 2));
}

app.get('/api/notes', (req, res) => res.json(readNotes()));

app.post('/api/notes/:key', (req, res) => {
  const notes = readNotes();
  notes[req.params.key] = { text: req.body.text || '', updatedAt: new Date().toISOString() };
  writeNotes(notes);
  res.json({ ok: true });
});

app.delete('/api/notes/:key', (req, res) => {
  const notes = readNotes();
  delete notes[req.params.key];
  writeNotes(notes);
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Campo Scuola 2026 — porta ${PORT}`));
