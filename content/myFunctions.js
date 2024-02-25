

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






