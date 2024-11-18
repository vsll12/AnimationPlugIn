$(document).ready(function() {
  
  $('#box1').click(function() {
    $(this).css({
      'transform': 'rotate(360deg)',  
      'transition': 'transform 0.5s ease-in-out'  
    });
  });

  
  $('#box2').click(function() {
    $(this).css({
      'transform': 'scale(1.5)',  
      'background-color': '#FF6347', 
      'transition': 'transform 0.5s ease-in-out, background-color 0.5s ease-in-out'  
    });
  });

  
  $('#box3').click(function() {
    var box = $(this);
    
    box.animate({
      left: '+=200px'
    }, 500, function() {
      
      box.animate({
        left: '-=200px'
      }, 500);
    });
  });

});
