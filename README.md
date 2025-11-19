Variabili d’ambiente
In un progetto React JS creato con Vite, le variabili di ambiente si gestiscono tramite i file .env e seguono una convenzione precisa.

1) Creare un file .env nella root del progetto
Ci sono diversi ambienti e che quindi è possibile avere diversi nomi per questi file:

.env – variabili valide in tutti gli ambienti
.env.development – solo in sviluppo
.env.production – solo in produzione
.env.locale - solo in locale
.env.example - serve da pseudo documentazione e di solito serve per mostrare le diverse chiavi ma si pusha con valori standar o addirittura senza valori (pushare questo per l’esercizio e tenere il .env solo sul proprio pc (mettendolo nel .gitignore)).

2) Definire delle variabili
All’interno di questi file, definiamo le variabili. In un progetto creato con Vite, tutte le variabili devono iniziare con VITE_ :

VITE_API_URL=https://api.example.com
VITE_GOOGLE_MAPS_KEY=abcdef123456


3) Richiamare le variabili nel codice
In un progetto creato con Vite, tutte le variabili d’ambiente sono accessibili tramite import.meta.env :

const apiUrl = import.meta.env.VITE_API_URL;
//...

axios.get(`${apiUrl}/movies`).then(() =>{
 //...
})


💡

Le variabili definite da noi nei file .env devono essere prefissate con VITE_ per essere accessibili nel codice.