var boyName =
    ["Jihad",
        "Clitis",
        "Danger",
        "Colon",
        "Mercury Constellation Starcruiser",
        "Gotham",
        "Pilot Inspektor",
        "Jammy",
        "Adolf Hitler",
        "Mazen"]

var girlName =
    ["Love-child",
        "Britney Shakira Beyoncé",
        "Baby Girl",
        "I’munique",
        "Ahmiracle",
        "Hellzel",
        "Obamanique",
        "Aliviyah",
        "Nevaeh",
        "Little Sweetmeat"]




//create 5 js vars to 

//what is your last name?
var lastNameInput = document.getElementById('last-name');

//boy name - radio
var boysNameRadio = document.getElementById('radios-boy');

//girl name - radio
var girlsNameRadio = document.getElementById('radios-girl');
//generate name button

// name generated
var nameGenerated = document.getElementById('generated-name');

var nameGeneratedButton = document.getElementById('button');
nameGeneratedButton.addEventListener("click", createBabyName)

function createBabyName() {

    // Needs to check lastNameInput if somethig is written in last name and female or male radio is selected
    if (!lastNameInput.value) {
        alert("Please add last name");
    } else {
        // if boy selected, pull from boy array boyName
        if (boysNameRadio.checked) {
            var boysFirstName = randElem(boyName);
            var boysMiddleName = randFilteredElem(boyName, boysFirstName);

            //print them
            nameGenerated.innerHTML = boysFirstName + " " + boysMiddleName + " " + lastNameInput.value;
        }
        
            // if girl selected, pull from boy array boyName
        if(girlsNameRadio.checked) {
            var girlsFirstName = randElem(girlName);
            var girlsMiddleName = randFilteredElem(girlName, girlsFirstName);

            //print them
            nameGenerated.innerHTML = girlsFirstName + " " + girlsMiddleName + " " + lastNameInput.value;
        }

    }
}










function randElem(arr) {
    var max = arr.length - 1;
    var min = 0;
    var index = (Math.floor(Math.random() * (max - min + 1)) + min);
    return arr[index];
}

function randFilteredElem(arr, filter) {
    var max = arr.length - 1; //3
    var min = 0; //0
    var index = (Math.floor(Math.random() * (max - min + 1)) + min);
    while (arr[index] === filter) {
        max = arr.length - 1; //3
        min = 0; //0
        index = (Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr[index];
}