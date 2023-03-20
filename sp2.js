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
