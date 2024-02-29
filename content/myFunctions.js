

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

