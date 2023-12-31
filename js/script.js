function switchHide(obj) {
    // determine the correct display and change oll relevant elements
    var hide = document.querySelector("header").style.display == "none";
    document.querySelector("header").style.display = hide ? "block" : "none";
    document.querySelector("#fill").style.display = hide ? "block" : "none";
    obj.innerHTML = hide ? "Hide header" : "Show header";
}

// update CSS variables based on an object
function updateColorScheme(colorScheme) {
   
    // loop through keys and values in color scheme
    for (const [key, value] of Object.entries(colorScheme)) {
        // update the matching CSS variable
        document.querySelector(':root').style.setProperty("--" + key, value);
    }
    
}

function setColor() {
    // define a couple color schemes
    const defaultColorScheme = {
        grad1: "#795c34",
        grad2: "#4b371c",
        grad3: "#3c280d",
        backColor: "#b58f5c",
        listColor: "#f5cb9c",
        listFontColor: "black"
    };
    const christmasColorScheme = {
        grad1: "#E91E1E",
        grad2: "#CF1C1C",
        grad3: "#BE1A1A",
        backColor: "#66C739",
        listColor: "#BB3131",
        listFontColor: "white"
    };
    // create date from the current date
    let date = new Date(Date.now());
    if (date.getMonth() == 11 && (date.getDate() >= 21 && date.getDate() <= 25)) {
        // if date is correct, update the color scheme

        updateColorScheme(christmasColorScheme);
    }   
}

document.addEventListener("DOMContentLoaded",  e => {setColor()});

if (window.matchMedia("(max-width: 600px").matches) {
    console.log("true")
}