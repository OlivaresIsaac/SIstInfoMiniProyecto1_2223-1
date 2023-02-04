function highLightLastNavBarButton(id){
    document.getElementById(id).classList.add('active') 
    setTimeout(() => {
        document.getElementById(id).classList.remove('active')
    }, 2000);
}

function showResponsiveNavBar(){
    let navbar = document.getElementById("navbar");
    if (navbar.className === "navbar-div") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar-div";
    }
}
