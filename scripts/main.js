/**
 * @file: main.js
 * @author: Andrea Taverna, Carlotta Monaco, Federica Nicolò, Umberto Paolasso
 * This javascript program that outputs a list of supermarket goods filtered by expiry date
 *
 * 
 */

//Initial Configuration
initialConfig = {
  //STEP 1 - Write a valid number (valid number is a number greater than 0) to indicate after how many weeks the products will have to be removed
  maxWeeksProduct : 1,
  //STEP 2 - Write a valid number (valid number is a number greater than 0) to indicate indicate how many products arrive per week
  productPerWeek: 1,
  //STEP 3 - Write a valid number (valid number is a number greater than 0) to indicate from which date (starting from today) to start
  initialDay: 1,
  //STEP 4 - Write a valid number (valid number is a number greater than 0) to indicate how many weeks you want the program to run
  runWeeks: 1,
  //STEP 5 - Write a valid number (valid number is a number greater than 0) to indicate how many seconds pass from one print to another
  delayOfSecondToPrint: 1,
  //STEP 6 - Write a valid number (valid number is a number greater than 0) to indicate after how many 0s you want before the first product
  zeroID: 1
}
/**
 * The function takes an initialConfig object as a parameter and checks each value of the object to ensure it is a number greater than 0 and returns a modified object
 * @param {object} initialConfig - object that contain the initial configuration
 */
function initialControl(initialConfig){
  // Initialize an empty array for control values
  let control = [];

  // Iterate through each key in the initialConfig object
  for(let i=0; i<Object.keys(initialConfig).length; i++){
    // Store the current value in the i-th position of the control array
    control[i] = initialConfig[Object.keys(initialConfig)[i]];

    // Check if the current value is defined
    if (control[i] != undefined){
      // Check if the current value is not null, Infinity, or -Infinity
      if (control[i] != null && control[i] != Infinity && control[i] != - Infinity){
        // Check if the current value is a number
        if (!isNaN(control[i])){
          // Check if the current value is greater than 0
          if(control[i]>0){
            // Convert the current value to an integer and log a message
            initialConfig[Object.keys(initialConfig)[i]] = parseInt(control[i], 10);
            console.log("The number will be set to " + initialConfig[Object.keys(initialConfig)[i]]);
          } else {
            // Log an error message and set the current value to 1
            console.error("Error! Entered a number minor of 0. The number will be set to 1");
            initialConfig[Object.keys(initialConfig)[i]] = 1;
          }
        } else {
          // Log an error message and set the current value to 1
          console.error("Error! Entered not a number. The number will be set to 1");
          initialConfig[Object.keys(initialConfig)[i]] = 1;
        }
      } else {
        // Log an error message and set the current value to 1
        console.error("Error! You have entered value not permitted. The number will be set to 1.");
        initialConfig[Object.keys(initialConfig)[i]] = 1;
      }
    } else {
      // Log an error message and set the current value to 1
      console.error("Error! You have not entered a value. The number will be set to 1.");
      initialConfig[Object.keys(initialConfig)[i]] = 1;
    }
  }
}

initialControl();

