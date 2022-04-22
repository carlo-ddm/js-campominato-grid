console.log('test');
// 1-) non metto reset ma faccio partire direttamente grid. In cosa consiste reset? Prima di tutto dovrei prendere main con querySelector e salvarlo in una coostante poi dovrei creare una funzione vuota con dentro main.inner.html = ' '; per sovrascivere una stringa vuota al contenuto del main (nel caso di Stefano era un h2 figlio di main). Quella funzione va inserita all'interno della funzione denominata start di modo che al click h2  sparisce.

const play = document.getElementById('play').addEventListener('click', start);
// FUZIONE 1
function start() {
console.log('Cominciamo!');
const level = document.getElementById('level').value; // 2-) Salvo la scelta del livello all'interno di una costante-- NB) Per prendere il valore di una option associata ad un select. Im questo modo raccolgo i valori nella costante
const gridLevels = [100,81,49]; // 3-) Creo un array con al suo interno il numnero di sqaure che mi serviranno a seconda dei livelli
const numberSquare = gridLevels[level]; // 4-) Associo il valore dei livelli (come indici) dell'array gridLevels
console.log('Numero delle celle',numberSquare);

generatoreGioco(numberSquare);

}

const main = document.querySelector('main');// 5-) creo la costante globale del main che mi servirà per l'append del grid
// FUNZIONE 2
function generatoreGioco(numberSquare) { // 6-) Questa funzione genera la griglia
  const grid = document.createElement('div'); // 7-) Genero il div della griglia
  grid.className = 'cdd-grid';// 8-) Attribuisco la classe css della griglia al div grid che ho appena generato

  for (let i = 1; i < numberSquare; i++) {
    console.log(i);
  }






  main.append(grid) //9-) Appendo la griglia al main
}

