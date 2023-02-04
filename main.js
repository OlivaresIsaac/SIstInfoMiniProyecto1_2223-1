
const mainInput = document.getElementById("mainInput")
const mainButton = document.getElementById("mainButton")
const results = document.getElementById("results");

mainButton.addEventListener("click", addSong);
let songs=[];
let counter=0;

function addSong(){
    let input = mainInput.value
    if (input != null && input != '') {
        let newHtml = buildNewSong(input)
        results.innerHTML += newHtml
    
        mainInput.value=null;
    }
}


function buildNewSong(songName){
    songName[counter] = songName
    counter += 1
    let newHtmlTag = `<p>${counter}.    ${songName}</p>`
    return newHtmlTag
}
