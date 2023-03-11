# Project 01 - Group 01
***
## Table of Contents
1. [Project Requirement](#project-requirement)
2. [Technologies](#technologies)
3. [Authors](#authors)
4. [License](#license)
5. [Standard Used](#standard-used)
6. [Approach To Solution](#approach-to-solution)

## Project Requirement
***


## Technologies
***
Javascript, HTML

## Authors
***
### Author 1
Author: Andrea Taverna  
Contact Information: andrea.taverna@edu.itspiemonte.it  
Role: Frontend Developer
### Author 2
Author: Carlotta Monaco  
Contact Information: carlotta.monaco@edu.itspiemonte.it  
Role: Frontend Developer
### Author 3
Author: Federica Nicolò  
Contact Information: federica.nicolo@edu.itspiemonte.it  
Role: Frontend Developer  
### Author 4
Author: Umberto Paolasso  
Contact Information: umberto.paolasso@edu.itspiemonte.it  
Role: Frontend Developer

## License
***
![License Image](https://i.creativecommons.org/l/by/4.0/88x31.png)  
This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).   
CC By Attribution  
You are free to:  
Share — copy and redistribute the material in any medium or format  
Adapt — remix, transform, and build upon the material for any purpose, even commercially.  
The licensor cannot revoke these freedoms as long as you follow the license terms.

## Standard Used
***
Variables: camelCase  
Files and Folder: kebab-case

## Approach To Solution
***
### Function initialControl
The function "initialControl" takes an object "initialConfig" as a parameter and checks each value in the object to ensure that it is a number greater than 0 and returns a modified object.  
The code uses a for loop to iterate through each key in the "initialConfig" object. For each key, it checks if the value exists and is not undefined. Next, it checks if the value is not null, Infinity or -Infinity, and if it is a number. If the value passes these checks, it is checked if it is greater than zero. If the value is greater than zero, it is converted to an integer and a log message is recorded.  
If the value fails any of the checks, an error message is printed and the value is set to 1.

