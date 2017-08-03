$(document).ready(function() {
  var x = 'x';
  var o = 'o';
  var n = 0;

  var oPoints=0;
  var xPoints=0;

  var winningPoints = [14, 112, 896, 146, 292, 584, 546, 168];

  var box1 = {selector: $('#box1')};
  var box2 = {selector: $('#box2')};
  var box3 = {selector: $('#box3')};
  var box4 = {selector: $('#box4')};
  var box5 = {selector: $('#box5')};
  var box6 = {selector: $('#box6')};
  var box7 = {selector: $('#box7')};
  var box8 = {selector: $('#box8')};
  var box9 = {selector: $('#box9')};

  $('.item').on('click', function () {
    if (n === 8) {
      n=0;
      xPoints=0;
      oPoints=0;
      alert('Try again 3:)');
      $('.item').text('');
      $('.item').removeClass('x');
      $('.item').removeClass('o');
      $('.item').removeClass('disabled');
    } else if ($(this).hasClass('disabled')){
      alert ('Naaah, not here');
    } else if (n%2 === 1) {
      console.log(typeof +$(this).attr('point'))
      n++;
      oPoints = oPoints + +$(this).attr('point');
      console.log(xPoints, oPoints);

      $(this).text(o);
      $(this).addClass('o disabled');
      if (winningPoints.includes(oPoints)) {
        n = 0;
        xPoints=0;
        oPoints=0;
        $('.item').text('');
        $('.item').removeClass('o');
        $('.item').removeClass('x');
        $('.item').removeClass('disabled');
        alert('Congrats, O!!! Don\'t give up, X!!!');
      }
    }
    else {
      console.log(typeof +$(this).attr('point'));
      n++;
      xPoints = xPoints + +$(this).attr('point');
      console.log(xPoints, oPoints);
      $(this).text(x);
      $(this).addClass('x disabled');
      if (winningPoints.includes(xPoints)) {
        n = 0;
        xPoints=0;
        oPoints=0;
        alert('Congrats, X!!! Don\'t give up, O!!!');
        $('.item').text('');
        $('.item').removeClass('disabled');
        $('.item').removeClass('o');
        $('.item').removeClass('x');
      }
    }
  });
});
