$('#clock1').countdown(
  {
    date: '5/26/2017 17:00:00',
    offset: 5.5,
    day: 'Day',
    days: 'Days'
  },
  function() {
    console.log('Done!');
  }
);

$('#clock2').countdown(
  {
    date: '5/29/2017 17:00:00',
    offset: 5.5,
    day: 'Day',
    days: 'Days'
  },
  function() {
    console.log('Done!');
  }
);

$('#clock3').countdown(
  {
    date: '9/26/2017 17:00:00',
    offset: 5.5,
    day: 'Day',
    days: 'Days'
  },
  function() {
    console.log('Done!');
  }
);

// zoom in image

// change image data
$('.img-thumbs .pic').on('click', function(e) {
  e.preventDefault();
  /* Act on the event */
  $('.img-thumbs .item').removeClass('active');
  $(this)
    .parents('.item')
    .addClass('active');
  var dataLarge = $(this).attr('data-lg-img');
  $('.large-view').attr({
    src: dataLarge
  });
  $('.fancy-view').attr({
    href: dataLarge
  });
});
$('.fancy-view').fancybox();

$(function() {
  $('.expand').on('click', function() {
    $expand = $(this).find('>:first-child');

    if ($expand.text() == '+') {
      $expand.text('-');
    } else {
      $expand.text('+');
    }
  });
});
