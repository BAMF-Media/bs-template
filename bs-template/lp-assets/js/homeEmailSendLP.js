$(document).ready(function() {

    $("#participation_form2").submit(function() {
        $.ajax({
            type: "POST",
            url: "homeEmailSendLP.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Thanks for the request :) We will get touch with us you in the nearest time");
            $("#participation_form2").trigger("reset");
        });
        return false;
    });

});