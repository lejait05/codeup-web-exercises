function getOddNumber(){
    var userNumber = prompt ("Please enter an odd number between 1-50.");
    var invalidInput = true;
    while (invalidInput){
        if ((parseInt(userNumber) % 2 !== 0 && parseInt(userNumber) <=50)) break;
       userNumber;
       }
       return parseInt(userNumber);
}
function outputOddNumbers(){
    var userInput = getOddNumber();
    console.log("Number to skip is: " + userInput);
    for(var i =1; i<= 50; i += 2){
        if (i === userInput){
            console.log( "Yikes! Skipping number: " + userInput)
            continue;
        }
        console.log( "Here is an odd number: " + i);
    }
}