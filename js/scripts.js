$(document).ready(function() {

  $(".btn").click(function(event) {
    var nameInput = $("#name").val();
    var addressInput = $("#address").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);


    event.preventDefault();

    $("#receipt").show();

  });

});
