$('.gnb-item').on('click', function() {
  $(this).children('section').addClass('on');
  $('.overlay').addClass('on');
});

$('.overlay').on('click', function() {
  $('.gnb-item-menu').removeClass('on');
  $('.overlay').removeClass('on');
})