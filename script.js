console.log('test');

const play = document.getElementById('play').addEventListener('click', start);

function start() {
console.log('Cominciamo!');
const level = document.getElementById('level').value; //Salvo la scelta del livello all'interno di una costante-- NB) Per prendere il valore di una option associata ad un select. Im questo modo raccolgo i valori nella costante
const gridLevels = [100,81,49]; //Creo un array con al suo interno il numnero di sqaure che mi serviranno a seconda dei livelli
const numberSquare = gridLevels[level]; // Associo il valore dei livelli (come indici) dell'array gridLevels
console.log(numberSquare);
}

// NB) non metto reset ma faccio partire direttamente grid. In cosa consiste reset? Prima di tutto dovrei prendere main con querySelector e salvarlo in una coostante poi dovrei creare una funzione vuota con dentro main.inner.html = ' '; per sovrascivere una stringa vuota al contenuto del main (nel caso di Stefano era un h2 figlio di main). Quella funzione va inserita all'interno della funzione denominata start di modo che al click h2  sparisce.