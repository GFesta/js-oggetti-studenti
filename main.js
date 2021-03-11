// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.

$(document).ready(function() {
    var studente = {
        'nome': 'Paolo',
        'cognome': 'Rossi',
        'eta': 30,
    };
    for (var key in studente) {
        console.log(key + ':' + studente[key]);   //stampa le proprieta su una riga
        
    };

// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
    var studenti = [
        {
            'nome': 'Giuseppe',
            'cognome': 'Festa',
            'eta' : 32,
        },
        {
            'nome': 'Patrizia',
            'cognome': 'Rossi',
            'eta' : 28, 
        },
        {
            'nome': 'Laura',
            'cognome': 'Verdi',
            'eta' : 22,
        },
        {
            'nome': 'Giovanni',
            'cognome': 'Bianco',
            'eta' : 24,
        }
    ];

    for (var key in studenti) {
        console.log(studenti[key].nome);
        console.log(studenti[key].cognome);
        //console.log((studenti[key] ['nome']) + '' +  console.log(studenti[key] ['cognome']));
    };
    console.log(studenti);

// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.
    var nome = prompt("Inserisci il tuo nome");
    var cognome = prompt("Inserisci il tuo cognome");
    var eta = prompt("Inserisci la tua eta");

    var object = {};
    object.nome = nome;
    object.cognome = cognome;
    object.eta = eta;

    for (var key in object) {
        console.log(object[key]);
    }
    studenti.push(object);
    console.log(studenti);
});
//document.getElementById("oggetti-studente").innerHTML = studenti;