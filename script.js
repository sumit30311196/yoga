let home = document.getElementById("nav1");
let about = document.getElementById("nav2");
let services = document.getElementById("nav3");
let contact = document.getElementById("nav4");

services.style.background = "#c7d9d5";

home.onclick =  function(){
    home.style.background = "#c7d9d5";
    about.style.background = "none";
    services.style.background = "none";
    contact.style.background = "none";
}

about.onclick =  function(){
    about.style.background = "#c7d9d5";
    home.style.background = "none";
    services.style.background = "none";
    contact.style.background = "none";
}

services.onclick =  function(){
    about.style.background = "none";
    services.style.background = "#c7d9d5";
    home.style.background = "none";
    contact.style.background = "none";
}
contact.onclick =  function(){
    about.style.background = "none";
    contact.style.background = "#c7d9d5";
    home.style.background = "none";
    services.style.background = "none";
}