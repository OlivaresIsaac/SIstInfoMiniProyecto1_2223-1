const homeHero = document.getElementById('home')
const skillDiv = document.getElementById('skillDiv')
const slideCaptions = ["Isaac Olivares", "Ducks!", "Isaac Olivares", "HighIQGames"]

const skills = [
    {name: "html", skillAmount: 60},
    {name: "css", skillAmount: 50},
    {name: "javascript", skillAmount: 60},
    {name: "typescript", skillAmount: 90},
    {name: "angular", skillAmount: 100},
    {name: "python", skillAmount: 90},
    {name: "firebase", skillAmount: 70},
    {name: "sql", skillAmount: 60},
    {name: "c#", skillAmount: 75},
    {name: "java", skillAmount: 80},
]


let currentSlideIndex = 0


addSlidesIntoHero()
nextSlide(0)    
addSkillsToHtml()
setInterval(nextSlide, 10000, 1)

function addSlidesIntoHero(){
    // assets\hero2.jpg
    for (let i=1;i<= slideCaptions.length;i++) {
        const slideHtml = `
        <div class="slides">
        <img class="responsive-img fade" src="assets/hero${i}.jpg" >
        <div class="caption-div white-bold">
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

function addSkillsToHtml(){
    for(let i = 0; i<skills.length; i++) {
        let classCSS = 'skill-slider'
        
        if (skills[i].skillAmount <= 60){
            classCSS += "-medium"
        } else if (skills[i].skillAmount <= 80){
            classCSS += "-average"
        } else {
            classCSS += "-good"
        }
        console.log(classCSS)

        const skillHtml = `
        <div class="skill">
        <p>${skills[i].name.toUpperCase()}</p>
        <input type="range" min="1" max="100" value="${skills[i].skillAmount}" class="${classCSS}" onchange="blockSlider(this, ${skills[i].skillAmount})">
    
        </div>` 
    skillDiv.innerHTML += skillHtml
    }
   
}
function blockSlider(slider, originalValue){
    slider.value = originalValue    
}

/* <div class="about-div"><p>0</p><p>100</p></div> */