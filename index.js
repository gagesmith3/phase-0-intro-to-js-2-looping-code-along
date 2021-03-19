// Code your solutions in this file



function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
   
    var cards = [`Thank you, ${names[0]}, for the wonderful ${event} gift!`, `Thank you, ${names[1]}, for the wonderful ${event} gift!`, `Thank you, ${names[2]}, for the wonderful ${event} gift!` ]
   

  }

 return cards;
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");



function countDown() {
    let n = 10;
    while (n >= 0) {
        console.log(n);
        n--;
    }
}
