$("#fontPlusBtn").click(function (){
    $("#textDiv > *").css("font-size", function(i, value) {
    window.localStorage.setItem('fontSize', parseInt(value) + 1.1);
        return parseInt(value) + 1.1;
    });
});
$("#fontMinusBtn").click(function (){
    $("#textDiv > *").css("font-size", function(i, value) {
    window.localStorage.setItem('fontSize', parseInt(value) - 1.1);
        return parseInt(value) - 1.1;
    });
});