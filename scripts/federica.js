/**
 * @file: main.js
 * @author: 
 * 
 */

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