/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotti = [
   {
      name: 'Cuffie',
      category: 'Electronics',
      price: 89.99,
      rating: 4,
      image: 'Unavaible',
      avaible: 'Disponibile',
   },
   {
      name: 'Tablet',
      category: 'Electronics',
      price: 199.00,
      rating: 4,
      image: 'Unavaible',
      avaible: 'Non disponibile',
   },
   {
      name: 'Libro',
      category: 'Books',
      price: 14.90,
      rating: 4,
      image: 'Unavaible',
      avaible: 'Disponibile',
   },
   {
      name: 'Lampada',
      category: 'House',
      price: 29.50,
      rating: 3,
      image: 'Unavaible',
      avaible: 'Disponibile',
   },
   {
      name: 'Smartwatch',
      category: 'Electronics',
      price: 199.00,
      rating: 4,
      image: 'Unavaible',
      avaible: 'Non disponibile',
   },
   {
      name: 'Mouse',
      category: 'Electronics',
      price: 24.90,
      rating: 4,
      image: 'Unavaible',
      avaible: 'Disponibile',
   },
   {
      name: 'Caffettiera',
      category: 'House',
      price: 22.00,
      rating: 4,
      image: 'Unavaible',
      avaible: 'Disponibile',
   },
   {
      name: 'Zaino',
      category: 'Travel',
      price: 49.99,
      rating: 4,
      image: 'Unavaible',
      avaible: 'Disponibile',
   },
   {
      name: 'Cappello',
      category: 'Clothes',
      price: 29.99,
      rating: 4,
      image: 'Unavaible',
      avaible: 'Disponibile',
   },
   {
      name: 'Torcia',
      category: 'Electronics',
      price: 14.90,
      rating: 3,
      image: 'Unavaible',
      avaible: 'Disponibile',
   },
   {
      name: 'Tavolo',
      category: 'House',
      price: 149.00,
      rating: 4,
      image: 'Unavaible',
      avaible: 'Non disponibile',
   },
   {
      name: 'Sedia',
      category: 'House',
      price: 24.99,
      rating: 4,
      image: 'Unavaible',
      avaible: 'Disponibile',
   },
]


/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function formattaPrezzo(prezzo) {
    return '€ ' + prezzo.toFixed(2);
}

for (const prodotto of prodotti) {
    console.log(`${prodotto.name}: ${formattaPrezzo(prodotto.price)}`);
}

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*function filtraDisponibili(prodotti) {
    const filtrati = [];

    for (let i = 0; i < prodotti.length; i++) {
        const prodotto = prodotti[i];

           const parteIntera = prodotto.rating[0];

        if (prodotto.avaible === 'Disponibile' && parteIntera >= 3) {
            filtrati.push(prodotto);
        }
    }

    return filtrati;
}*/


/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
