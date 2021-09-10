var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
x=document.getElementById("textbox");
function show(){
    x.innerHTML="";
    recognition.start()
}
recognition.onresult=function(a){
    console.log(a);
 answer=a.results[0][0].transcript;   
 x.innerHTML=answer;
 speak();
}
function speak(){
    var synth = window.speechSynthesis;
  speak_data="Taking your selfie in 5 seconds"
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis); 
  Webcam.attach(camera);
  setTimeout(function(){
      takeselfie();
      save();
  },5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
function takeselfie(){
    Webcam.snap(function(i){
        document.getElementById("result").innerHTML='<img id="final" src="'+i+'"/>';
    });
}
function save(){
    p=document.getElementById("e");
    h=document.getElementById("final").src;
    p.href=h;
    p.click();
}