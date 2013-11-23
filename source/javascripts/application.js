#= require_tree ./vendor
#= require_tree ./lib

$('.container .box').click(function ()
{
  var date, box_date, now;

  date = $(this).attr('date');
  box_date = new Date(2013, 10, date);    // ändra till 11!!

  now = new Date();

  if (now.getTime() > box_date.getTime())
  {
    $('.popup').addClass('hide');
    $('#popup' + date + ', .darken').removeClass('hide');
  }
  else
  {
    alert('Tjuvkika inte ;)')
  }
});

$('.popup .close').click(function ()
{
  $('.popup, .darken').addClass('hide');
});