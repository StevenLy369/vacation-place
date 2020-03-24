$(document).ready(function() {
  $("button#changetodark").click(function() {
    $("body").toggleClass("dark-background");
    $(".jumbotron").toggleClass("jumbo-dark");
  });  

  $("p").click(function(){
    $("p").removeClass();
    $(this).toggleClass("p-dark");
      

  });
  
});