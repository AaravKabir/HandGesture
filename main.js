prediction1 = "";
prediction2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>";
    });
}
console.log("Ml5 version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Sv8aAtRjJ/.json"), modelLoaded;
function modelLoaded(){
    console.log("Model has been loaded");
}
function speak(){
    var synth = window.speechSynthesis;
    speakdata1 = "The first prediction is " + prediction1;
    var utterthis = new SpeechSynthesisUtterance(speakdata1);
    synth.speak(utterthis); 
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){console.error(error);}
    else{
        console.log(results);
        document.getElementById("result_emotion_name_1").innerHTML = results[0].label;
        prediction1 = results[0].label;
        speak();
        if(results[0].label == "Victory")
        {document.getElementById("update_emoji_1").innerHTML = "&#128522;";
    }
    if(results[0].label == "Awsome")
        {document.getElementById("update_emoji_1").innerHTML = "&#128546;";
    }
    if(results[0].label == "Thumbs Up")
        {document.getElementById("update_emoji_1").innerHTML = "&#128545;";
    }}}
