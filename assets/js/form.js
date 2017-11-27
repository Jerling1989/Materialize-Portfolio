
var form = document.getElementById("contact-form");
    form.onsubmit = function(){
      form.reset();
    }

$(document).ready(function() {
    $('#contact-form').submit(function() {

        $.ajax({
            url: 'script.php',
            method: 'post,'
            /* TODO: add data */
        }).done(function(response) {
            alert(response);
        });

        return false;
    });
});