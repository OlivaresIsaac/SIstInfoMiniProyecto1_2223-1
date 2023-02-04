const homeHero = document.getElementById('home')
const slideCaptions = ["Isaac Olivares", "Ducks!", "Isaac Olivares", "HighIQGames"]

let currentSlideIndex = 0

addSlidesIntoHero()
nextSlide(0)

function addSlidesIntoHero(){
    // assets\hero2.jpg
    for (let i=1;i<= slideCaptions.length;i++) {
        slideHtml = `
        <div class="slides">
        <img class="responsive-img fade" src="assets/hero${i}.jpg" >
        <div class="caption-div black-bold">
        <div >${slideCaptions[i-1]}</div>
        <div >${i}/4</div>
        </div>
      </div>
        `
        homeHero.innerHTML +=slideHtml
    }

    
}

function nextSlide(moveIndex){
    currentSlideIndex += moveIndex
    showSlide(currentSlideIndex)
}

function showSlide(slideNumber){
    let slidesArray = document.getElementsByClassName("slides")
    if (slideNumber >= slidesArray.length){
        currentSlideIndex = 0
    }
    if (slideNumber < 0){
        currentSlideIndex = slidesArray.length-1
    }

    // reset all slides
    for (let i=0;i<slidesArray.length;i++){
        slidesArray[i].style.display = "none"
    }
    slidesArray[currentSlideIndex].style.display = 'block'
}


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
