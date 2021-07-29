// Un alert() espone 5 numeri generati casualmente.

function getRandom(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

var numeriCPU = [];

for (var i = 0; i < 5; i++) {
  numeriCPU.push(getRandom(1,100));
}

alert("Guarda attentamente questi cinque numeri: " + numeriCPU);

// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var numeriUtente = [];


setTimeout(chiediNumeriUtente, 1000);
function chiediNumeriUtente()
{
  for (var i = 0; i < 5; i++)
  {
    var numeroInserito = parseInt(prompt('Inserisci un numero che ricordi:'));
    if (numeriCPU.includes(numeroInserito)) {
      numeriUtente.push(numeroInserito);
    }
    console.log(numeroInserito);
  }
  if (numeriUtente < 1)
  {
    alert('Peccato, non hai ricordato nessun numero.');
    console.log('nessun numero ricordato.');
  }
  else 
  {
    console.log('numeri inseriti correttamente: ' + numeriUtente);
    alert('Complimenti!\nHai ricordato ' + (numeriUtente.length) + ' numeri!\nQuesti sono i numeri che hai ricordato: ' + numeriUtente)
  }
}




