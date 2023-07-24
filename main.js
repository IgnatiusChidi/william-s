var hbMenuButton = document.getElementById("hbMenuDiv");
var hbMenu = document.getElementById("menuContainer");
var closeMenu = document.getElementById("closeMenu");

function showMenu (){
    hbMenu.style.display = "block";
};

function hideMenu (){
    hbMenu.style.display = "none";
};

hbMenuButton.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu);