var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox"). innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

console.log(event);


var Content = event.results[0][0].transcript;

   document.getElementById("textbox").innerHTML = Content;
   console.log(Content) 

   if(Content == "Take my selfie")
   {
    console.log("taking selfie --- ");
    speak();
   }
}

function speak(){
    var synth = window.SpeechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds";
    
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    },  5000);
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}

