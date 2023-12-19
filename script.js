function switchHide(obj) {
    var hide = document.querySelector("header").style.display == "none";
    document.querySelector("header").style.display = hide ? "block" : "none";
    document.querySelector("#fill").style.display = document.querySelector("#fill").style.display == "none" ? "block" : "none";
}