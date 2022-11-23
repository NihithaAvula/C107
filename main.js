function classification(){
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OSEn1fUJO/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults)
}