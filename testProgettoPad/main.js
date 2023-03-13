let food = ['cheese', 'water', ' redwine', 'apple', 'tomatoes', 'bread', 'salmon', 'black rice', 'chicken', 'beef', 'pasta', 'potatoes', 'carrots', 'red onions', 'garlic', 'olive oil', 'butter', 'eggs', 'mushrooms', 'blue cheese'];
let lenghtFood = food.length; 
let maxLength = 14;
// creo un array lungo 10 da riempire con stringhe a caso di food[]
let actualFood = Array(10).fill('_');




let padWord = (array) => {
  for( i = 0; i < array.length; i++) {
    let element = array[i];
    let elementLenght = element.length;
    let difference = maxLength - elementLenght; //ottengo quante stelle mettere
    let firstDifference = Math.floor(difference / 2); //arrotondo per difetto
    let lastDiffernce = Math.round(difference / 2); // arrotondo per eccesso
    
    let output;
    let space = element.indexOf(' '); // uso indice e faccio una ricerca per lo spazio, se non lo trovo il risultato e: -1
    if (space == -1) {
      // repeat permette di 'stringa'.reapet(n_volte);
       output = '*'.repeat(firstDifference) + element + '*'.repeat(lastDiffernce);
    }
    else {
      let newWord = element.replace(' ', '*');
       output = '*'.repeat(firstDifference) + newWord + '*'.repeat(lastDiffernce);
    };

    console.log(output);
  };
};


// Funzione :generazione di un numero casuale compreso tra 0 e ultimo elemento dell array food[]
let getRandomInt = () => {
  let randNum = Math.round(Math.random() * (lenghtFood - 1));
  return randNum;
}


// Funzione: permette di estrarre tot parole da food[] e metterle nel nuovo array
let nameExtraction = () => {
  for(i = 0; i < actualFood.length; i++) {
    let numRandom = getRandomInt(); // ottengo n random
    let randomWord = food[numRandom]; //ottengo una parola random
      actualFood[i] = randomWord;
  };
  return actualFood;
};


nameExtraction();
padWord(nameExtraction());

// !rember per tutti se usate arrow function --> ricordare che non sono soggette al hoisting


console.log('%c  this is a red string', 'color:red; font-size:30px;')
