# Campo Scuola 2025 — Backend

Server Node.js/Express per il deposito materiali del campo scuola parrocchiale.

## Struttura

```
campo-scuola-server/
├── server.js          # Server Express
├── public/
│   └── index.html     # Frontend (servito staticamente)
├── data/
│   └── materiali.json # Database (creato automaticamente)
└── package.json
```

## Avvio locale

```bash
npm install
npm start
# → http://localhost:3000
```

## Deploy su Render

1. Crea un repo GitHub e carica questa cartella
2. Vai su https://render.com → **New Web Service**
3. Collega il repo GitHub
4. Imposta:
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Clicca **Deploy**

> ⚠️ Nota: Render con piano gratuito usa un filesystem **effimero** — i dati nel file JSON vengono persi al riavvio del server. Per produzione usa un database esterno (es. MongoDB Atlas free tier) oppure aggiorna a un piano Render con persistent disk.

## API

| Metodo | Path | Descrizione |
|--------|------|-------------|
| GET | /api/materiali | Lista tutti i materiali |
| POST | /api/materiali | Aggiunge un materiale |
| DELETE | /api/materiali/:id | Elimina un materiale |
| GET | /api/note/:contesto | Legge una nota |
| PUT | /api/note/:contesto | Salva una nota |
