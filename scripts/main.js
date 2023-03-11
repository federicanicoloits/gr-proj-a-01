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
import {initialControl} from './function.js';
initialControl(initialConfig);

