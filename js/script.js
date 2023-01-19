function setMenu(value) {
  if (value == 'tab1') {
    document.getElementById('menu1').style.display = 'flex';
    document.getElementById('overlaybox').style.display = 'block';
    document.getElementById('menu2').style.display = 'none';
  };

  if (value == 'tab2') {
    document.getElementById('menu1').style.display = 'none';
    document.getElementById('menu2').style.display = 'flex';
    document.getElementById('overlaybox').style.display = 'block';
  };

  if (value == 'overlayon')
  document.getElementById('menu1').style.display = 'none';
  document.getElementById('menu2').style.display = 'none';
  document.getElementById('overlaybox').style.display = 'none';
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

  $(".slide").fadeOut(700);
  $(".slide").eq(current).fadeIn(700);
};

setInterval(function(){
  nav(1);
}, 1500);