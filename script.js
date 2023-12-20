function switchHide(obj) {
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
        document.documentElement.style.setProperty(key, value);
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
    let date = new Date(Date.now());
    if (date.getMonth() == 12 && (date.getDay() >= 21 && date.getDay() <= 25)) {
        updateColorScheme(christmasColorScheme);
    }   
}

setColor();