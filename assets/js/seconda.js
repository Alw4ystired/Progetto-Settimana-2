/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotti = [
    {
        name: 'Cuffie',
        category: 'Electronics',
        price: 89.99,
        rating: 5,
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
        rating: 2,
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
        rating: 3,
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
        rating: 5,
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
        rating: 2,
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
        rating: 5,
        image: 'Unavaible',
        avaible: 'Disponibile',
    },
]

function formattaPrezzo(prezzo) {
    return '€ ' + prezzo.toFixed(2);
}

function generaStelle(rating) {
    let stelline = '';

    for (let i = 0; i < rating; i++) {
        stelline += '★';
    }

    for (let i = rating; i < 5; i++) {
        stelline += '☆';
    }

    return stelline;
}

function renderTabella(lista) {
    const contenitore = document.getElementById('contenitore-tabella');

    let html = '<table>';
    html += '<thead> <tr> <th>Nome</th> <th>Categoria</th> <th>Prezzo</th> <th>Rating</th> <th>Disponibilità</th> </tr> </thead>';
    html += '<tbody>';

    for (let i = 0; i < lista.length; i++) {
        const p = lista[i];
        html += `<tr> <td>${p.name}</td> <td>${p.category}</td> <td>${formattaPrezzo(p.price)}</td> <td>${generaStelle(p.rating)}</td> <td>${p.avaible}</td> </tr>`;
    }

    html += '</tbody> </table>';
    contenitore.innerHTML = html;
}

renderTabella(prodotti);