$(document).ready(function() {
  var boxSize = 0;
  var player = '';
  var oPoints=0;
  var xPoints=0;
  var x = 'x';
  var o = 'o';
  var n = 0;

  $('input').on('click', function (e) {
    if (['xPlayer', 'oPlayer'].includes(e.target.value)) {
      player=e.target.value;
      console.log(player, boxSize)
    } else {
      boxSize=e.target.value;
      console.log(player, boxSize)
    }
  })

  $('button').on('click', function (e) {
    e.preventDefault();
    if( boxSize === '9' && player === 'xPlayer' ) {
      $("#mainboard").css("visibility", "visible")
    } else {
      alert("Please choose your player and box sizes")
    }
  })

  var winningPoints = [
    14, 30, 46, 78, 142, 270, 526,
    112, 114, 116, 120, 240, 368, 624,
    896, 898, 900, 904, 912, 928, 960,
    146, 150, 154, 178, 210, 402, 658,
    292, 294, 300, 308, 356, 420, 804,
    584, 586, 588, 600, 616, 712, 840,
    546, 550, 554, 562, 610, 674, 802,
    168, 170, 172, 184, 232, 424, 680
  ]

  $('.item').on('click', function () {
    if (n === 8) {
      n=0;
      xPoints=0;
      oPoints=0;
      alert('Nah, try again');
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
