async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mayrbjkn", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}


function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');
}


// Define the element IDs to retrieve their innerHTML values
const elementIds = [
    "value1", "value2", "value3", "value4", "value5", 
    "value6", "value7", "value8", "value9", "value10", 
    "value11", "value12", "value13", "value14", "value15", 
    "value16", "value17", "value18", "value19", "value20", "value21"
];


// Define an object to store the innerHTML values
const amounts = {};


// Function to retrieve innerHTML values
function retrieveInnerHTMLValues() {
    elementIds.forEach(id => {
        const element = document.getElementById(id);
        if (element !== null && element !== undefined) {
            amounts[id] = element.innerHTML;
        }
    });
}


// Function to calculate
function calc() {
    // Call the function to retrieve innerHTML values
    retrieveInnerHTMLValues();

    // Get the portions value
    let portions = document.getElementById("portions").value;
    
    // Validate portions
    if (portions > 10 || portions < 1) {
        alert("Bitte gib Werte von 1 bis 10 ein");
        portions = 1;
    }

    // Update the HTML content based on portions and amounts
    elementIds.forEach(id => {
        document.getElementById(id).innerHTML = portions * amounts[id];
    });
}