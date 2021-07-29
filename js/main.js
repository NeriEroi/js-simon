// Un alert() espone 5 numeri generati casualmente.

function getRandom(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

var numeriCPU = [];

for (var i = 0; i < 5; i++) {
  numeriCPU.push(getRandom(1,100));
}

alert("Guarda attentamente questi cinque numeri: " + numeriCPU);







