window.addEventListener('scroll', function() {
    var a = document.getElementById("displaybg");
    var b = document.getElementById("displaybg1");
    a.style.top = `calc(${window.scrollY}px - 100vh)`;
    b.style.top = `calc(${window.scrollY}px - 100vh)`;
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
      trendingcontainer.style.marginLeft = -220 * curposition + "px";
    }else{
      if(curposition > 0){
        curposition--;
      }
      trendingcontainer.style.marginLeft = -220 * curposition + "px";
    }
  }

function initialize(){ //add everything into an array upon loading display with images
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
function backgroundchanger(a){
  herobackground1.src = a;
  displaybackground1.src = a;
  herobackground.src = a;
  displaybackground.src = a;
}

function trendingdescriptionmodifier(a){
    backgroundchanger(a);
    console.log(a);
}