var story = {
    currentScene: "attack",
    attack: {
        title: "VoidSET Guest Portal",
        story: "Welcome to the Guest Portal of VoidSET, . This portal can be used for basic administration, security, and emergency recovery features. For more advanced functionality, please log in.",
        type: "radio",
        choices1: [
            {
                choice: "Administration",
                destination: "guestadmin"
            },
            {
                choice: "Security",
                destination: "guestsec"
            },
            {
               choice: "Emergency Recovery",
               destination: "guestemergency"
            }
        ]
    },
    guestadmin: {
        title: "VoidSET Guest Administration Portal",
        story: "ERROR: VoidSET Station Administration History unavailable from 48 system hours ago. Displaying prior history until unavailability as standard with clearance...",
        type: "radio",
        choices1: []
        
    },
    guestsec: {
        title: "VoidSET Guest Security",
        story: "ERROR: VoidSET Station airlock live feed is temporarily unavailable. Please try signing in using Staff ID to view past footage, and alert the Station technician, Steven, ASAP.",
        type: "text",
        choices1: []
    },
    guestemergency: {
        title: "VoidSET Emergency Account Recovery",
        story: "To recover your account, please answer the following security questions.",
        type: "text",
        choices1: []

    },
}


document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#beginning')
    var input = document.querySelector('#player')
    var content = document.querySelector('#content')
    button.addEventListener('click', renderScene)
    })


function renderScene() {
          content.innerHTML = `
         <h1>${story[story.currentScene].title}</h1>
         <p>${story[story.currentScene].story}</p>
            ${getInputs()}
         <button id = "submit-button">Submit</button>`
         var button = document.querySelector("#submit-button");
         button.addEventListener('click', function() {
            getInputValue()
        })
    }  


function getInputValue() {
    if (story[story.currentScene].type == "radio") {   
        var inputs = document.querySelectorAll('input[type="radio"]');
        for(var i = 0; i < inputs.length; i++) {
         (inputs[i].checked) 
         story.currentScene = inputs[i].getAttribute('data-destination')
         renderScene();}
     
    } else if (story[story.currentScene].type == "text") {
        console.log("This will be a text page later.")        
    }}

function getInputs() {
    var input =""
    for(var i = 0; i < story[story.currentScene].choices1.length; i++) {
        input += `
        <div>
            <input data-destination = ${story[story.currentScene].choices1[i].destination} id = "radio${i}" type = "radio" name = "choices1" />
            <label for "radio${i}">${story[story.currentScene].choices1[i].choice}</label>
        </div>`
    }
    return input;
}


