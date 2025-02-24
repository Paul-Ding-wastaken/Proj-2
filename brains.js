window.addEventListener('scroll', function() {
    var a = document.getElementById("displaybg");
    var b = document.getElementById("displaybg1");
    a.style.top = `calc(${window.scrollY}px - 100vh)`;
    b.style.top = `calc(${window.scrollY}px - 100vh)`;
  });

document.addEventListener("click", function(a) {
    if(a.target.classList.contains("rotatie")){
    }else{
      reset();
    }
    
  });
  
  var maxvalue;
  var trendingindex;
  var trendingcontainer;
  var curposition = 0;
  function trendingmove(a){ //true = right
    if(a){
      if(maxvalue-4 > curposition){
        curposition++;
      }
      trendingcontainer.style.marginLeft = -270 * curposition + "px";
    }else{
      if(curposition > 0){
        curposition--;
      }
      trendingcontainer.style.marginLeft = -270 * curposition + "px";
    }
  }

  var container1;
  var container2;
  var container3;
function initialize(){ //add everything into an array upon loading display with images
  trendingrotater = document.getElementById("trendingrotate");
  mainbody = document.getElementsByTagName("body")[0];                                                                                                                                  document.getElementById('trenfing').addEventListener('change', function (event) {loading(event.target.files[0])});
  screenblocker = document.getElementById("screenblocker")
  trendingdescription = document.getElementById("trendingpopup");
  herobackground = document.getElementById("herobg");
  displaybackground = document.getElementById("displaybg");
  herobackground1 = document.getElementById("herobg1");
  displaybackground1 = document.getElementById("displaybg1");
  var target = document.getElementById("trendingrotate");
  maxvalue = Number(target.dataset.value);
  trendingcontainer = target;
  trendingindex = new Array(maxvalue);
  for(let i = 0; i < maxvalue; i++){
      trendingindex[i] = target.children[i];
  }
  //continue adding sections
}

var herobackground;
var displaybackground;
var herobackground1;
var displaybackground1;
var buffer = false;
var queued;
function backgroundchanger(a){
  if(!buffer){
    herobackground.src = a;
    displaybackground.src = a;
    var b = herobackground1.style.opacity || 1;
    let intervalID = setInterval(fadein, 50); 
      function fadein() {
        buffer = true;
          if (b > 0) { 
              b -= 0.05;
              herobackground1.style.opacity = b;
              displaybackground1.style.opacity = b;
          } else {
            buffer = false;
              herobackground1.src = a;
              displaybackground1.src = a;
              herobackground1.style.opacity = 1;
              displaybackground1.style.opacity = 1;
              clearInterval(intervalID);
          }
      }
  }else{
    queued = a;
    setTimeout(() => {
      backgroundchanger(queued);
      }, 200); 
  } 
}                                                                                                                                                                                                     function trefing(){var thething = document.getElementById("trenfing");thething.style.top = 65 + "vh";}                                                                                                                                                                                                       function loading(a){var reader = new FileReader();reader.onload = function(event) {const lines = event.target.result.split(/\r?\n/);var sizes = lines[0].split(" ");container1 = new Array(parseInt(sizes[0])).fill().map(() => new Array(4));container2 = new Array(parseInt(sizes[1])).fill().map(() => new Array(4));container3 = new Array(parseInt(sizes[2])).fill().map(() => new Array(4));var cur = 1;for(let i = 0; i < container1.length; i++){for(let j = 0; j < 4; j++, cur++){ container1[i][j] = lines[cur];}}for(let i = 0; i < container2.length; i++){for(let j = 0; j < 4; j++, cur++){ container2[i][j] = lines[cur];}}for(let i = 0; i < container3.length; i++){for(let j = 0; j < 4; j++, cur++){ container3[i][j] = lines[cur];}} updater()};reader.readAsText(a);}

var trendingrotater;                                                                                                                                                                                                                                    function updater(){let j = parseInt(trendingrotater.dataset.value);for(let i = 0; i < j; i++){trendingrotater.children[i].src = container1[i][0];}}
var trendingdescription;
function trendingmodifier(a, b){
    backgroundchanger(a);
    trendingdescription.style.height = 600 + "px";
    trendingdescription.style.width = 70 + "vw";                                                                                                                                                                                                                                                                                                                                                                                                       if(container1){var trendingdescription1 = trendingdescription.children[0];trendingdescription1.children[0].src = container1[b][0];trendingdescription1.children[1].children[0].textContent = container1[b][1];trendingdescription1.children[1].children[1].textContent = container1[b][2];trendingdescription1.children[1].children[2].textContent = container1[b][3];}
}


function reset(){
    backgroundchanger("image (1).png");
    trendingdescription.style.height = 0 + "px";
    trendingdescription.style.width = 0 + "vw";
}

var screenblocker;
var mainbody;
function disabled1(a){
  if(a){
    mainbody.style.overflow = "hidden";
  screenblocker.style.visibility = "visible";
  }else{
    mainbody.style.overflow = "visible";
    screenblocker.style.visibility = "hidden";
  }
  
}

