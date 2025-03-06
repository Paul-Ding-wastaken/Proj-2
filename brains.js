window.addEventListener('scroll', function() {
    var a = document.getElementById("displayBg");
    var b = document.getElementById("displayBg1");
    a.style.top = `calc(${window.scrollY}px - 100vh)`;
    b.style.top = `calc(${window.scrollY}px - 100vh)`;
  });

document.addEventListener("click", function(a) {
    if(a.target.classList.contains("rotatie")){
    }else{
      reset();
    }
    
  });
  
  var maxValue;
  var trendingIndex;
  var trendingContainer;
  var curPosition = 0;
  function trendingmove(a){ //true = right
    if(a){
      if(maxValue-3 > curPosition){
        curPosition++;
      }
      trendingContainer.style.marginLeft = -270 * curPosition + "px";
    }else{
      if(curPosition > 0){
        curPosition--;
      }
      trendingContainer.style.marginLeft = -270 * curPosition + "px";
    }
  }

  var container1;
  var container2;
  var container3;
function initialize(){ //add everything into an array upon loading display with images
  trendingrotater = document.getElementById("trendingrotate");
  mainBody = document.getElementsByTagName("body")[0];                                                                                                                                  document.getElementById('trenfing').addEventListener('change', function (event) {loading(event.target.files[0])});
  screenBlocker = document.getElementById("screenBlocker")
  trendingDescription = document.getElementById("trendingpopup");
  heroBackground = document.getElementById("herobg");
  displayBackground = document.getElementById("displayBg");
  heroBackground1 = document.getElementById("herobg1");
  displayBackground1 = document.getElementById("displayBg1");
  var target = document.getElementById("trendingrotate");
  maxValue = Number(target.dataset.value);
  trendingContainer = target;
  trendingIndex = new Array(maxValue);
  for(let i = 0; i < maxValue; i++){
      trendingIndex[i] = target.children[i];
  }
  //continue adding sections
}

var heroBackground;
var displayBackground;
var heroBackground1;
var displayBackground1;
var buffer = false;
var queued;
function backgroundchanger(a){
  if(!buffer){
    heroBackground.src = a;
    displayBackground.src = a;
    var b = heroBackground1.style.opacity || 1;
    let intervalID = setInterval(fadein, 50); 
      function fadein() {
        buffer = true;
          if (b > 0) { 
              b -= 0.05;
              heroBackground1.style.opacity = b;
              displayBackground1.style.opacity = b;
          } else {
            buffer = false;
              heroBackground1.src = a;
              displayBackground1.src = a;
              heroBackground1.style.opacity = 1;
              displayBackground1.style.opacity = 1;
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
var trendingDescription;
function trendingmodifier(a, b){
    backgroundchanger(a);
    trendingDescription.style.height = 600 + "px";
    trendingDescription.style.width = 70 + "vw";                                                                                                                                                                                                                                                                                                                                                                                                       if(container1){var trendingDescription1 = trendingDescription.children[0];trendingDescription1.children[0].src = container1[b][0];trendingDescription1.children[1].children[0].textContent = container1[b][1];trendingDescription1.children[1].children[1].textContent = container1[b][2];trendingDescription1.children[1].children[2].textContent = container1[b][3];}
}


function reset(){
    backgroundchanger("image (1).png");
    trendingDescription.style.height = 0 + "px";
    trendingDescription.style.width = 0 + "vw";
}

var screenBlocker;
var mainBody;
function disabled1(a){
  if(a){
    mainBody.style.overflow = "hidden";
  screenBlocker.style.visibility = "visible";
  }else{
    mainBody.style.overflow = "visible";
    screenBlocker.style.visibility = "hidden";
  }
  
}

