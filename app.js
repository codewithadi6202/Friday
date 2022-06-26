// Elements

const startbtn = document.querySelector("#start");
const stopbtn = document.querySelector("#stop_listen");

// Speech Recognition Setup

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// sr_start

recognition.onstart = function (){
    console.log("Status: AI Activated")
    document.getElementById('textarea').style.display = 'block';
}

// sr_continue

recognition.continuous = true;


// sr_deactivate
recognition.onend = function (){
    console.log("Status : AI deactivated")
}

recognition.onresult = function takecommand(event){
    document.getElementById('status').style.display = 'none';
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    document.getElementById('textarea').innerHTML = ("'" + transcript + "'");

    if(transcript.includes("hello")){
        speak("Hi");
    }
    if(transcript.includes("YouTube")){
        speak("opening Youtube");
        window.open("https://www.youtube.com");
    }
    if(transcript.includes("Google")){
        speak("opening Google");
        window.open("https://www.google.com");
    }
    if(transcript.includes("open GitHub")){
        speak("opening github");
        window.open("https://www.github.com");
    }
    if(transcript.includes("google fonts")){
        speak("opening google fonts");
        window.open("https://www.googlefonts.com");
    }
    if(transcript.includes("how are you")){
        speak("I am fine, how are you ?");
    }
    if(transcript.includes("fine")){
        speak("great !");
    }
    if(transcript.includes("stop listening")){
        speak("Ok !");
        reback_display()
    }
    if(transcript.includes("are you listening")){
        speak("Yes, perfectly");
    }
    if(transcript.includes("Oh")){
        speak("What happened !");
    }
    if(transcript.includes("Oh")){
        speak("What happened !");
    }
    if(transcript.includes("namaste")){
        speak("Namaste");
    }

}

startbtn.addEventListener("click", () =>{
    recognition.start()
});

stopbtn.addEventListener("click", () =>{
    recognition.stop()
});

// Speak Setup

function speak(message){
    const voice = new SpeechSynthesisUtterance();
    voice.text = message;
    window.speechSynthesis.speak(voice);
}

speak("I am Friday, What can I help you ?");
