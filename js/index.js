$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(7000)
    .next()
    .fadeIn(7000)
    .end()
    .appendTo('#slideshow');
}, 8000);