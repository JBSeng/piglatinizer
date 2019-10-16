$( "document" ).ready(function() {
$("#button").click(function() {
    let message = $(".input").val();
    $(".output").text(message);
});

});