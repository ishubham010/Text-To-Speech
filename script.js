const textarea = document.querrySelector("textarea"), 
speechBtn = document.querrySelector("button");

function textToSpeech(text){
    let utternance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speek(utternance); //Speak the speech/utternance
}

speechBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        textToSpeech(textarea.value);
    }
});