function checkForm()
{
    var email = $('#email').val();
        
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    var email_valid   = pattern.test(email);
    
    var name_valid    = $('#name')   .val() != "";
    var subject_valid = $('#subject').val() != "";
    var message_valid = $('#message').val() != "";
    
    var form_valid = email_valid && name_valid && subject_valid && message_valid;
    
    if(form_valid)
    {
        $('#status').show();
        $('#status').removeClass("alert-danger");
        $('#status').addClass("alert-success");
        $('#status').html("Email inviata con successo, ti risponderemo al più presto!");
        $('#status').delay(3000).fadeOut("slow");
    }
    else
    {
        $('#status').show();
        $('#status').removeClass("alert-success");
        $('#status').addClass("alert-danger");
        $('#status').html("Campi non corretti, prova a ricontrollarli!");
        $('#status').delay(3000).fadeOut("slow");
    }
}