window.addEventListener('scroll', function() {
    const img = document.getElementById("displaybg");
    img.style.top = `calc(${window.scrollY}px - 100vh)`;
  });

  //var trendingcur = ""; to be implemented later with description boxes with spotlight effect
  var curposition = 0;
  function trendingscroll(a){ //true = right
    var target = document.getElementById("trendingrotate");
    var maxvalue = Number(target.dataset.value);
    if(a){
      if(maxvalue > curposition){
        curposition++;
      }
    }else{
      if(curposition > 0){
        curposition--;
      }
    }
  }