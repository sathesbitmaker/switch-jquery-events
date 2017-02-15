$(function() {
  $('.light').css('background-color', 'yellow')
})


$(function() {
$('button').on('click', function() {
if ($("button").hasClass('off')){
  $( '.off').addClass('on')
  $( '.off').removeClass('off')
  $('.status').text('It is so bright in here!')
$('.light').css('background-color', 'yellow')
}
  else {
    $('.on').addClass('off')
    $('.on').removeClass('on')
    $('.status').text('It is so dark in here!')
    $('.light').css('background-color', 'black')
  }
})
})
