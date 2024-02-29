

function getForecast(){
    let temperature =-20;
    let hatOwner = false;
    let feedback
    if (temperature < 0){
        feedback = "Stay inside";
    }
    else if(temperature < 30 && hatOwner){
        feedback = "Wear a hat and coat";
    }
    else if(temperature < 50){
        feedback = "Wear a coat";
    }
    else{
        feedback = "Just Pants and Vest is fine.";
    }
    
    document.write (`The outlook is ${temperature} so <h2>${feedback}</h2>`);
}

getForecast();


function outputSentence(firstName, lastName){
    let fullName = makeName(firstName, lastName);
    document.write ('<p>Hello ' + fullName + '</p>');
}

function makeName(firstName, lastName){
    makeName = firstName + " " + lastName;
    return makeName;
}

outputSentence('franc', 'albert');

// PERCENTAGE FUNCTION
/**
 * Calculates the percentage of a number.
 *
 * @param {number} myNumber - The number to calculate the percentage of.
 * @param {number} myPercent - The percentage to calculate.
 * @returns {number} The percentage of myNumber that equals myPercent.
 */
function whatIsThePercent(myNumber, myPercent) {
    return myNumber * myPercent / 100;
}

let myPercent;
myPercent = whatIsThePercent(100, 18);
document.write (myPercent);

// DRINKS ORDER FUNCTION
function drinkOrder (size, buttonName){
    let myDrinkSize;
    let myDrinkFlavour;
    let myDrink 

    switch (size){
        case 'small':
            myDrinkSize = "Small";
            break;
        case 'medium':
            myDrinkSize = "Medium";
            break;
        case 'large' :
            myDrinkSize = "Large";
            break;
    }

    switch (buttonName){
        case 'cola':
            myDrinkFlavour = "Cola";
            break;
        case 'lemon':
            myDrinkFlavour = "Lemonade";
            break;
        case 'orange':
            myDrinkFlavour = "Orangeade";
            break;
    }   

    myDrink = myDrinkSize + ' ' + myDrinkFlavour;
    return myDrink;
}

let myOrder
myOrder = drinkOrder('large','orange');
document.write ('You ordered a ' + myOrder);

// CALCULATOR
function calculator (number1, number2, myOperator){
    let myResult

    switch (myOperator){
        case '+' : myResult = number1 + number2;
        break;
        case '-' : myResult = number1 - number2;
        break;
        case 'x' : myResult = number1 * number2;
        break;
        case '/' : myResult = number1 / number2;
        break;
        default : myResult = 'Cannot help you';
        break;
    }

    myResult = number1 + ' ' + myOperator + ' '  + number2 + ' = ' + myResult;
    return myResult;

}

document.write ('</p>' + calculator(20,4,"x") + '</p>');

// PSEUDOCODE EXAMPLES
  
function fixStart(yourString){
    /*****************************************************************************************************************************************/
      // Description: this function takes a single argument, a string, and returns a version where all occurrences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
    // fixStart('babble'): 'ba**le'
    // fixStart('turtle'): 'tur*le'
    // fixStart('and'): 'and'
    /*****************************************************************************************************************************************/
    //PSEUDOCODE
      // 1. READ first character in yourString into a new variable, myFirstLetter
      // 2. PASS yourString into an array, myArray[] with each letter in yourString as an element in the array.
      // 3. LOOP through each element in myArray[] starting from 2nd element.
        // 4. If the element string matches the myFirstLetter, change the element to '*'
      // 5. AFTER LOOP, READ myArray[] into a string and RETURN it.
    }
    
    function myLibrary{
    /*****************************************************************************************************************************************/
    //  Description: Keep track of which books you read and which books you want to read!
    // Create a list of objects, where each object describes a book and has properties for the title (a string), author (a string), and already read (a boolean (true/false) indicating if you read it yet).
    // Iterate (go through) through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
    // Modify the output based on whether the book's been read: if so, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Hobbit" by J.R.R. Tolkien.'
    /*****************************************************************************************************************************************/
      
      //PSEUDOCODE
        //1. CREATE LIST of OBJECT book with properties (title, author, alreadyRead)
        //2. LOOP THROUGH LIST
          // 3. IF book.alreadyRead == TRUE THEN
            // PRINT 'You have already read' + book.title + ' by ' + book.author
            // ELSE
            // PRINT 'You have yet to read' + book.title + ' by ' + book.author
      
    }
      
    
    function myRecipes{
    /*****************************************************************************************************************************************/
    // Description:
    //   Create a list of objects to hold information on your favourite recipes. It should have properties for:
    // recipeTitle (a string)
    // servings (a number)
    // ingredients (an array/list of strings)
    // directions (a string)
    // List all recipes
    // Create a loop to list all the ingredients.
    /*****************************************************************************************************************************************/
      
    //PSEUDOCODE
      // 1. CREATE LIST of OBJECT recipe with properties (recipeTitle, servings, ingredients, directions)
      // 2. LOOP through List
      // 3. PRINT recipe.recipeTitle
      // 4. LOOP through List
      // 5. PRINT recipe.ingredients
      
    }