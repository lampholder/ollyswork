$("#fontPlusBtn").click(function (){
    $("#textDiv > *").css("font-size", function(i, value) {
        return parseInt(value) + 1.1;
    });
});
$("#fontMinusBtn").click(function (){
    $("#textDiv > *").css("font-size", function(i, value) {
        return parseInt(value) - 1.1;
    });
});
    $(".colorBlock").click(function() {
      //Get the background color of the clicked color block by using the this object
      var $backgroundColor = $(this).css("background-color");
      //Set the body's background-color to the received background-color
      $("body").css("background-color", $backgroundColor);
    });