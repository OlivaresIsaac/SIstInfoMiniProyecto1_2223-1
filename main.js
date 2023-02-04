function highLightLastNavBarButton(id){
    document.getElementById(id).classList.add('active')
    // contactNavButton.classList.remove("active")
    setTimeout(() => {
        document.getElementById(id).classList.remove('active')
    }, 2000);
}

