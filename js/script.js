function setMenu(value) {
  if (value == 'tab1') {
    document.getElementById('menu1').style.display = 'flex';
    document.getElementById('menu2').style.display = 'none';
    document.getElementById('menu3').style.display = 'none';
    document.getElementById('menu4').style.display = 'none';
    document.getElementById('overlaybox').style.display = 'block';
  }

  if (value == 'tab2') {
    document.getElementById('menu1').style.display = 'none';
    document.getElementById('menu2').style.display = 'flex';
    document.getElementById('menu3').style.display = 'none';
    document.getElementById('menu4').style.display = 'none';
    document.getElementById('overlaybox').style.display = 'block';
  }

  if (value == 'tab3') {
    document.getElementById('menu1').style.display = 'none';
    document.getElementById('menu2').style.display = 'none';
    document.getElementById('menu3').style.display = 'flex';
    document.getElementById('menu4').style.display = 'none';
    document.getElementById('overlaybox').style.display = 'block';
  }

  if (value == 'tab4') {
    document.getElementById('menu1').style.display = 'none';
    document.getElementById('menu2').style.display = 'none';
    document.getElementById('menu3').style.display = 'none';
    document.getElementById('menu4').style.display = 'flex';
    document.getElementById('overlaybox').style.display = 'block';
  }

  if (value == 'overlayon') {
    document.getElementById('overlaybox').style.display = 'none';
    document.getElementById('menu1').style.display = 'none';
    document.getElementById('menu2').style.display = 'none';
    document.getElementById('menu3').style.display = 'none';
    document.getElementById('menu4').style.display = 'none';
  }
};


var current = 0;
var count = $(".slide").length;

function nav(dir){
  current = current + dir;
  if(current >= count){
    current = 0;
  }else if(current < 0){
    current = count-1;
  }

  $(".slide").fadeOut(800);
  $(".slide").eq(current).fadeIn(800);
};

setInterval(function(){
  nav(1);
}, 1500);