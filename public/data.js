// =============================================
// DATI CAMPO SCUOLA 2026 - "Felice se..."
// =============================================

const CAMPO = {
  titolo: "Felice se… seguo i segreti del mio amico Luciano",
  sottotitolo: "Campo Scuola 5ª Elementare · 4–11 luglio 2026",
  luogo: 'Casa "Al Cervo" – Molina di Fiemme (TN)',

  staff: {
    sacerdote: "don Riccardo Zanchin",
    cooperatrice: "Germana Gallina",
    capoCampo: "Giulio Stevanato",
    cuochi: ["Leonardo Brunetti", "Alessandro Meggiorini", "Aldo"],
    altroPersonale: "Sandra Gambaro",
    animatori: [
      { nome: "Carlo Alberto Bordin", squadra: "gialla" },
      { nome: "Alice Rizzuto",        squadra: "gialla" },
      { nome: "Anna Ficotto",         squadra: "blu" },
      { nome: "Andrea Rigoni",        squadra: "blu" },
      { nome: "Francesco Favaretto",  squadra: "rosa" },
      { nome: "Martina Necchio",      squadra: "rosa" },
    ]
  },

  squadre: [
    {
      id: "gialla",
      nome: "Sorriso",
      colore: "#F5C842",
      coloreTesto: "#1a1a1a",
      animatori: ["Carlo Alberto Bordin", "Alice Rizzuto"],
      ragazzi: [
        "Bonasia Simone",
        "Stevanato Giacomo",
        "Bianchetto Giada",
        "Vianello Riccardo",
        "Furlan Daria",
        "Prodan Victor",
      ]
    },
    {
      id: "blu",
      nome: "Montagna",
      colore: "#3B82F6",
      coloreTesto: "#ffffff",
      animatori: ["Anna Ficotto", "Andrea Rigoni"],
      ragazzi: [
        "Boesso Melissa",
        "Cattarin Alessio",
        "Veronese Juan Carlos",
        "Zennaro Noah",
        "Di Franco Maria",
        "Hamdi Adam",
      ]
    },
    {
      id: "rosa",
      nome: "Umiltà",
      colore: "#EC4899",
      coloreTesto: "#ffffff",
      animatori: ["Francesco Favaretto", "Martina Necchio"],
      ragazzi: [
        "De Ponte Michael",
        "Lazzari Jacopo",
        "Saccon Miriam",
        "Gjolekaj Irissa",
        "Enea Gabriel",
        "Pereu Jardan Valeria",
      ]
    }
  ],

  regole: [
    { num: 0, testo: "Questo vi comando: amatevi gli uni gli altri. (Gv 15,17)" },
    { num: 1, testo: "Togliere le scarpe quando si va ai piani superiori" },
    { num: 2, testo: "Quando gli animatori alzano il dito si fa silenzio" },
    { num: 3, testo: "Quando gli animatori danno il coprifuoco si dorme!!" },
    { num: 4, testo: "Non escludere MAI nessuno" },
    { num: 5, testo: 'Non dire parolacce e usare un linguaggio gentile (le parole "grazie", "scusa" e "per favore" non sono vietate 😊)' },
    { num: 6, testo: "Non correre in casa" },
    { num: 7, testo: "Lavarsi i denti dopo i pasti" },
    { num: 8, testo: "Farsi la doccia (per davvero!)" },
    { num: 9, testo: "Non sprecare cibo, acqua e luce" },
    { num: 10, testo: "Tenere in ordine la camera" },
    { num: 11, testo: "Portare rispetto verso tutti" },
    { num: 12, testo: "Non entrare in cucina e non uscire mai sulla strada, per nessun motivo" },
  ],

  giorni: [
    // ────────────────────────────────────────────
    // SABATO 4 LUGLIO
    // ────────────────────────────────────────────
    {
      id: "sab4",
      giorno: "Sabato",
      data: "4 luglio 2026",
      tema: "Presentazione di Luciano",
      beatitudine: null,
      colore: "#6366F1",
      programma: [
        { ora: "08:15", desc: "Ritrovo al piazzale della stazione di Spinea" },
        { ora: "09:00", desc: "Partenza in autobus (assegnazione stanze)" },
        { ora: "12:30", desc: "Arrivo alla Casa 'Al Cervo'; due animatori salgono ai piani a mettere i bigliettini colorati con i nomi nelle stanze; gli altri accolgono i ragazzi" },
        { ora: "13:00", desc: "Pranzo — presentazione dello staff e della ruota dei servizi; tre animatori preparano la caccia al tesoro" },
        { ora: "14:30", desc: "Servizi e sistemazione nelle camere" },
        { ora: "15:00", desc: "Ritrovo in giardino — presentazione del tema della fiducia" },
        { ora: "15:30", desc: "Presentazione degli animatori (ognuno porta oggetti che lo rappresentano); si comunicano le coppie e l'associazione alle squadre" },
        { ora: "16:00", desc: "Divisione in squadre — caccia al tesoro alle regole del campo" },
        { ora: "16:30", desc: "Merenda" },
        { ora: "17:00", desc: "Presentazione del tema del campo e di Luciano Bottan; consegna del libretto personale" },
        { ora: "18:00", desc: "Messa (squadra in servizio); tempo libero per gli altri" },
        { ora: "19:30", desc: "Cena" },
        { ora: "20:30", desc: "Servizi e tempo libero" },
        { ora: "21:00", desc: "Serata: giochi di conoscenza" },
        { ora: "22:30", desc: "Preghiera serale in cappella" },
        { ora: "23:00", desc: "A letto" },
      ],
      serata: {
        titolo: "Giochi di conoscenza",
        responsabile: "tutti",
        giochi: [
          "Mi piacciono tutti quelli che…",
          "Battichiama",
          "Gioco dei semi (carte)",
          "1 limone mezzo limone, 2 limoni mezzo limone…",
          "Simon dice",
          "Reazione a catena",
        ]
      },
      preghieraMattino: null,
      preghieraSera: `Gesù, accompagna con la tua presenza questo nostro campo estivo:
apri le nostre orecchie alla tua Parola
e i nostri occhi alla bellezza della natura intorno a noi,
ma anche alla "bellezza" di tutti coloro che abbiamo vicino;
aiutaci a vivere in amicizia e fraternità,
per far scoprire agli altri le nostre qualità,
ma anche per comprendere quelle degli altri
e imparare così da loro cose nuove e modi diversi di pensare.
Fa che questo campo, con l'aiuto di tutti,
sia un'occasione meravigliosa per scoprire qual è la vera felicità!
Amen.`,
      noteLiturgiche: `Leggere pagina 5 del libretto (tema del campo).
Attaccare al cartellone la scritta "Amatevi gli uni gli altri come io vi ho amato".
Far rispondere alle domande a pagina 4 (perché sono venuto al campo, fatiche, aspettative).
Don Riccardo spiega la prima parte del discorso della montagna.`,
      attivita: {
        nome: "Caccia al tesoro alle regole",
        responsabile: "Anna",
        desc: `I ragazzi si dividono in squadre. Gli animatori danno alla propria squadra il primo indizio.
Una volta scoperto il luogo raccoglieranno il bigliettino del colore della squadra con scritta la prima regola.
Si noti che due squadre non avranno mai la stessa regola nello stesso posto.`,
      },
      luciano: `Cari ragazzi e care ragazze, oggi inizia per tutti noi un cammino di 7 giorni che ci porterà a scoprire un grande tesoro. Scopriremo 7 segreti, come 7 chiavi magiche per aprire un forziere e trovare un tesoro prezioso. Questo tesoro ha un nome: Luciano. Dentro di lui abitava l'amore per Gesù e per ogni persona, soprattutto bisognosa.

Luciano Bottan è un giovane di Treviso nato nel 1965. A 20 anni entra nel "Gruppone Missionario". Volendo "dare la sua vita per gli altri", decide di andare in Ciad come missionario. Il 20 ottobre 2000 fa un incidente in macchina proprio in Ciad, e perde la vita. Dal suo diario è stato preso il testo della Canzone di Luciano.

Era un ragazzo alto, brizzolato, con un incredibile sorriso sul volto — uno di quelli veri, buoni. Un sorriso che accoglie, che non vuole nascondere nulla, che porta gioia. Un sorriso che vale più di mille parole.

🎵 Ascoltare insieme "La canzone di Luciano - Canto + karaoke.mp4"`,
    },

    // ────────────────────────────────────────────
    // DOMENICA 5 LUGLIO
    // ────────────────────────────────────────────
    {
      id: "dom5",
      giorno: "Domenica",
      data: "5 luglio 2026",
      tema: "L'umiltà",
      beatitudine: "Beati i poveri in spirito, perché di essi è il regno dei cieli",
      riferimentoVangelo: "Mt 5,3",
      colore: "#8B5CF6",
      programma: [
        { ora: "07:30", desc: "Preghiera degli animatori" },
        { ora: "07:45", desc: "Sveglia ragazzi" },
        { ora: "08:00", desc: "Risveglio muscolare" },
        { ora: "08:15", desc: "Preghiera in cappella" },
        { ora: "08:30", desc: "Colazione" },
        { ora: "09:00", desc: "Servizi" },
        { ora: "09:45", desc: "Scenetta" },
        { ora: "10:00", desc: "Attività: Un pezzo del puzzle" },
        { ora: "13:30", desc: "Pranzo" },
        { ora: "14:30", desc: "Servizi" },
        { ora: "15:00", desc: "Gioco: Roverino (resp. Carlo Alberto)" },
        { ora: "16:30", desc: "Merenda" },
        { ora: "17:15", desc: "Docce" },
        { ora: "18:30", desc: "Messa per tutti" },
        { ora: "19:30", desc: "Cena" },
        { ora: "20:30", desc: "Servizi e tempo libero" },
        { ora: "21:00", desc: "Serata: Lupus in fabula (resp. Andrea, Carlo Alberto)" },
        { ora: "22:15", desc: "Preghiera serale in cappella — consegna dei semi" },
        { ora: "22:30", desc: "A letto" },
      ],
      preghieraMattino: `Ti adoro mio Dio, e ti amo con tutto il cuore.
Ti ringrazio di avermi creato, fatto cristiano e conservato in questa notte.
Ti offro le azioni della giornata:
fa' che siano tutte secondo la tua santa volontà per la maggior tua gloria.
Preservami dal peccato e da ogni male.
La tua grazia sia sempre con me e con tutti i miei cari.
Amen.`,
      preghieraSera: `Gesù,
oggi ho provato cose nuove, alcune facili, altre difficili.
Dammi il coraggio di non tirarmi indietro,
di giocare, cantare e pregare con tutto il cuore.
Domani aiutami a fare un passo in più.`,
      noteLiturgiche: `Un animatore legge il versetto: "Beati i poveri in spirito, perché di essi è il regno dei cieli."
Don Riccardo lo spiega e introduce il tema dell'umiltà.
Giulio o un animatore legge il testo su Luciano e l'umiltà.

Sera:
- Ragazzo della squadra in servizio legge il segreto dell'umiltà.
- Don Riccardo guida le riflessioni personali.
- Consegnare a tutti dei semi da piantare in una casseruola con terra.
- Recitiamo la preghiera della sera.`,
      attivita: {
        nome: "Un pezzo del puzzle",
        responsabile: "???",
        desc: `Dividere i ragazzi per squadre. Su ogni tavolo c'è un puzzle da completare tutti insieme. Gli animatori osservano se c'è qualcuno che vuole fare tutto da solo o se tutti collaborano.

Una volta finito, leggere:
"Forse ognuno di noi è una piccola parte di un grande puzzle e quel pezzettino deve fare la sua parte, solo quella. Insieme agli altri e con gli altri… solo allora il puzzle sarà completo. Luciano aveva capito che l'umiltà serve proprio a lasciare spazio agli altri."

I ragazzi rispondono per iscritto:
1. Sei umile? Perché sì o no?
2. In quali situazioni fai più fatica a lasciare spazio agli altri?
3. Cosa puoi fare per non metterti sempre al primo posto?
4. Cosa puoi imparare dagli altri del gruppo?

Concludere con un post-it con un impegno concreto per vivere l'umiltà durante il campo → cartellone "Ognuno è un pezzo importante del puzzle".`,
      },
      luciano: `Il primo segreto di Luciano è l'umiltà. Deriva dal latino humus = terra. L'umile sa di essere nato dalla terra e non si crede superman!

Diceva Luciano: «Insegnami l'arte di essere umile. Voglio imparare l'umiltà, eliminando la presunzione e l'arroganza». E ancora: «Si arriva vicino a Te, Signore, con molta umiltà e franchezza. Dammi il coraggio della vera umiltà davanti a Te e al prossimo. Piantami, come se io fossi un granello di senape, come Tu mi vuoi e che dia frutti per la tua Gloria».

Dal diario: "Essere umile vuol dire dare valore a tutte le cose, dalle più piccole alle più grandi. Vivi sempre con umiltà e amerai la tua vita e ogni vita. Non voler essere sempre al primo posto."`,
      ritmo: "🌱 Semi da piantare dopo la preghiera serale",
    },

    // ────────────────────────────────────────────
    // LUNEDÌ 6 LUGLIO
    // ────────────────────────────────────────────
    {
      id: "lun6",
      giorno: "Lunedì",
      data: "6 luglio 2026",
      tema: "La montagna",
      beatitudine: "Beati i miti, perché erediteranno la terra",
      riferimentoVangelo: "Mt 5,5",
      colore: "#10B981",
      programma: [
        { ora: "07:30", desc: "Preghiera degli animatori" },
        { ora: "07:45", desc: "Sveglia ragazzi" },
        { ora: "08:00", desc: "Risveglio muscolare" },
        { ora: "08:15", desc: "Preghiera in cappella" },
        { ora: "08:30", desc: "Colazione" },
        { ora: "hh:mm", desc: "Scenetta: Cenerentola" },
        { ora: "—",    desc: "Camminata in montagna" },
        { ora: "16:30", desc: "Merenda; andare al torrente e raccogliere un sasso ciascuno" },
        { ora: "17:30", desc: "Docce e tempo libero" },
        { ora: "18:30", desc: "Messa (squadra in servizio); tempo libero per gli altri" },
        { ora: "19:30", desc: "Cena" },
        { ora: "20:30", desc: "Servizi e tempo libero" },
        { ora: "21:00", desc: "Serata: film Oceania" },
        { ora: "22:15", desc: "Preghiera serale in cappella — consegna cuori di carta" },
        { ora: "22:30", desc: "A letto" },
      ],
      preghieraMattino: `Signore, tu ci affidi il giorno, ogni giorno.
Lo deponi nelle nostre mani affinché noi lo rendiamo bello, utile, ricco.
Signore, ogni giorno è un dono che Tu ci fai per la nostra gioia.
Tu non hai bisogno di niente perché non potresti essere più grande,
perché non potresti essere più felice.
Signore, aiutaci a conquistare la nostra gioia,
perché ogni momento possiamo lodarti,
perché ogni giorno possiamo ringraziarti.`,
      preghieraSera: `Padre dei cieli,
con profondo stupore guardo incantato
i fiori, i campi, il mare,
il sole, la luna, le stelle…
L'uomo, così piccolo, è il signore del creato.
Nella tua bontà a lui affidi le forze della terra per vincere i mali che ancora soffre.
Ti ringraziamo, Padre buono, per il tuo dono più grande:
Gesù, nostro fratello.`,
      noteLiturgiche: `Un animatore legge: "Beati i miti, perché erediteranno la terra."
Don Riccardo lo spiega e introduce il tema della montagna.

Sera:
- Ragazzo della squadra legge il segreto della montagna.
- Don Riccardo guida le riflessioni personali.
- Consegnare a tutti un cuore di carta: ognuno scrive un pensiero gentile a chi ha considerato poco, a chi non ha dato retta durante il campo.
- Recitiamo la preghiera della sera.`,
      attivita: {
        nome: "Camminata in montagna + Angelo custode",
        responsabile: "???",
        desc: `Camminata guidata in montagna. Raccolta di un sasso al torrente nel pomeriggio (servirà per la serata del falò del venerdì).`,
      },
      luciano: `Luciano camminava e scalava le montagne per essere più vicino al cielo. Incontrava prati, fiori, alberi, animali, rocce, laghi, torrenti. Incontrava l'umiltà nella fatica della salita, la gioia per la cima raggiunta, l'allegria della discesa, l'armonia di sentirsi parte di un tutto.

Dal diario: "La montagna è una meta da raggiungere. Più cammini, più sarai stanco ma felice. Vai in montagna e impara a fare silenzio, ad ascoltare, a guardare… Scoprirai come ogni cosa è bella e capirai tante cose che sono nascoste nel tuo cuore."

La nostra vita è come una lunga camminata in montagna: c'è chi vuole andare sempre di corsa, c'è chi si fa trainare, c'è chi non ce la fa, c'è chi non ha voglia di camminare…`,
      ritmo: "🪨 Raccogliere il sasso al torrente (servirà per il falò)",
    },

    // ────────────────────────────────────────────
    // MARTEDÌ 7 LUGLIO
    // ────────────────────────────────────────────
    {
      id: "mar7",
      giorno: "Martedì",
      data: "7 luglio 2026",
      tema: "I poveri vicini e lontani",
      beatitudine: "Beati gli afflitti, perché saranno consolati",
      riferimentoVangelo: "Mt 5,4",
      colore: "#F59E0B",
      programma: [
        { ora: "07:30", desc: "Preghiera degli animatori" },
        { ora: "07:45", desc: "Sveglia ragazzi" },
        { ora: "08:00", desc: "Risveglio muscolare" },
        { ora: "08:15", desc: "Preghiera in cappella" },
        { ora: "08:30", desc: "Colazione" },
        { ora: "09:00", desc: "Servizi; animatori allestiscono i 4 stand" },
        { ora: "09:45", desc: "Scenetta: il brutto anatroccolo" },
        { ora: "10:00", desc: "Attività: Il buon samaritano in gioco (4 stand)" },
        { ora: "13:30", desc: "Pranzo" },
        { ora: "14:30", desc: "Servizi" },
        { ora: "15:00", desc: "Gioco (da definire)" },
        { ora: "16:30", desc: "Merenda" },
        { ora: "17:30", desc: "Docce e tempo libero" },
        { ora: "18:30", desc: "Messa (squadra in servizio); tempo libero per gli altri" },
        { ora: "19:30", desc: "Cena" },
        { ora: "20:30", desc: "Servizi e tempo libero" },
        { ora: "21:00", desc: "Serata: Gioco horror (resp. Andrea)" },
        { ora: "22:15", desc: "Preghiera serale in cappella — lumini a forma di cuore" },
        { ora: "22:30", desc: "A letto" },
      ],
      preghieraMattino: `Signore, resta con me in questo giorno.
Custodisci le mie mani perché non si allunghino per fare il male, ma sempre per aiutare.
Custodisci i miei piedi perché mi portino incontro alle necessità degli altri.
Custodisci la mia bocca perché dica solo il bene
e le mie orecchie perché non perdano tempo ad ascoltare parole vuote e false,
ma siano pronte ad accogliere la tua Parola per compiere anche oggi la tua volontà.
Amen.`,
      preghieraSera: `Grazie, Gesù, per chi oggi mi ha consolato e, così facendo, mi ha reso felice.
Grazie anche per la felicità che ho provato quando io, con il tuo aiuto,
sono riuscito a consolare gli altri.
Grazie perché in Te posso sempre trovare consolazione!`,
      noteLiturgiche: `Un animatore legge: "Beati gli afflitti, perché saranno consolati."
Don Riccardo lo spiega e introduce il tema dei poveri vicini e lontani.

Sera:
- Ragazzo della squadra legge il segreto dei poveri.
- Don Riccardo guida le riflessioni personali.
- Dare a tutti un lumino. Accendere prima la candela del don che ne accenderà altre, e così tutti portano la luce.
- Uno alla volta i ragazzi mettono i lumini per terra sotto la Croce formando un cuore.
- Recitiamo la preghiera della sera.`,
      attivita: {
        nome: "Il buon samaritano in gioco",
        responsabile: "???",
        desc: `Le squadre ruotano attraverso 4 stand, ognuno con un "afflitto" interpretato da un animatore. Il compito: fare quanto richiesto + trovare qualcosa in più che venga dal cuore.

Ogni "afflitto" stila una classifica 3°/2°/1° per le squadre. La classifica finale è la somma dei punteggi.

STAND 1 – L'anziano (animatore con bastone, voce da "vecchietto")
"Grazie che siete venuti! Sono sempre solo… Sto cercando le mie carte da gioco." → cercare le carte nascoste nello stand nel minor tempo possibile + gesto di consolazione.

STAND 2 – Il disabile (seduto su sedia con coperta sulle gambe, occhiali caduti per terra)
Cartello: "Non posso camminare né parlare. Interpretate il labiale."
Pronuncia lentamente: "Mi sono caduti per terra gli occhiali… potete prendermeli?" → capire il labiale, recuperare gli occhiali + gesto in più.

STAND 3 – Il senza fissa dimora (disteso su cartone con coperta vecchia)
Cartello: "Fate la carità. Ho fame."
Disponibili: panino, soldi, coperta pulita, abiti → nessuna indicazione: i ragazzi decidono cosa fare.

STAND 4 – La profuga (banco scolastico, hijab, italiano approssimativo)
"Mio nome Fatima… io musulmana… io scappata da Siria… Vorrei fare amicizia con voi…"
→ Come reagiranno?

Alla fine, riflessione guidata dal capo campo: consolare trasforma anche il nostro cuore.`,
      },
      luciano: `Dal diario di Luciano Bottan: "Riconosci che anche tu sei povero e allora amerai i poveri e, amando i poveri, amerai te stesso molto di più."

Tutti noi proveniamo dalla terra, siamo polvere, e ci compensiamo gli uni con gli altri perché siamo una cosa sola. Agli occhi di Dio siamo tutti suoi figli, tutti fratelli. Anche noi possiamo seminare l'Amore.

Gesù è la luce del mondo ma anche noi possiamo essere dei piccoli lumi per il prossimo. Un solo fiammifero acceso anche quando tutto è buio si vede, ma se tutti accendessimo un fiammifero, il buio non esisterebbe più.`,
      ritmo: "🕯️ Lumini a forma di cuore sotto la Croce",
    },

    // ────────────────────────────────────────────
    // MERCOLEDÌ 8 LUGLIO
    // ────────────────────────────────────────────
    {
      id: "mer8",
      giorno: "Mercoledì",
      data: "8 luglio 2026",
      tema: "Il sorriso",
      beatitudine: "Beati gli operatori di pace, perché saranno chiamati figli di Dio",
      riferimentoVangelo: "Mt 5,9",
      colore: "#F97316",
      programma: [
        { ora: "07:30", desc: "Preghiera degli animatori" },
        { ora: "07:45", desc: "Sveglia ragazzi" },
        { ora: "08:00", desc: "Risveglio muscolare" },
        { ora: "08:15", desc: "Preghiera in cappella" },
        { ora: "08:30", desc: "Colazione" },
        { ora: "09:00", desc: "Servizi" },
        { ora: "09:45", desc: "Scenetta" },
        { ora: "10:00", desc: "Attività (da definire)" },
        { ora: "13:30", desc: "Pranzo" },
        { ora: "14:30", desc: "Servizi" },
        { ora: "15:00", desc: "Gioco (da definire)" },
        { ora: "16:30", desc: "Merenda" },
        { ora: "17:30", desc: "Docce e tempo libero" },
        { ora: "18:30", desc: "Messa (squadra in servizio); tempo libero per gli altri" },
        { ora: "19:30", desc: "Cena" },
        { ora: "20:30", desc: "Servizi e tempo libero" },
        { ora: "21:00", desc: "Serata: Campo's Got Talent" },
        { ora: "22:15", desc: "Preghiera serale in cappella" },
        { ora: "22:30", desc: "A letto" },
      ],
      preghieraMattino: `Ti ringrazio, Padre, per questo nuovo giorno.
Aiutami a viverlo in amicizia con te e con il prossimo.
Donami la forza per affrontare gli impegni che mi aspettano.
Aiutami a condividere la gioia e a superare le difficoltà.
Amen.`,
      preghieraSera: `Gesù, insegnaci a donarci agli altri con semplicità e gioia.
Fa' che il nostro sorriso sia un segno di amicizia,
capace di far sentire tutti accolti e voluti bene.
Aiutaci a condividere il nostro tempo,
ad aiutare chi ha bisogno
e a portare un po' della tua felicità a chi incontriamo ogni giorno,
seminando la pace come Tu ci hai insegnato.`,
      noteLiturgiche: `Un animatore legge: "Beati gli operatori di pace, perché saranno chiamati figli di Dio."
Don Riccardo lo spiega e introduce il tema del sorriso.

Sera:
- Ragazzo della squadra legge il segreto del sorriso.
- Don Riccardo guida le riflessioni personali.
- Il capo campo invita tutti ad abbracciarsi.
- Recitiamo la preghiera della sera.`,
      attivita: {
        nome: "Attività sul sorriso (da definire)",
        responsabile: "???",
        desc: "Da definire.",
      },
      luciano: `Luciano sapeva ridere, ma non come chi ride per prendere in giro gli altri. In lui e sul suo viso tutto rideva e sorrideva.

Pensate che amava così tanto la vita da sorridere sempre, anche nei momenti difficili. Diceva: "Che non debba mai dir di no, ma sempre un sì con un sorriso sulle labbra."

Dal diario: "Sorridi per dire sì alla vita, sorridi per trasformare questo mondo in un paradiso."

Madre Teresa diceva: "Non capiremo mai abbastanza quanto bene è capace di fare un sorriso." E ancora: "La gioia è contagiosa. Cercate di essere sempre traboccanti di gioia, ovunque andiate." Ricordiamoci che la pace inizia da noi.`,
      ritmo: "😊 Invito ad abbracciarsi alla fine della preghiera",
    },

    // ────────────────────────────────────────────
    // GIOVEDÌ 9 LUGLIO
    // ────────────────────────────────────────────
    {
      id: "gio9",
      giorno: "Giovedì",
      data: "9 luglio 2026",
      tema: "Il lavoro",
      beatitudine: "Beati quelli che hanno fame e sete della giustizia, perché saranno saziati",
      riferimentoVangelo: "Mt 5,6",
      colore: "#EF4444",
      programma: [
        { ora: "07:30", desc: "Preghiera degli animatori" },
        { ora: "07:45", desc: "Sveglia ragazzi" },
        { ora: "08:00", desc: "Risveglio muscolare" },
        { ora: "08:15", desc: "Preghiera in cappella" },
        { ora: "08:30", desc: "Colazione" },
        { ora: "09:00", desc: "Servizi; animatori allestiscono gli stand" },
        { ora: "09:45", desc: "Scenetta: Robin Hood" },
        { ora: "10:00", desc: "Attività: Costruiamo il futuro" },
        { ora: "13:30", desc: "Pranzo" },
        { ora: "14:30", desc: "Servizi" },
        { ora: "15:00", desc: "Tornei organizzati" },
        { ora: "16:30", desc: "Merenda" },
        { ora: "17:30", desc: "Docce e tempo libero" },
        { ora: "18:30", desc: "Messa (squadra in servizio); tempo libero per gli altri" },
        { ora: "19:30", desc: "Cena con delitto: il mistero della stanza chiusa" },
        { ora: "22:15", desc: "Preghiera serale in cappella" },
        { ora: "22:30", desc: "A letto" },
      ],
      preghieraMattino: `Gesù, oggi, come ogni giorno, con i compagni di campo, con gli amici,
con gli animatori e i capi-campo,
con coloro che semplicemente incontrerò,
tu busserai alla mia porta.
Aiutami a riconoscere la tua voce, e ad aprirti sempre,
così che tu possa entrare nella mia vita e restare con me.
Amen.`,
      preghieraSera: `Signore, questa sera penso a cosa ho fatto oggi:
quando ho sorriso, quando ho aiutato, ma anche quando ho fatto fatica a voler bene agli altri.
Perdona i miei sbagli, fa' crescere il mio cuore,
e domani aiutami ad essere migliore.`,
      noteLiturgiche: `Un animatore legge: "Beati quelli che hanno fame e sete della giustizia."
Don Riccardo lo spiega e introduce il tema del lavoro.

Sera:
- Ragazzo della squadra legge il segreto del lavoro.
- Don Riccardo guida le riflessioni personali.
- Recitiamo la preghiera della sera.`,
      attivita: {
        nome: "Costruiamo il futuro",
        responsabile: "???",
        desc: `Ogni squadra progetta qualcosa per la città (parco, palazzo, chiesa…). Il progetto deve essere ecosostenibile e utile alla comunità.

MONETE DEL SACRIFICIO (MS) e PUNTI CITTADINANZA ATTIVA (PCA).

PERSONAGGI:
• Municipio — 10 domande sulla città: 1 PCA per risposta esatta.
• Ingegnere — valuta il progetto, assegna 1-5 PCA (costo: 2 MS).
• Ufficio di Collocamento — lavoro fisico (10 flessioni → 5 MS) o di ragioneria (espressione matematica → 5 MS).
• Onlus/Volontariato — offerta 2MS→4PCA; vestiti→5MS; 4PCA→2MS.
• Spacciatore — offre 20 MS in cambio di 5 PCA. Conviene?
• Banca — deposito: ogni 15 min +1 PCA e +1 MS ai risparmi.
• Emporio — fornisce materiale per costruire il progetto.

Ogni squadra può rivolgersi a ciascun personaggio max 3 volte, mai due volte di fila allo stesso.`,
      },
      serata: {
        titolo: "Cena con delitto: il mistero della stanza chiusa",
        responsabile: "Andrea",
        desc: `TRAMA: Un famoso ereditiero milionario (Francesco) invita nella sua villa 4 persone: sua figlia maggiore (Anna), suo fratello (Carlo), sua cognata (Alice), il medico personale (Martina). Durante la cena emergono vecchi rancori. Francesco viene trovato morto in camera — porta chiusa dall'interno, chiave sul comodino, finestra chiusa.

PERSONAGGI ANIMATORI:
• Francesco (vittima)
• Anna — convinta di essere erede, il padre la esclude dall'azienda
• Carlo — sommerso di debiti, Francesco nega altri aiuti
• Alice — relazione segreta + furto di denaro dall'azienda; Francesco lo sa
• Martina — riceve parte consistente dell'eredità
• Andrea (detective)

SOLUZIONE: Assassina = Alice. Movente: Francesco aveva scoperto la relazione e i furti. Metodo: veleno a effetto ritardato versato nel bicchiere durante la cena.

INDIZI:
Contro Alice: ricevuta per lo stesso farmaco + assegno con firma falsificata.
Contro Carlo: testimoni del litigio violento.
Contro Anna: discussione accesa a cena.
Contro Martina: ricevuta farmaco + testamento che la favorisce.
Altri: lettera a Carlo "dobbiamo parlare di tua moglie"; figlia sente padre con donna "so quello che stai facendo"; tracce di sangue da caduta.`,
      },
      luciano: `La parola lavoro deriva dal latino làbor = fare fatica. Anche Luciano ha lavorato per tanti anni — c'è stato un periodo in cui di giorno lavorava e la sera studiava. Lavorava sempre con il sorriso ed era instancabile. I compagni lo sentivano uno di loro, semplice e puntuale.

Dal diario: "Ogni lavoro è importante: non ci sono lavori di serie A o di serie B. Ogni lavoro serve per sentirci utili e per sognare un mondo migliore."`,
    },

    // ────────────────────────────────────────────
    // VENERDÌ 10 LUGLIO
    // ────────────────────────────────────────────
    {
      id: "ven10",
      giorno: "Venerdì",
      data: "10 luglio 2026",
      tema: "La fede",
      beatitudine: "Beati i misericordiosi, perché troveranno misericordia",
      riferimentoVangelo: "Mt 5,7",
      colore: "#0EA5E9",
      programma: [
        { ora: "07:30", desc: "Preghiera degli animatori" },
        { ora: "07:45", desc: "Sveglia ragazzi" },
        { ora: "08:00", desc: "Risveglio muscolare" },
        { ora: "08:15", desc: "Preghiera in cappella" },
        { ora: "08:30", desc: "Colazione" },
        { ora: "09:00", desc: "Servizi; animatori allestiscono gli stand" },
        { ora: "09:45", desc: "Scenetta: Pinocchio" },
        { ora: "10:00", desc: "Attività: il Deserto (resp. Don Riccardo, Germana, Giulio)" },
        { ora: "13:30", desc: "Pranzo" },
        { ora: "14:30", desc: "Servizi" },
        { ora: "15:00", desc: "Gioco: Diamanti (resp. ???)" },
        { ora: "16:30", desc: "Merenda" },
        { ora: "17:30", desc: "Docce e tempo libero" },
        { ora: "18:30", desc: "Messa (squadra in servizio); tempo libero per gli altri" },
        { ora: "19:30", desc: "Cena" },
        { ora: "20:30", desc: "Servizi e tempo libero" },
        { ora: "21:00", desc: "Serata: Falò (resp. Giulio)" },
        { ora: "22:15", desc: "Preghiera serale attorno al fuoco (a tre cori)" },
        { ora: "22:30", desc: "A letto" },
      ],
      preghieraMattino: `All'inizio del giorno accetta, o Padre, la nostra offerta.
Ti offriamo il nostro gioco, il nostro lavoro,
il nostro impegno, i nostri pensieri buoni,
le nostre azioni di questa giornata.
Aiutaci a costruire il tuo Regno di giustizia, d'amore e di pace
con i nostri piccoli gesti quotidiani
perché anche noi, nel nostro piccolo,
possiamo contribuire a realizzare con la nostra vita il tuo Vangelo.`,
      preghieraSera: `— Preghiera a tre cori attorno al fuoco —

Signore Gesù, questa sera, sotto le stelle e attorno a questo fuoco,
con il cuore pieno di emozioni, ci fermiamo un momento per dirti GRAZIE.

[coro A] Gesù, spesso mi ricordo di parlare con Te solo quando mi serve qualcosa,
ma oggi voglio farlo in modo diverso: semplicemente per dirti grazie.
Grazie per questi giorni di campo, per tutto quello che ho vissuto.

[coro B] Ho provato soddisfazione quando ho saputo superare la pigrizia.
Sono stato felice quando ho trovato il coraggio di mettermi in gioco.
Mi sono anche arrabbiato con me stesso qualche volta.

[coro C] Grazie per gli amici, quelli che conoscevo già e quelli nuovi.
Grazie per i sorrisi, le risate, le chiacchiere, le corse, le sfide.
Grazie per i segreti che ci hai insegnato attraverso Luciano.

[tutti] Signore, ti affido questo campo. Fa' che non vada perso dentro me,
ma resti un tesoro vivo nel cuore.
Proteggi la mia "famiglia del campo": i miei amici, vecchi e nuovi,
gli animatori Carlo Alberto, Francesco, Anna, Martina, Andrea e Alice,
il capo campo Giulio, don Riccardo, Germana, Sandra
e i cuochi Leonardo, Aldo e Alessandro,
che in vari modi mi sono stati vicini e si sono presi cura di me.
Fa' che possa ricordarmi ogni giorno di essere felice davvero
come ci ha insegnato Luciano, che è un esempio di vita per tutti noi.
Resta con noi, Signore, anche quando torneremo a casa. Amen.`,
      noteLiturgiche: `Un animatore legge: "Beati i misericordiosi, perché troveranno misericordia."
Don Riccardo lo spiega e introduce il tema della fede.

Sera:
- Ragazzo della squadra legge il segreto della fede.
- Don Riccardo guida le riflessioni personali.
- Un animatore legge pagina 24 del libretto (Il tesoro che porto con me).
- Giulio guida la riflessione su cosa abbiamo vissuto.
- Ognuno scrive una o più parole sul libretto e poi una sul proprio sasso.
- A turno chi vuole si alza e legge la parola sul sasso e il perché.
- Tutti mettono il sasso per terra a formare un cerchio intorno al fuoco.
- Preghiera a tre cori attorno al fuoco.`,
      attivita: {
        nome: "Il Deserto",
        responsabile: "Don Riccardo, Germana, Giulio",
        desc: "Momento di silenzio e preghiera personale. Dettagli da definire con don Riccardo.",
      },
      luciano: `Eccoci all'ultimo segreto di Luciano: la fede. Il motore che portava avanti la sua vita era il suo credere in Dio. Parlava a Dio come un innamorato parla alla sua ragazza.

Diceva: «Fa' che abbia sempre sete di te Signore, voglio impregnarmi di Te. Tu stai costruendo la tua casa in me. Ti lascio fare. Nei momenti di scoraggiamento, dammi Tu la forza di fermarmi e pregare per attingere alla Tua fonte, per poi ripartire con più luce e più slancio.

Io non ce la faccio più, per piacere aiutami Tu. Ho voglia di tenerezza, di un Tuo bacio, di sentirmi sicuro. Mi sento prendere per mano da Te e questo mi dà fiducia. Voglio dare la mia vita a Te, perché Tu la dia agli altri.»

Dal diario: "Non mettere te al centro della tua vita, ma lascia il primo posto a Dio: sarai felice per sempre."`,
      ritmo: "🪨 Ognuno scrive una parola sul sasso e lo mette attorno al fuoco",
    },

    // ────────────────────────────────────────────
    // SABATO 11 LUGLIO
    // ────────────────────────────────────────────
    {
      id: "sab11",
      giorno: "Sabato",
      data: "11 luglio 2026",
      tema: "Partenza",
      beatitudine: null,
      colore: "#64748B",
      programma: [
        { ora: "—", desc: "Preparazione valige, pulizia stanze" },
        { ora: "—", desc: "Colazione" },
        { ora: "—", desc: "Momento conclusivo e saluti" },
        { ora: "—", desc: "Partenza verso casa" },
      ],
      preghieraMattino: null,
      preghieraSera: null,
      noteLiturgiche: null,
      attivita: null,
      luciano: null,
    },
  ],

  canti: [
    { titolo: "La Canzone di Luciano",       uso: "Tema del campo, sabato sera" },
    { titolo: "Ecco quel che abbiamo",       uso: "Offertorio" },
    { titolo: "È bello lodarti",             uso: "Lodi / ingresso" },
    { titolo: "Accogli Signore i nostri doni", uso: "Offertorio" },
    { titolo: "Come ti ama Dio",             uso: "Comunione / meditazione" },
    { titolo: "Resta accanto a me",          uso: "Conclusione Messa" },
    { titolo: "Osanna eh!",                  uso: "Santo (Messa)" },
    { titolo: "Camminerò",                   uso: "Invio / uscita" },
    { titolo: "Nel tuo silenzio",            uso: "Adorazione / meditazione" },
    { titolo: "Servo per amore",             uso: "Riflessione" },
    { titolo: "Ti ringrazio mio Signore",    uso: "Ringraziamento / conclusione" },
    { titolo: "Andate per le strade",        uso: "Invio" },
    { titolo: "È un giorno di festa",        uso: "Ingresso / lodi" },
    { titolo: "Frutto della nostra terra",   uso: "Offertorio" },
    { titolo: "Incontro a Te",               uso: "Comunione" },
    { titolo: "Alleluia, la nostra festa",   uso: "Alleluia" },
    { titolo: "Acqua siamo noi",             uso: "Riflessione / conclusione" },
    { titolo: "Chiamati per nome",           uso: "Ingresso / comunione" },
    { titolo: "La preghiera di Gesù e la nostra", uso: "Meditazione" },
    { titolo: "Padre Nostro",                uso: "Messa" },
    { titolo: "Ave o Maria",                 uso: "Mariano / rosario" },
    { titolo: "Salve Regina",                uso: "Mariano" },
    { titolo: "Gloria al Padre",             uso: "Dossologia" },
    { titolo: "Angelo di Dio",               uso: "Preghiera personale" },
  ],

  preghiereBase: [
    {
      titolo: "Padre Nostro",
      testo: `Padre nostro che sei nei cieli,
sia santificato il tuo nome,
venga il tuo regno,
sia fatta la tua volontà come in cielo così in terra.
Dacci oggi il nostro pane quotidiano,
e rimetti a noi i nostri debiti
come anche noi li rimettiamo ai nostri debitori,
e non abbandonarci alla tentazione,
ma liberaci dal male.`
    },
    {
      titolo: "Ave Maria",
      testo: `Ave, o Maria, piena di grazia,
il Signore è con te.
Tu sei benedetta fra le donne
e benedetto è il frutto del tuo seno, Gesù.
Santa Maria, Madre di Dio,
prega per noi peccatori,
adesso e nell'ora della nostra morte.
Amen.`
    },
    {
      titolo: "Gloria al Padre",
      testo: `Gloria al Padre e al Figlio e allo Spirito Santo.
Come era nel principio, ora e sempre,
nei secoli dei secoli.
Amen.`
    },
    {
      titolo: "Angelo di Dio",
      testo: `Angelo di Dio, che sei il mio custode
illumina, custodisci, reggi e governa me
che ti fui affidato dalla pietà celeste.
Amen.`
    },
    {
      titolo: "Salve Regina",
      testo: `Salve, Regina, madre di misericordia,
vita, dolcezza e speranza nostra, salve.
A te ricorriamo, esuli figli di Eva;
a te sospiriamo, gementi e piangenti in questa valle di lacrime.
Orsù dunque, avvocata nostra,
rivolgi a noi gli occhi tuoi misericordiosi.
E mostraci, dopo questo esilio, Gesù,
il frutto benedetto del tuo Seno.
O clemente, o pia, o dolce Vergine Maria!`
    },
    {
      titolo: "L'Eterno Riposo",
      testo: `L'eterno riposo dona loro, o Signore,
e splenda ad essi la luce perpetua.
Riposino in pace.`
    },
  ],

  materiale: [
    "Braccialetti colorati (gialli, blu, rosa)",
    "Bigliettini colorati per squadre con nomi e cognomi",
    "Oggetti presentazione animatori",
    "Materiale caccia al tesoro (indovinelli + regole a colori)",
    "Carte da gioco (francesi)",
    "4 puzzle",
    "Post-it",
    "Semi da piantare",
    "Sagome di cuori in carta",
    "30 lumini",
    "Sasso per ciascun ragazzo (raccolto al torrente lunedì)",
    "Scalpi",
    "Diamanti (pennarelli)",
    "Film: Oceania",
    "— STAND IL BUON SAMARITANO —",
    "Bastone (anziano)",
    "Vestiti + occhiali + coperta (disabile)",
    "Cartone + coperta vecchia + panino + soldi + abiti (senza fissa dimora)",
    "Banco + quaderni + libri + penne + colori + hijab (profuga)",
    "— CENA CON DELITTO —",
    "Chiave stanza",
    "— COSTRUIAMO IL FUTURO —",
    "Monete del Sacrificio (cartoncini a forma di moneta)",
    "Punti Cittadinanza Attiva (cartoncini quadrati diverso colore)",
  ]
};

// Rendi disponibile globalmente
window.CAMPO = CAMPO;
