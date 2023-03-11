/**
 * @file: main.js
 * @author: 
 * 
 */
let sequentialID = 0;
/**
 * This function return the unique ID of a product
 * @param {number} sequenID - the sequential number to increment
 * @param {number} zerID 
 * @returns {string} ID
 */
function generateID(){
  // increment sequentialID by one
  sequentialID++;
  // convert sequenID to a string and assign it to stringSequenID
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
    // if the condition is false, increment zeroID by 2 then pad stringSequenID with zeros at the beginning until it has a length of zeroID + 1, and assign the result to ID
    zeroID = zeroID + 2;
    ID = stringSequenID.padStart(zeroID + 1, '0'); 
  }
  return ID;
}
//Initial Configuration
alert("Here you can enter the initial configuration. Open the console to see the results");
let numb1 = prompt("STEP 1 - Write a number from 1 to 6 to indicate after how many weeks the products will have to be removed", "1");
let maxWeeksProduct;
if (numb1 != null) {
  if (!isNaN(numb1)){
    if(numb1>0 && numb1<7){
      maxWeeksProduct = parseInt(numb1, 10);
    } else {
      console.log("Entered number out of range. The number will be set to 1");
      maxWeeksProduct = 1;
    }
  } else {
    console.log("You have not entered a number. The number will be set to 1");
    maxWeeksProduct = 1;
  }
}
let numb2 = prompt("STEP 2 - Write a number from 1 to 99 to indicate how many products arrive per week", "1");
let productPerWeek;
if (numb2 != null) {
  if (!isNaN(numb2)){
    if(numb2>0 && numb2<100){
      productPerWeek = parseInt(numb2, 10);
    } else {
      console.log("Entered number out of range. The number will be set to 1");
      productPerWeek = 1;
    }
  } else {
    console.log("You have not entered a number. The number will be set to 1");
    productPerWeek = 1;
  }
}
let numb = prompt("Write a number from 1 to 4 to indicate how many 0s you want before the first product", "1");
let zeroID;
if (numb != null) {
  if (!isNaN(numb)){
    if(numb>0 && numb<5){
      zeroID = parseInt(numb, 10);
    } else {
      console.log("Entered number out of range. The number will be set to 1");
      zeroID = 1;
    }
  } else {
    console.log("You have not entered a number. The number will be set to 1");
    zeroID = 1;
  }
}
