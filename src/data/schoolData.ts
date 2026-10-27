export interface StudySubject {
  name: string;
  hours: (number | string)[]; // [I, II, III, IV, V]
}

export interface StudyPlan {
  id: string;
  name: string;
  category: 'Licei' | 'Tecnici' | 'Filiera 4+2';
  code: string;
  codeName: string;
  shortDesc: string;
  fullDesc: string;
  objectives: string[];
  careers: string[];
  subjects: StudySubject[];
  totalHours: number[];
  color: string;
  badge: string;
}

export interface BrochurePage {
  pageNumber: number;
  title: string;
  subtitle: string;
  category: string;
  content: string;
  highlights: string[];
  metaInfo?: string;
}

export const SCHOOL_INFO = {
  name: 'I.I.S. Don Lorenzo Milani',
  city: 'Gragnano (NA)',
  motto: 'Accogliere, formare e orientare tra esperienza ed innovazione',
  website: 'https://www.donmilanigragnano.edu.it',
  email: 'nais013007@istruzione.it',
  phone: '081 8700000',
  mimEnrollmentUrl: 'https://www.mim.gov.it/-/iscrizioni-online',
  locations: [
    {
      type: 'Sede Centrale',
      address: 'Via Quarantola, 6',
      city: 'Gragnano (NA)',
      features: 'Presidenza, uffici di segreteria, auditorium, laboratori scientifici e multimediali'
    },
    {
      type: 'Seconda Sede (Succursale)',
      address: 'Via Castellammare, 191',
      city: 'Gragnano (NA)',
      features: 'Struttura polifunzionale ristrutturata (dall’a.s. 2023/24), aule multimediali e dotazioni tecnologiche di ultima generazione'
    }
  ],
  officeHours: [
    { days: 'Lunedì, Mercoledì e Sabato', hours: 'dalle ore 08:30 alle 11:30' },
    { days: 'Martedì e Giovedì', hours: 'dalle ore 14:30 alle 17:00' }
  ],
  mechanographicCodes: [
    {
      code: 'NAPS01301N',
      sector: 'Licei',
      courses: [
        'Liceo Classico',
        'Liceo Scientifico',
        'Liceo Scientifico Opzione Scienze Applicate',
        'Liceo delle Scienze Umane'
      ],
      description: 'Codice meccanografico da indicare su Iscrizioni Online per tutti e 4 i percorsi liceali.'
    },
    {
      code: 'NATD01301D',
      sector: 'Tecnico Economico AFM & Filiera 4+2',
      courses: [
        'Amministrazione, Finanza e Marketing (A.F.M.)',
        'Filiera Formativa "4+2" (D.M. 256/2024)'
      ],
      description: 'Codice meccanografico per il corso Tecnico Economico AFM e per la sperimentazione Filiera 4+2.'
    },
    {
      code: 'NATN01301B',
      sector: 'Tecnico Economico SIA & Turismo',
      courses: [
        'Sistemi Informativi Aziendali (S.I.A.)',
        'Istituto Tecnico per il Turismo'
      ],
      description: 'Codice meccanografico per gli indirizzi Sistemi Informativi Aziendali e Turismo.'
    }
  ]
};

export const STUDY_PLANS: StudyPlan[] = [
  {
    id: 'classico',
    name: 'Liceo Classico',
    category: 'Licei',
    code: 'NAPS01301N',
    codeName: 'Licei Gragnano',
    shortDesc: 'Studio approfondito della cultura classica (Latino e Greco), storico-filosofica, scientifica e lingua inglese per 5 anni.',
    fullDesc: 'L’elemento caratterizzante e il valore formativo specifico di questo indirizzo consistono nello studio della cultura classica (Latino e Greco) abbinato ad una conoscenza approfondita delle discipline storico-filosofiche, scientifiche e della lingua inglese, che si studia per 5 anni. L’obiettivo di fondo è quello di preparare lo studente a comprendere la realtà in cui è inserito mediante la consapevolezza dei modelli culturali del passato, e la capacità di accostarsi al mondo di oggi mediante il possesso di una sicura metodologia critico-scientifica.',
    badge: 'Cultura & Pensiero Critico',
    color: 'emerald',
    objectives: [
      'Consapevolezza della formazione del mondo moderno e dell’identità occidentale, nel rapporto di continuità-alterità tra oggi e il passato',
      'Elaborazione di un metodo di studio produttivo e applicabile ai più diversi contesti',
      'Capacità di confronto tra la propria realtà e quella dei testi e delle civiltà affrontati',
      'Conoscenza dei contenuti concettuali delle lingue classiche che consentono di dare trasparenza ai linguaggi intellettuali e settoriali moderni',
      'Acquisizione di contenuti adeguati all’accesso agevole a tutte le facoltà universitarie sia umanistiche che scientifiche'
    ],
    careers: [
      'Tutte le facoltà universitarie (Giurisprudenza, Medicina, Lettere, Filosofia, Scienze Politiche, Economia, Ingegneria)',
      'Editoria, Giornalismo, Comunicazione e Nuovi Media',
      'Beni culturali, Archeologia, Conservazione e Museologia',
      'Diplomazia, Pubblica Amministrazione e Carriere Direttive'
    ],
    totalHours: [27, 27, 31, 31, 31],
    subjects: [
      { name: 'Lingua e letteratura italiana', hours: [4, 4, 4, 4, 4] },
      { name: 'Lingua e letteratura latina', hours: [5, 5, 4, 4, 4] },
      { name: 'Lingua e letteratura greca', hours: [4, 4, 3, 3, 3] },
      { name: 'Lingua e cultura straniera (Inglese)', hours: [3, 3, 3, 3, 3] },
      { name: 'Geostoria', hours: [3, 3, '-', '-', '-'] },
      { name: 'Storia', hours: ['-', '-', 3, 3, 3] },
      { name: 'Filosofia', hours: ['-', '-', 3, 3, 3] },
      { name: 'Storia dell’Arte', hours: ['-', '-', 2, 2, 2] },
      { name: 'Matematica * (con Informatica al biennio)', hours: [3, 3, 2, 2, 2] },
      { name: 'Fisica', hours: ['-', '-', 2, 2, 2] },
      { name: 'Scienze naturali ** (Biologia, chimica, scienze della terra)', hours: [2, 2, 2, 2, 2] },
      { name: 'Scienze motorie e sportive', hours: [2, 2, 2, 2, 2] },
      { name: 'Religione Cattolica / Attività alternative', hours: [1, 1, 1, 1, 1] }
    ]
  },
  {
    id: 'scientifico',
    name: 'Liceo Scientifico',
    category: 'Licei',
    code: 'NAPS01301N',
    codeName: 'Licei Gragnano',
    shortDesc: 'Sinergia tra approfondimento scientifico-matematico e solida base umanistica e filosofica.',
    fullDesc: 'La scelta del L.S. si basa sulle precise volontà di offrire un percorso scolastico che conduce alla formazione globale della persona, fondata su un marcato approfondimento delle discipline scientifiche e su una solida base umanistica, nella quale lo studio del latino garantisce lo sviluppo del pensiero critico e l’acquisizione dell’eleganza verbale; esso rappresenta infatti una parte della nostra storia non solo a livello culturale, ma anche sociale e politico. Il metodo di studio acquisito garantisce lo sviluppo e il potenziamento delle capacità logiche di una persona, utilizzabili in tutti i settori della vita.',
    badge: 'Scienze & Metodo',
    color: 'blue',
    objectives: [
      'Appreso concetti, principi e teorie scientifiche',
      'Elaborato l’analisi critica dei fenomeni considerati, la riflessione sulle procedure sperimentali e la ricerca di strategie atte a favorire la scoperta scientifica',
      'Individuato le caratteristiche e l’apporto dei vari linguaggi formali',
      'Padronanza del calcolo matematico, modellizzazione e deduzione logica',
      'Raccordo tra speculazione scientifica ed etica filosofica'
    ],
    careers: [
      'Facoltà scientifiche: Ingegneria (qualsiasi ramo), Medicina e Chirurgia, Fisica, Matematica, Biotecnologie',
      'Economia, Finanza quantitativa, Statistica e Data Science',
      'Architettura, Design industriale e Ricerca scientifica',
      'Concorsi per carriere direttive ed enti pubblici'
    ],
    totalHours: [27, 27, 30, 30, 30],
    subjects: [
      { name: 'Lingua e letteratura italiana', hours: [4, 4, 4, 4, 4] },
      { name: 'Lingua e cultura latina', hours: [3, 3, 3, 3, 3] },
      { name: 'Lingua e cultura straniera (Inglese)', hours: [3, 3, 3, 3, 3] },
      { name: 'Storia e geografia', hours: [3, 3, '-', '-', '-'] },
      { name: 'Storia', hours: ['-', '-', 2, 2, 2] },
      { name: 'Filosofia', hours: ['-', '-', 3, 3, 3] },
      { name: 'Matematica', hours: [5, 5, 4, 4, 4] },
      { name: 'Fisica', hours: [2, 2, 3, 3, 3] },
      { name: 'Scienze naturali (Biologia, Chimica, Scienze Terra)', hours: [2, 2, 3, 3, 3] },
      { name: 'Disegno e Storia dell’Arte', hours: [2, 2, 2, 2, 2] },
      { name: 'Scienze motorie e sportive', hours: [2, 2, 2, 2, 2] },
      { name: 'Religione Cattolica / Attività alternative', hours: [1, 1, 1, 1, 1] }
    ]
  },
  {
    id: 'scienze-applicate',
    name: 'Liceo Scientifico Scienze Applicate',
    category: 'Licei',
    code: 'NAPS01301N',
    codeName: 'Licei Gragnano',
    shortDesc: 'Informatica per 5 anni, potenziamento delle scienze sperimentali di laboratorio, senza latino.',
    fullDesc: 'Il percorso del Liceo opzione Scienze Applicate, pur mantenendo le caratteristiche educative e culturali della struttura liceale, potenzia l’ambito scientifico con particolare riferimento alle scienze matematiche, sperimentali ed informatiche e alle loro applicazioni. Il Liceo fornisce una solida preparazione di base per l’accesso ad ogni facoltà universitaria.',
    badge: 'Laboratori & Tech',
    color: 'amber',
    objectives: [
      'Appreso concetti, principi e teorie scientifiche anche attraverso esemplificazioni operative di laboratorio',
      'Elaborato l’analisi critica dei fenomeni considerati, la riflessione sulle procedure sperimentali e la ricerca di strategie atte a favorire la scoperta scientifica',
      'Analizzato le strutture logiche coinvolte ed i modelli utilizzati nella ricerca scientifica',
      'Saputo utilizzare gli strumenti informatici in relazione all’analisi dei dati individuando la funzione dell’informatica nello sviluppo scientifico',
      'Saputo applicare i metodi della scienza in diversi ambiti professionali e di ricerca'
    ],
    careers: [
      'Informatica, Intelligenza Artificiale, Cyber Security, Ingegneria Informatica e Robotica',
      'Medicina, Farmacia, Biotecnologie molecolari, Scienze Biomediche',
      'Scienze Ambientali, Chimica Industriale e Ricerca e Sviluppo',
      'Qualsiasi facoltà universitaria ad alto coefficiente tecnologico'
    ],
    totalHours: [27, 27, 30, 30, 30],
    subjects: [
      { name: 'Lingua e letteratura italiana', hours: [4, 4, 4, 4, 4] },
      { name: 'Lingua e cultura straniera (Inglese)', hours: [3, 3, 3, 3, 3] },
      { name: 'Storia e geografia', hours: [3, 3, '-', '-', '-'] },
      { name: 'Storia', hours: ['-', '-', 2, 2, 2] },
      { name: 'Filosofia', hours: ['-', '-', 2, 2, 2] },
      { name: 'Matematica', hours: [5, 4, 4, 4, 4] },
      { name: 'Informatica (applicata per 5 anni)', hours: [2, 2, 2, 2, 2] },
      { name: 'Fisica', hours: [2, 2, 3, 3, 3] },
      { name: 'Scienze naturali (Biologia, Chimica, Scienze Terra)', hours: [3, 4, 5, 5, 5] },
      { name: 'Disegno e Storia dell’Arte', hours: [2, 2, 2, 2, 2] },
      { name: 'Scienze motorie e sportive', hours: [2, 2, 2, 2, 2] },
      { name: 'Religione Cattolica / Attività alternative', hours: [1, 1, 1, 1, 1] }
    ]
  },
  {
    id: 'scienze-umane',
    name: 'Liceo delle Scienze Umane',
    category: 'Licei',
    code: 'NAPS01301N',
    codeName: 'Licei Gragnano',
    shortDesc: 'Psicologia, pedagogia, sociologia e antropologia per comprendere le relazioni umane e sociali.',
    fullDesc: 'Gli studenti che scelgono questo indirizzo sviluppano salde conoscenze nell’ambito della cultura pedagogica, psicologica e socio-antropologica. Lo studio del latino, inoltre, consentirà loro lo sviluppo del pensiero critico e l’acquisizione dell’eleganza verbale. Per la sua ampia formazione di base, il corso consente l’accesso a qualsiasi facoltà universitaria, in particolare alle facoltà umanistiche e sanitarie e l’inserimento nel mondo del lavoro.',
    badge: 'Persona & Società',
    color: 'rose',
    objectives: [
      'Comprensione approfondita dei processi evolutivi e delle dinamiche cognitive e relazionali',
      'Studio scientifico dei fenomeni educativi, formativi e assistenziali',
      'Padronanza dei linguaggi sociologici, antropologici e psicologici',
      'Sviluppo di elevate competenze di ascolto, comunicazione ed empatia',
      'Rigore logico-argomentativo favorito dallo studio della lingua e cultura latina'
    ],
    careers: [
      'Psicologia, Scienze della Formazione Primaria, Scienze dell’Educazione, Sociologia, Servizio Sociale',
      'Professioni sanitarie (Infermieristica, Fisioterapia, Logopedia, Terapia Occupazionale)',
      'Operatore presso comunità per l’inserimento sociale e cooperazione',
      'Operatore nel campo della comunicazione pubblicitaria e relazioni d’impresa',
      'Operatore nelle strutture assistenziali, scolastiche e cooperative sociali'
    ],
    totalHours: [27, 27, 30, 30, 30],
    subjects: [
      { name: 'Lingua e letteratura italiana', hours: [4, 4, 4, 4, 4] },
      { name: 'Lingua e cultura latina', hours: [3, 3, 2, 2, 2] },
      { name: 'Lingua e cultura straniera (Inglese)', hours: [3, 3, 3, 3, 3] },
      { name: 'Storia e geografia', hours: [3, 3, '-', '-', '-'] },
      { name: 'Storia', hours: ['-', '-', 2, 2, 2] },
      { name: 'Filosofia', hours: ['-', '-', 3, 3, 3] },
      { name: 'Scienze Umane (Pedagogia, Psicologia, Antropologia, Sociologia)', hours: [4, 4, 5, 5, 5] },
      { name: 'Diritto ed Economia', hours: [2, 2, '-', '-', '-'] },
      { name: 'Matematica', hours: [3, 3, 2, 2, 2] },
      { name: 'Fisica', hours: ['-', '-', 2, 2, 2] },
      { name: 'Scienze naturali', hours: [2, 2, 2, 2, 2] },
      { name: 'Storia dell’Arte', hours: ['-', '-', 2, 2, 2] },
      { name: 'Scienze motorie e sportive', hours: [2, 2, 2, 2, 2] },
      { name: 'Religione Cattolica / Attività alternative', hours: [1, 1, 1, 1, 1] }
    ]
  },
  {
    id: 'afm',
    name: 'Tecnico Economico - A.F.M.',
    category: 'Tecnici',
    code: 'NATD01301D',
    codeName: 'AFM Gragnano',
    shortDesc: 'Amministrazione, Finanza e Marketing: competenze aziendali, fiscali, bancarie e due lingue comunitarie.',
    fullDesc: 'L’indirizzo Tecnico Economico - AFM offre una solida base culturale e competenze tecniche per operare nel sistema aziendale, utilizzare gli strumenti per il marketing, gestire prodotti assicurativi e finanziari e lavorare nel settore dell’economia. L’indirizzo dà ampio spazio all’informatica e alle lingue comunitarie. Consente l’accesso a qualsiasi facoltà universitaria (Economia, Giurisprudenza, Scienze Politiche) e al mercato del lavoro qualificato.',
    badge: 'Economia & Management',
    color: 'teal',
    objectives: [
      'Gestione dei processi contabili, finanziari, di bilancio e pianificazione fiscale',
      'Pianificazione strategica e marketing mix per imprese commerciali e industriali',
      'Conoscenza approfondita del diritto civile, commerciale, tributario ed economia politica',
      'Padronanza di due lingue comunitarie (Inglese e Francese)',
      'Utilizzo professionale di software contabili, ERP e fogli di calcolo'
    ],
    careers: [
      'Impiego nel settore industriale e commerciale (amministrazione, contabilità, marketing)',
      'Impiego nella Pubblica Amministrazione e negli enti locali',
      'Impiego presso studi professionali di commercialisti, consulenti del lavoro e tributaristi',
      'Banche, istituti finanziari, assicurazioni e broker',
      'Accesso a tutte le facoltà universitarie e agli ITS Academy'
    ],
    totalHours: [32, 32, 32, 32, 32],
    subjects: [
      { name: 'Lingua e letteratura italiana', hours: [4, 4, 4, 4, 4] },
      { name: 'Lingua Inglese', hours: [3, 3, 3, 3, 3] },
      { name: '2° lingua comunitaria (Francese)', hours: [3, 3, 3, 3, 3] },
      { name: 'Storia', hours: [2, 2, 2, 2, 2] },
      { name: 'Matematica', hours: [4, 4, 3, 3, 3] },
      { name: 'Diritto ed Economia', hours: [2, 2, '-', '-', '-'] },
      { name: 'Diritto', hours: ['-', '-', 3, 3, 3] },
      { name: 'Economia Politica', hours: ['-', '-', 3, 2, 3] },
      { name: 'Economia Aziendale', hours: [2, 2, 6, 7, 8] },
      { name: 'Informatica', hours: [2, 2, 2, 2, '-'] },
      { name: 'Scienze integrate (Scienze della Terra e Biologia)', hours: [2, 2, '-', '-', '-'] },
      { name: 'Scienze integrate (Fisica e Chimica)', hours: [2, 2, '-', '-', '-'] },
      { name: 'Geografia', hours: [3, 3, '-', '-', '-'] },
      { name: 'Scienze motorie', hours: [2, 2, 2, 2, 2] },
      { name: 'Religione Cattolica / Attività alternative', hours: [1, 1, 1, 1, 1] }
    ]
  },
  {
    id: 'sia',
    name: 'Tecnico Economico - S.I.A.',
    category: 'Tecnici',
    code: 'NATN01301B',
    codeName: 'SIA Gragnano',
    shortDesc: 'Sistemi Informativi Aziendali: software gestionale, database, reti informatiche e digital economy.',
    fullDesc: 'L’articolazione Sistemi Informativi Aziendali (SIA) dell’Istituto Tecnico Economico si caratterizza per il potenziamento dell’informatica gestionale applicata al mondo dell’economia. Gli studenti acquisiscono competenze di programmazione, gestione di basi di dati, sicurezza informatica, creazione di portali web aziendali e implementazione di software gestionale.',
    badge: 'IT & Programmazione',
    color: 'indigo',
    objectives: [
      'Progettazione e gestione di software aziendali, database SQL e web application',
      'Sicurezza informatica, cyber privacy e compliance tecnologica d’impresa',
      'Analisi dei processi gestionali e loro transizione digitale',
      'Informatica potenziata (fino a 5 ore settimanali nel triennio)',
      'Integrazione tra economia aziendale avanzata, diritto e tecnologie informatiche'
    ],
    careers: [
      'Sviluppatore software, Web & App Developer aziendale',
      'Database Administrator, sistemista di reti e cloud manager',
      'Consulente per la transizione digitale di PMI e pubbliche amministrazioni',
      'Facoltà universitarie: Informatica, Ingegneria Informatica e Gestionale, Economia Digitale',
      'ITS Academy settore ICT e tecnologie avanzate'
    ],
    totalHours: [32, 32, 32, 32, 32],
    subjects: [
      { name: 'Lingua e letteratura italiana', hours: [4, 4, 4, 4, 4] },
      { name: 'Lingua Inglese', hours: [3, 3, 3, 3, 3] },
      { name: '2° lingua comunitaria (Francese)', hours: [3, 3, 3, '-', '-'] },
      { name: 'Storia', hours: [2, 2, 2, 2, 2] },
      { name: 'Matematica', hours: [4, 4, 3, 3, 3] },
      { name: 'Diritto ed Economia', hours: [2, 2, '-', '-', '-'] },
      { name: 'Diritto', hours: ['-', '-', 3, 3, 2] },
      { name: 'Economia Politica', hours: ['-', '-', 3, 2, 3] },
      { name: 'Economia Aziendale', hours: [2, 2, 4, 7, 7] },
      { name: 'Informatica applicata', hours: [2, 2, 4, 5, 5] },
      { name: 'Scienze integrate (Fisica / Chimica / Biologia)', hours: [4, 4, '-', '-', '-'] },
      { name: 'Geografia', hours: [3, 3, '-', '-', '-'] },
      { name: 'Scienze motorie', hours: [2, 2, 2, 2, 2] },
      { name: 'Religione Cattolica / Attività alternative', hours: [1, 1, 1, 1, 1] }
    ]
  },
  {
    id: 'turistico',
    name: 'Istituto Tecnico del Turismo',
    category: 'Tecnici',
    code: 'NATN01301B',
    codeName: 'Turismo Gragnano',
    shortDesc: 'Tre lingue straniere, valorizzazione del patrimonio artistico e territoriale, marketing e legislazione turistica.',
    fullDesc: 'L’Istituto Tecnico Turistico offre ai giovani eccellenti prospettive di inserimento nel mondo del turismo e dell’accoglienza. La figura professionale formata dall’indirizzo è chiamata ad esercitare funzioni direttive e di concetto presso aziende ricettive, agenzie di viaggio, tour operator, consorzi di tutela, enti pubblici e di trasporto. Il diplomato possiede elevate competenze linguistiche (3 lingue), aziendali e nella valorizzazione sostenibile del patrimonio artistico, enogastronomico, paesaggistico ed ambientale.',
    badge: '3 Lingue & Territorio',
    color: 'purple',
    objectives: [
      'Studio approfondito di 3 lingue straniere comunitarie (Inglese, Francese, Tedesco)',
      'Valorizzazione del patrimonio culturale, enogastronomico, artigianale e paesaggistico della Campania e d’Italia',
      'Gestione dell’incoming e outgoing turistico, marketing territoriale e tour operating',
      'Competenze di diritto e legislazione turistica nazionale ed europea',
      'Organizzazione di fiere, eventi culturali e comunicazione digitale per il turismo'
    ],
    careers: [
      'Direttore di strutture ricettive, hotel e villaggi turistici',
      'Promotore turistico e Destination Manager di territorio',
      'Hostess, Steward e Front Office Manager',
      'Guida e accompagnatore turistico abilitato',
      'Addetto alla vendita e programmazione presso agenzie di viaggio o tour operator',
      'Accesso a tutte le facoltà universitarie (Lingue, Economia del Turismo, Beni Culturali) e concorsi pubblici'
    ],
    totalHours: [32, 32, 32, 32, 32],
    subjects: [
      { name: 'Lingua e letteratura italiana', hours: [4, 4, 4, 4, 4] },
      { name: 'Storia', hours: [2, 2, 2, 2, 2] },
      { name: 'Matematica', hours: [4, 4, 3, 3, 3] },
      { name: 'Lingua Inglese', hours: [3, 3, 3, 3, 3] },
      { name: 'Seconda lingua comunitaria', hours: [3, 3, 3, 3, 3] },
      { name: 'Terza lingua straniera', hours: ['-', '-', 3, 3, 3] },
      { name: 'Arte e territorio', hours: ['-', '-', 2, 2, 2] },
      { name: 'Diritto ed Economia', hours: [2, 2, '-', '-', '-'] },
      { name: 'Diritto e legislazione turistica', hours: ['-', '-', 3, 3, 3] },
      { name: 'Economia aziendale', hours: [2, 2, '-', '-', '-'] },
      { name: 'Discipline turistiche e aziendali', hours: ['-', '-', 4, 4, 4] },
      { name: 'Geografia - Geografia turistica', hours: [3, 3, 2, 2, 2] },
      { name: 'Informatica', hours: [2, 2, '-', '-', '-'] },
      { name: 'Scienze integrate (Terra, Biologia, Fisica, Chimica)', hours: [4, 4, '-', '-', '-'] },
      { name: 'Scienze motorie e sportive', hours: [2, 2, 2, 2, 2] },
      { name: 'Religione Cattolica / Attività alternative', hours: [1, 1, 1, 1, 1] }
    ]
  },
  {
    id: 'filiera-4-2',
    name: 'Filiera Formativa "4+2"',
    category: 'Filiera 4+2',
    code: 'NATD01301D',
    codeName: 'Filiera 4+2 MIM',
    shortDesc: 'Riforma MIM D.M. 256/2024: diploma in 4 anni + 2 anni ITS Academy con alta qualifica tecnica.',
    fullDesc: 'Con il Decreto Ministeriale 256 del 16 dicembre 2024, il Ministero dell’Istruzione e del Merito (MIM) ha definito le linee guida per l’attivazione dei percorsi per l’anno scolastico 2025/26. Questi percorsi rappresentano una riforma del sistema educativo italiano, con l’intento di creare una rete di collaborazioni tra istituti scolastici, ITS ACADEMY, imprese e altri enti formativi, favorendo lo sviluppo di competenze integrate e innovative. Il modello "4+2" si basa su un approccio che coniuga didattica teorica, esperienze pratiche e formazione on the job. Gli studenti, dopo quattro anni di istruzione tecnica, potranno accedere direttamente agli ITS ACADEMY per completare il percorso e conseguire l’alta specializzazione in soli 6 anni.',
    badge: 'Novità MIM D.M. 256/2024',
    color: 'emerald',
    objectives: [
      'Diploma di scuola secondaria di secondo grado conseguito in 4 anni con standard formativi di eccellenza',
      'Accesso prioritario e garantito al biennio specialistico degli ITS Academy',
      'Titolo di alta specializzazione tecnica (Livello EQF 5/6) in soli 6 anni',
      'Didattica esperienziale, compiti di realtà e formazione on-the-job in azienda fin dal biennio',
      'Ponte immediato verso il mercato del lavoro o la prosecuzione universitaria con crediti formativi'
    ],
    careers: [
      'Tecnico Superiore Specializzato nei settori ad alta tecnologia ed economia',
      'Inserimento tempestivo e qualificato in aziende partner di filiera',
      'Management intermedio e ruoli operativi ad alta specializzazione',
      'Accesso a tutte le facoltà universitarie'
    ],
    totalHours: [32, 32, 32, 32],
    subjects: [
      { name: 'Area Generale (Italiano, Storia, Matematica, Lingua Inglese)', hours: [13, 13, 11, 11] },
      { name: 'Discipline di Indirizzo Tecnico-Economico & Giuridico', hours: [9, 9, 12, 12] },
      { name: 'Informatica, Digital Skills e Nuove Tecnologie', hours: [4, 4, 4, 4] },
      { name: 'Laboratori Applicativi e Formazione On the Job (F.S.L.)', hours: [3, 3, 3, 3] },
      { name: 'Scienze Motorie e Sportive', hours: [2, 2, 2, 2] },
      { name: 'Religione Cattolica / Attività alternative', hours: [1, 1, 1, 1] }
    ]
  }
];

export const BROCHURE_PAGES: BrochurePage[] = [
  {
    pageNumber: 1,
    title: 'Copertina Istituzionale',
    subtitle: 'I.I.S. don Lorenzo Milani - Gragnano',
    category: 'Presentazione',
    content: 'Logo dLM. Foto delle due sedi e della vivace comunità scolastica. Lo slogan identitario: "Accogliere, formare e orientare tra esperienza ed innovazione".',
    highlights: [
      'Logo storico dLM con i colori istituzionali blu, rosso e giallo',
      'Motto: "Accogliere, formare e orientare tra esperienza ed innovazione"',
      'Campus scolastico e aule didattiche d’avanguardia'
    ]
  },
  {
    pageNumber: 2,
    title: 'Gli Orari e Codici Indirizzi Scolastici',
    subtitle: 'Ricevimento Segreteria e Codici Iscrizioni Online',
    category: 'Iscrizioni & Segreteria',
    content: 'Uffici di Segreteria aperti al pubblico: Lunedì, Mercoledì e Sabato dalle 08:30 alle 11:30; Martedì e Giovedì dalle 14:30 alle 17:00. Codici per la compilazione della domanda su Iscrizioni Online MIM: NAPS01301N (Licei), NATD01301D (AFM), NATN01301B (SIA e Turismo).',
    highlights: [
      'Assistenza continua alle famiglie durante le iscrizioni',
      'Codice Licei: NAPS01301N',
      'Codice AFM: NATD01301D',
      'Codice SIA e Turismo: NATN01301B'
    ]
  },
  {
    pageNumber: 3,
    title: 'Perché l’Istituto è intitolato a Don Lorenzo Milani',
    subtitle: 'Firenze 1923 - Barbiana - Centenario della nascita',
    category: 'Identità & Valori',
    content: 'Don Lorenzo Milani (Firenze 27/05/1923 – Firenze 26/06/1967) è stato un presbitero, scrittore, docente ed educatore. A Barbiana fondò una scuola gratuita e sempre aperta, inclusiva, per formare cittadini liberi e responsabili. Motto intramontabile: "I CARE - Me ne importa, mi sta a cuore". Dalla Lettera ai Giudici: "La scuola è l’arte delicata di condurre i ragazzi su un filo di rasoio: da un lato formare il senso della legalità e dall’altro la volontà di leggi migliori".',
    highlights: [
      'Motto: "I CARE" (Mi sta a cuore)',
      'Scuola inclusiva, laica nell’insegnamento, aperta a tutti',
      'Formare cittadini liberi, responsabili e consapevoli'
    ]
  },
  {
    pageNumber: 4,
    title: 'Certificazioni Linguistiche in Sede',
    subtitle: 'Titoli Europei e Internazionali Riconosciuti',
    category: 'Certificazioni',
    content: 'Presso il nostro istituto gli studenti preparano e conseguono: Certificazione di Francese DELF Scolaire (CIEP & Ministero Francese), Certificazione di Inglese Cambridge English Qualifications (Gold preparation centre 2025-2026), Certificazione di Tedesco Goethe-Institut, Certificazione Linguistica del Latino (Ufficio Scolastico Regionale Campania).',
    highlights: [
      'DELF Scolaire (Francese)',
      'Cambridge English - Gold Preparation Centre 2025-2026',
      'Goethe-Institut (Tedesco)',
      'Certificazione Regionale del Latino'
    ]
  },
  {
    pageNumber: 5,
    title: 'Offerta Formativa & Progetti',
    subtitle: 'Attività extracurricolari, mobilità e concorsi',
    category: 'Progettualità',
    content: 'Una scuola viva con attività per ogni talento: Progetto Lettura, Progetto Madrelingua, Programma Erasmus+, Teatro a scuola, Piano Lauree Scientifiche, Progetto Scuola Viva, Scuola Amica UNICEF, Centro Sportivo Scolastico, Giochi della Chimica, Hippo Competition, Premio Morelli, Olimpiadi di Italiano, Olimpiadi di Matematica, Giochi di Anacleto, Deutschland Plus, Concorso Economia, Olimpiadi Lingue Classiche.',
    highlights: [
      'Accreditamento Erasmus+ 2021-2027 per mobilità all’estero',
      'Olimpiadi nazionali e concorsi accademici',
      'Teatro, sport scolastico e progetti Scuola Viva',
      'Scuola Amica UNICEF'
    ]
  },
  {
    pageNumber: 6,
    title: 'Licei e Istituti Tecnici a Confronto',
    subtitle: 'Metodologie didattiche, FSL e ITS Academy',
    category: 'Orientamento',
    content: 'I Licei forniscono gli strumenti culturali e metodologici per comprendere criticamente la realtà e proseguire gli studi universitari. Gli Istituti Tecnici offrono una solida preparazione scientifico-tecnologica per l’immediato inserimento nel lavoro, la prosecuzione universitaria o l’accesso diretto agli Istituti Tecnologici Superiori (ITS Academy - Legge 99 del 15 luglio 2022).',
    highlights: [
      'Licei: rigore critico e formazione quinquennale',
      'Tecnici: metodologie laboratoriali e Formazione Scuola Lavoro',
      'Raccordo strategico con gli ITS Academy'
    ]
  },
  {
    pageNumber: 7,
    title: 'La Filiera Formativa "4+2"',
    subtitle: 'Decreto Ministeriale 256 del 16 dicembre 2024 (MIM)',
    category: 'Innovazione',
    content: 'Con il D.M. 256/2024 il Ministero dell’Istruzione e del Merito (MIM) ha definito le linee guida per i percorsi quadriennali collegati ad ITS Academy, imprese ed enti formativi. Didattica teorica unita ad esperienze pratiche e formazione on the job. Titolo di alta specializzazione tecnica in soli 6 anni!',
    highlights: [
      'Riforma nazionale MIM D.M. 256/2024',
      '4 anni di superiori + 2 anni ITS Academy',
      'Didattica esperienziale e formazione on the job'
    ]
  },
  {
    pageNumber: 8,
    title: 'Piano degli Studi: Classico e Scientifico',
    subtitle: 'Quadri orari completi dal 1° al 5° anno',
    category: 'Piani di Studio',
    content: 'Confronto dettagliato delle ore settimanali tra Liceo Classico (con Latino, Greco e Geostoria) e Liceo Scientifico (con Matematica potenziata a 5 ore, Fisica e Scienze Naturali). 27 ore al biennio, 30-31 ore al triennio.',
    highlights: [
      'Liceo Classico: 27 ore (I-II) / 31 ore (III-IV-V)',
      'Liceo Scientifico: 27 ore (I-II) / 30 ore (III-IV-V)',
      'Informatica integrata al primo biennio'
    ]
  },
  {
    pageNumber: 9,
    title: 'Profili: Classico & Scientifico',
    subtitle: 'Competenze acquisite e sbocchi accademici',
    category: 'Profili',
    content: 'Liceo Classico: consapevolezza del mondo moderno, identità occidentale, trasparenza ai linguaggi intellettuali. Liceo Scientifico: analisi critica dei fenomeni, procedure sperimentali, capacità logiche per qualsiasi percorso universitario o dirigenziale.',
    highlights: [
      'Classico: metodo di studio universale e rigore analitico',
      'Scientifico: strategie di scoperta e deduzione logica',
      'Accesso garantito a tutte le facoltà universitarie'
    ]
  },
  {
    pageNumber: 10,
    title: 'Piano Studi: Scienze Applicate & Scienze Umane',
    subtitle: 'Quadri orari completi dal 1° al 5° anno',
    category: 'Piani di Studio',
    content: 'Liceo Scienze Applicate: informatica per 5 anni, biologia, chimica e scienze fino a 5 ore settimanali. Liceo Scienze Umane: pedagogia, psicologia, sociologia e antropologia fino a 5 ore settimanali con diritto ed economia al biennio.',
    highlights: [
      'Scienze Applicate: Informatica 2 ore/settimana per l’intero quinquennio',
      'Scienze Umane: 4-5 ore di Scienze Umane specifiche',
      'Totale orario: 27 ore biennio / 30 ore triennio'
    ]
  },
  {
    pageNumber: 11,
    title: 'Profili: Scienze Applicate & Scienze Umane',
    subtitle: 'Laboratori tecnologici e scienze della persona',
    category: 'Profili',
    content: 'Scienze Applicate: laboratori sperimentali, modelli scientifici e analisi dati informatici. Scienze Umane: cultura pedagogica e socio-antropologica, sbocchi in psicologia, formazione, sanità e cooperazione sociale.',
    highlights: [
      'Scienze Applicate: ricerca scientifica e nuove tecnologie',
      'Scienze Umane: empatia, comunicazione e scienze sociali',
      'Preparazione solida per lauree sanitarie ed educative'
    ]
  },
  {
    pageNumber: 12,
    title: 'Piano Studi: Indirizzi Tecnici Economici',
    subtitle: 'AFM, SIA e Turismo',
    category: 'Piani di Studio',
    content: 'Biennio comune tecnico economico di 32 ore settimanali. Triennio differenziato: AFM con fino a 8 ore di Economia Aziendale; SIA con fino a 5 ore di Informatica applicata; Turismo con 3 lingue straniere e Arte e Territorio.',
    highlights: [
      '32 ore settimanali distribuite dal lunedì al venerdì',
      'AFM: bilancio, marketing e diritto tributario',
      'SIA: programmazione e banche dati d’impresa',
      'Turismo: 3 lingue straniere comunitarie'
    ]
  },
  {
    pageNumber: 13,
    title: 'Profili Tecnici: AFM, SIA e Turismo',
    subtitle: 'Competenze operative e sbocchi professionali',
    category: 'Profili',
    content: 'Sbocchi Turistico: manager d’impresa ricettiva, destination manager, guida turistica abilitata, hostess/steward. Sbocchi AFM & SIA: amministrazione d’impresa, banche, assicurazioni, studi commerciali, sviluppatori web e software.',
    highlights: [
      'Turismo: inserimento immediato in tour operator e hotel',
      'AFM: gestione contabile, fiscale e finanziaria',
      'SIA: data analyst, sistemista e programmatore software'
    ]
  },
  {
    pageNumber: 14,
    title: 'La Storia dell’Istituto',
    subtitle: 'Dalle sezioni staccate al campus moderno',
    category: 'Storia',
    content: 'Nato dal dimensionamento scolastico dell’anno 2000 (D.S. prof. Catello Maresca), erede delle sezioni staccate del Liceo Severi e del Commerciale Sturzo. Nel maggio 2003 inaugurata la sede di Via Quarantola. Sotto la guida del D.S. prof. Francesco Fuschillo sono stati ammodernati tutti i laboratori e nel 2018 inaugurato il moderno Auditorium. Dall’a.s. 2023/24 è attiva la nuova succursale di Via Castellammare n. 191.',
    highlights: [
      'Autonomia nel 1990 e dimensionamento unitario nel 2000',
      'Sede centrale di Via Quarantola aperta dal 2003',
      'Nuovo Auditorium inaugurato nel 2018',
      'Nuova succursale tecnologica in Via Castellammare 191'
    ]
  },
  {
    pageNumber: 15,
    title: 'Vision & Mission dell’Istituto',
    subtitle: 'Tratto dal PTOF d’Istituto',
    category: 'Visione',
    content: 'Vision: "Fare dell’Istituto un luogo di crescita e formazione innovativo, nonché un centro culturale e relazionale per le famiglie e il territorio". Mission: "Accogliere, formare e orientare tra esperienza ed innovazione". 5 azioni strategiche per valorizzare le eccellenze, accogliere gli studenti e garantire la continuità educativa.',
    highlights: [
      'Valorizzazione delle eccellenze e contrasto alla dispersione',
      'Didattica laboratoriale e compiti di realtà',
      'Patto di corresponsabilità educativa con le famiglie',
      'Raccordo con la Scuola Media e l’Università'
    ]
  },
  {
    pageNumber: 16,
    title: 'Reti, Partner e Dove Siamo',
    subtitle: 'Accreditamenti Europei, Sedi e Contatti',
    category: 'Contatti & Reti',
    content: 'Partner: Futura PNRR, #ioleggoperché, Libriamoci, Debate Italia, Rete Nazionale Licei Classici, Università Federico II, AIF, Goethe-Institut, Cambridge, DELF, Erasmus+ 2021-2027 Accredited, eTwinning School. Sede Centrale: Via Quarantola, 6. Succursale: Via Castellammare, 191. Sito web: www.donmilanigragnano.edu.it - Mail: nais013007@istruzione.it - Tel: 0818700000.',
    highlights: [
      'Sede Centrale: Via Quarantola, 6 - Gragnano (NA)',
      'Seconda Sede: Via Castellammare, 191 - Gragnano (NA)',
      'Tel: 081 8700000 · Email: nais013007@istruzione.it',
      'Accreditamento Europeo Erasmus+ 2021-2027'
    ]
  }
];

export const ORIENTATION_QUESTIONS = [
  {
    id: 1,
    question: 'Quali materie e attività stimolano maggiormente la tua curiosità?',
    options: [
      { text: 'Letteratura, storia antica, filosofia, lettura di grandi classici e scrittura', target: 'classico', hint: 'Ideale per il Liceo Classico' },
      { text: 'Matematica avanzata, formule fisiche, logica pura e risolvere problemi complessi', target: 'scientifico', hint: 'Ideale per il Liceo Scientifico' },
      { text: 'Informatica, laboratori pratici, programmazione, chimica e scienze naturali', target: 'scienze-applicate', hint: 'Ideale per le Scienze Applicate' },
      { text: 'Psicologia, relazioni sociali, educazione, ascolto e comprendere la mente umana', target: 'scienze-umane', hint: 'Ideale per le Scienze Umane' },
      { text: 'Economia, gestione aziendale, marketing, finanza e compravendite', target: 'afm', hint: 'Ideale per Tecnico AFM' },
      { text: 'Creazione di siti web, coding, cyber security e database per le imprese', target: 'sia', hint: 'Ideale per Tecnico SIA' },
      { text: 'Lingue straniere moderne, viaggi, valorizzazione dell’arte e promozione territoriale', target: 'turistico', hint: 'Ideale per Tecnico del Turismo' },
      { text: 'Desidero finire le superiori in 4 anni ed entrare subito nell’alta formazione ITS Academy', target: 'filiera-4-2', hint: 'Ideale per la Filiera 4+2' }
    ]
  },
  {
    id: 2,
    question: 'Che approccio di studio preferisci durante la settimana?',
    options: [
      { text: 'Studio approfondito sui libri con rigore linguistico e riflessione umanistica', target: 'classico', hint: 'Liceo Classico' },
      { text: 'Esercizi numerici, dimostrazioni razionali e sperimentazione di fisica', target: 'scientifico', hint: 'Liceo Scientifico' },
      { text: 'Attività diretta nei laboratori informatici e scientifici, senza latino', target: 'scienze-applicate', hint: 'Scienze Applicate' },
      { text: 'Lavori di gruppo, dibattito, osservazione dei comportamenti ed empatia', target: 'scienze-umane', hint: 'Scienze Umane' },
      { text: 'Analisi di casi aziendali reali, bilanci, calcoli contabili e contratti commerciali', target: 'afm', hint: 'Tecnico AFM' },
      { text: 'Sviluppo di applicazioni, gestione di reti e algoritmi logici', target: 'sia', hint: 'Tecnico SIA' },
      { text: 'Parlare in lingua straniera con docenti madrelingua, visite a musei e fiere turistiche', target: 'turistico', hint: 'Tecnico Turistico' },
      { text: 'Formazione sul campo (on the job), stage in azienda e laboratori applicativi', target: 'filiera-4-2', hint: 'Filiera 4+2' }
    ]
  },
  {
    id: 3,
    question: 'Qual è il tuo sogno professionale dopo il diploma?',
    options: [
      { text: 'Qualsiasi università (Medicina, Giurisprudenza, Lettere, Politica) forte di un metodo di studio solido', target: 'classico', hint: 'Liceo Classico' },
      { text: 'Ingegneria, Medicina, Fisica, Architettura o carriere direttive', target: 'scientifico', hint: 'Liceo Scientifico' },
      { text: 'Informatica, Cyber Security, Biotecnologie, Robotica o professioni STEM', target: 'scienze-applicate', hint: 'Scienze Applicate' },
      { text: 'Psicologia, Insegnamento, Professioni Sanitarie, Servizio Sociale o Risorse Umane', target: 'scienze-umane', hint: 'Scienze Umane' },
      { text: 'Banche, studi commercialisti, agenzie finanziarie o gestione d’azienda', target: 'afm', hint: 'Tecnico AFM' },
      { text: 'Software developer, data analyst, sistemista ICT in grandi società tecnologiche', target: 'sia', hint: 'Tecnico SIA' },
      { text: 'Tour operator, hotel manager, agenzia di viaggi, guida turistica o facoltà di lingue', target: 'turistico', hint: 'Tecnico Turistico' },
      { text: 'Titolo di Alta Specializzazione Tecnica in soli 6 anni e assunzione qualificata immediata', target: 'filiera-4-2', hint: 'Filiera 4+2' }
    ]
  }
];

export const CERTIFICATIONS = [
  {
    name: 'Cambridge English Qualifications',
    language: 'Inglese',
    levels: 'B1 Preliminary, B2 First, C1 Advanced',
    recognition: 'Gold preparation centre 2025-2026',
    desc: 'Certificazione ufficiale riconosciuta a livello mondiale da atenei prestigiosi e aziende internazionali.',
    badge: 'Cambridge Gold'
  },
  {
    name: 'DELF Scolaire',
    language: 'Francese',
    levels: 'A2, B1, B2',
    recognition: 'CIEP & Ministère de l’Éducation Nationale France',
    desc: 'Certificazione di competenza nella lingua francese valida a vita in tutta Europa.',
    badge: 'DELF France'
  },
  {
    name: 'Goethe-Zertifikat',
    language: 'Tedesco',
    levels: 'Fit in Deutsch A1, A2, B1',
    recognition: 'Goethe-Institut München',
    desc: 'Titolo ufficiale per lo studio e il lavoro nei paesi dell’area DACH (Germania, Austria, Svizzera).',
    badge: 'Goethe-Institut'
  },
  {
    name: 'Certificazione Regionale del Latino',
    language: 'Latino',
    levels: 'Livello A e B',
    recognition: 'Ufficio Scolastico Regionale Campania',
    desc: 'Riconosce la padronanza delle strutture linguistiche e la comprensione della civiltà classica latina.',
    badge: 'USR Campania'
  }
];
