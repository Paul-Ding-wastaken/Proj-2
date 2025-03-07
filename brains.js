window.addEventListener('scroll', function() {
    let a = document.getElementById("displayBg");
    let b = document.getElementById("displayBg1");
    a.style.top = `calc(${window.scrollY}px - 100vh)`;
    b.style.top = `calc(${window.scrollY}px - 100vh)`;
  });

document.addEventListener("click", function(a) {
    if(a.target.classList.contains("rotatie")){
    }else{
      reset();
    }
    
  });
  
  let maxValue;
  let trendingContainer;
  let curPosition = 0;
  function trendingMove(a){ //true = right
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
  let maxValue1;
  let chartContainer;
  let curPosition1 = 0;
  function chartMove(a){ //true = right
    if(a){
      if(maxValue1-3 > curPosition1){
        curPosition1++;
      }
      chartContainer.style.marginLeft = -270 * curPosition1 + "px";
    }else{
      if(curPosition1 > 0){
        curPosition1--;
      }
      chartContainer.style.marginLeft = -270 * curPosition1 + "px";
    }
  }
  let maxValue2;
  let classicContainer2;
  let curPosition2 = 0;
  function classicMove(a){ //true = right
    if(a){
      if(maxValue2-3 > curPosition2){
        curPosition2++;
      }
      classicContainer.style.marginLeft = -270 * curPosition2 + "px";
    }else{
      if(curPosition2 > 0){
        curPosition2--;
      }
      classicContainer.style.marginLeft = -270 * curPosition2 + "px";
    }
  }

  let container1;
  let container2;
  let container3;
function initialize(){ //load everything once upon opening
  trendingRotater = document.getElementById("trending-rotate");
  chartRotater = document.getElementById("chart-rotate");
  classicRotater = document.getElementById("classic-rotate");
  mainBody = document.getElementsByTagName("body")[0];                                                                                                                                  document.getElementById('trenfing').addEventListener('change', function (event) {loading(event.target.files[0])});
  screenBlocker = document.getElementById("screenBlocker")
  trendingDescription = document.getElementById("trending-popup");
  chartDescription = document.getElementById("chart-popup");
  classicDescription = document.getElementById("classic-popup");
  heroBackground = document.getElementById("herobg");
  displayBackground = document.getElementById("displayBg");
  heroBackground1 = document.getElementById("herobg1");
  displayBackground1 = document.getElementById("displayBg1");
  trendingContainer = document.getElementById("trending-rotate");
  maxValue = Number(trendingContainer.dataset.value);
  chartContainer = document.getElementById("chart-rotate");
  maxValue1 = Number(chartContainer.dataset.value);
  classicContainer = document.getElementById("classic-rotate");
  maxValue2 = Number(classicContainer.dataset.value);

}

let heroBackground;
let displayBackground;
let heroBackground1;
let displayBackground1;
let buffer = false;
let queued;
function backgroundChanger(a){
  if(!buffer){
    heroBackground.src = a;
    displayBackground.src = a;
    let b = heroBackground1.style.opacity || 1;
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
      backgroundChanger(queued);
      }, 200); 
  } 
}                                                                                                                                                                                                     function trefing(){let thething = document.getElementById("trenfing"); thething.style.top = 65 + "vh";}                                                                                                                                                                                                       function loading(a){let reader = new FileReader();reader.onload = function(event) {const lines = event.target.result.split(/\r?\n/);let sizes = lines[0].split(" ");container1 = new Array(parseInt(sizes[0])).fill().map(() => new Array(4));container2 = new Array(parseInt(sizes[1])).fill().map(() => new Array(4));container3 = new Array(parseInt(sizes[2])).fill().map(() => new Array(4));let cur = 1;for(let i = 0; i < container1.length; i++){for(let j = 0; j < 4; j++, cur++){ container1[i][j] = lines[cur];}}for(let i = 0; i < container2.length; i++){for(let j = 0; j < 4; j++, cur++){ container2[i][j] = lines[cur];}}for(let i = 0; i < container3.length; i++){for(let j = 0; j < 4; j++, cur++){ container3[i][j] = lines[cur];}} updater()};reader.readAsText(a);}

let trendingRotater;                                                                                                                                                                                                                                    function updater(){let j = parseInt(trendingRotater.dataset.value);for(let i = 0; i < j; i++){trendingRotater.children[i].src = container1[i][0];} updater1();}
let trendingDescription;
function trendingModifier(a, b){
    backgroundChanger(a);
    trendingDescription.style.height = 600 + "px";
    trendingDescription.style.width = 70 + "vw";                                                                                                                                                                                                                                                                                                                                                                                                       if(container1){let trendingDescription1 = trendingDescription.children[0];trendingDescription1.children[0].src = container1[b][0];trendingDescription1.children[1].children[0].textContent = container1[b][1];trendingDescription1.children[1].children[1].textContent = container1[b][2];trendingDescription1.children[1].children[2].textContent = container1[b][3];}

  }

let chartRotater;                                                                                                                                                                                                                                    function updater1(){let j = parseInt(chartRotater.dataset.value);for(let i = 0; i < j; i++){chartRotater.children[i].src = container2[i][0];} updater2();}
let chartDescription;
function chartModifier(a, b){
    backgroundChanger(a);

    chartDescription.style.height = 600 + "px";
    chartDescription.style.width = 70 + "vw";                                                                                                                                                                                                                                                                                                                                                                                                       if(container2){let chartDescription1 = chartDescription.children[0];chartDescription1.children[0].src = container1[b][0];chartDescription1.children[1].children[0].textContent = container1[b][1];chartDescription1.children[1].children[1].textContent = container1[b][2];chartDescription1.children[1].children[2].textContent = container1[b][3];}
}

let classicRotater;                                                                                                                                                                                                                                    function updater2(){let j = parseInt(classicRotater.dataset.value);for(let i = 0; i < j; i++){classicRotater.children[i].src = container3[i][0];}}
let classicDescription;
function classicModifier(a, b){
    backgroundChanger(a);
    classicDescription.style.height = 600 + "px";
    classicDescription.style.width = 70 + "vw";                                                                                                                                                                                                                                                                                                                                                                                                       if(container3){let classicDescription1 = classicDescription.children[0];classicDescription1.children[0].src = container1[b][0];classicDescription1.children[1].children[0].textContent = container1[b][1];classicDescription1.children[1].children[1].textContent = container1[b][2];classicDescription1.children[1].children[2].textContent = container1[b][3];}

  }



function reset(){
    backgroundChanger("image (1).png");
    trendingDescription.style.height = 0 + "px";
    trendingDescription.style.width = 0 + "vw";
    chartDescription.style.height = 0 + "px";
    chartDescription.style.width = 0 + "vw";
    classicDescription.style.height = 0 + "px";
    classicDescription.style.width = 0 + "vw";
}

let screenBlocker;
let mainBody;
function disabled1(a){
  if(a){
    mainBody.style.overflow = "hidden";
  screenBlocker.style.visibility = "visible";
  }else{
    mainBody.style.overflow = "visible";
    screenBlocker.style.visibility = "hidden";
  }
  
}