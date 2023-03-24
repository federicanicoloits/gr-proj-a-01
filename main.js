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
let sequentialID = 0;
let zeroID = 1;
let ID = [];
let indexOfID = sequentialID;
function generateID(){
  // increment sequentialID by one
  sequentialID++;
  // convert sequentialID to a string and assign it to stringSequenID
  let stringSequenID = sequentialID.toString();
  // assign the sum of zeroID and 1 to stringZeroID
  let stringZeroID = zeroID + 1;
  // convert stringZeroID to a string
  stringZeroID = stringZeroID.toString();
  let ID;
  // check if the length of stringSequenID is less than or equal to the length of stringZeroID
  if (stringSequenID.length <= stringZeroID.length){
    // if the condition is true, pad stringSequenID with zeros at the beginning until it has a length of zeroID + 1, and assign the result to ID
    ID = stringSequenID.padStart(zeroID + 1, '0');
  } else {
    // if the condition is false, ID is equal to stringSequenID.
    ID = stringSequenID;
  }
  return ID;
}
function statusUpdate(num, dateActual) {
  let apt = arrayOfProducts[num].calStatus();
  if(dateActual<apt && dateActual>arrayOfProducts[num].dateCreation){
    arrayOfProducts[num].status = 'valid';

  } else if(dateActual>=apt){
    arrayOfProducts[num].status = 'expired';
  }
}

ID[sequentialID] = generateID();
let arrayOfProducts = [
  {name: 'pane', id: ID[indexOfID], dateCreation: 1, dateFine: 3, calStatus(){
    let start = this.dateCreation;
    let end = this.dateFine;
    let difference = end - start;
    return difference;
  }, status: 'new'}
];
indexOfID++;



console.log(arrayOfProducts[0].calStatus());
function statusUpdate(num, dateActual) {
  let apt = arrayOfProducts[num].calStatus();
  if(dateActual<apt && dateActual>arrayOfProducts[num].dateCreation){
    arrayOfProducts[num].status = 'valid';

  } else if(dateActual>=apt){
    arrayOfProducts[num].status = 'expired';
  }
}
statusUpdate(0, 2);
console.log(arrayOfProducts[0].status);
console.log(arrayOfProducts[0].status = 'valid');