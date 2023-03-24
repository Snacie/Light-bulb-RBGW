//Lampfunktioner//

/*Lampa AV/PÅ*/


function validate() {
  var switcheroni=document.getElementById("switcheroni");
if (switcheroni.checked == 1 ) {
  toggle("off");
} else {
  toggle ("on")
}
}
  async function toggle(value) {
    console.log("toggle");
  
  
    var requestOptions = {
  
    method: 'POST',
    redirect: 'follow',
    mode: 'no-cors'
  }
  
  fetch("http://192.168.10.67/light/0?turn=" + value, requestOptions)
  
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
  

  /*ModeKnapp*/
function white() {
  var white1=document.getElementById("white1")
if (white1.checked == 1){ 
toggle1("white");
}else{
  toggle1("color");
}
}
async function toggle1(value){
  console.log("value")
  var requestOptions = {
    method: 'POST',
    redirect: 'follow',
    mode: 'no-cors'
  };
  
  fetch("http://192.168.10.67/light/0?mode=" + value, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


}

//brightness//
var glid = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = glid.value; 
  
  
  glid.oninput = function glid() {
    output.innerHTML = this.value; }
   
  if (white1.checked == 1 ){
    toggle2("brightness=" + glid.value,)
  }else{
    toggle2("gain=" + glid.value,)
  }
function sliderchange() {
  console.log ("sliderchange")
  var glid = document.getElementById("myRange");
  toggle2(glid.value);
  
}
async function toggle2(value){
var requestOptions = {
  method: 'POST',
  redirect: 'follow',
  mode: 'no-cors'
};

fetch("http://192.168.10.67/light/0?brightness=" + value,  requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  fetch("http://192.168.10.67/light/0?gain=" + value,  requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

//colorpicker//

//red//

const buttonred= document.getElementById("buttonred")
buttonred.addEventListener('onclick', function() {
  var toggle3 = document.getElementById("red") .value;
})

function value () {
var red = document.getElementById("buttonred")
toggle3(red.value);

}

async function toggle3(){
  var value = document.getElementById("red") .value;
  console.log ("red")
var requestOptions = {
  method: 'POST',
  redirect: 'follow',
  mode:'no-cors'
};



fetch("http://192.168.10.67/light/0?red=" + value, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
}

//green//

const buttongreen= document.getElementById("buttongreen")
buttongreen.addEventListener('onclick', function() {
  var toggle4 = document.getElementById("green") .value;
})

function value () {
var green = document.getElementById("buttongreen")
toggle4(green.value);

}

async function toggle4(){
  var value = document.getElementById("green") .value;
  console.log ("green")
var requestOptions = {
  method: 'POST',
  redirect: 'follow',
  mode:'no-cors'
};

fetch("http://192.168.10.67/light/0?green=" + value, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
}

//blue//

const buttonblue= document.getElementById("buttonblue")
buttonblue.addEventListener('onclick', function() {
  var toggle5 = document.getElementById("blue") .value;
})

function value () {
var blue = document.getElementById("buttonblue")
toggle5(blue.value);

}

async function toggle5(){
  var value = document.getElementById("blue") .value;
  console.log ("blue")
var requestOptions = {
  method: 'POST',
  redirect: 'follow',
  mode:'no-cors'
};

fetch("http://192.168.10.67/light/0?blue=" + value, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
}