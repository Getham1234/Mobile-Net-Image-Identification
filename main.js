Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90,

    constraints:{
        facingMode: "environment"
    }
});

cammera = document.getElementById("cammera")

Webcam.attach('#cammera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
        });
}

console.log("ml5 version is", ml5.version);
classifier = ml5.imageClassifier("MobileNet", modelLoded);

function modelLoded(){
    console.log("Model Loaded");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}