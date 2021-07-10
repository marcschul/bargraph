/*
Library for Bar Chart

Version: 1.0
Author: Marc Schulmeister
Latest Update: July 9th, 2021
JQuery Dependant
*/

function drawBarChart (data, options, element) {
  $(element).replaceWith(options);
  $(function(){
    $('.bars li .bar').each(function(key, bar){
      var percentage = $(this).data('percentage');
      $(this).animate({
          'height' : percentage + '%'
      },1000);
    });
  });
}
