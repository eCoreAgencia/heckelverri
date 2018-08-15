
$(document).ready(function(){
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return false;
    }
    
    
    function checkCookie() {
        var newsletter = getCookie("newsletter");
        console.log(newsletter);
        if (!newsletter) {
            $('body').addClass('modal-active');
            newsletter = "ok";
            setCookie("newsletter", newsletter, 365);
        } 
    }

    checkCookie();
})


function masterDataNewsletter(){
    var jsonSaveDadosUser = {
        "name": $("#cl_firstName").val(),
        "email": $("#cl_email").val()
    };

    var storename = 'heckelverri';
    var dataEntity = 'CC';

    var urlSaveDadosUser = 'http://api.vtexcrm.com.br/'+storename+'/dataentities/'+dataEntity+'/documents/';

    $.ajax({
        headers: {
            'Accept': 'application/vnd.vtex.ds.v10+json',
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(jsonSaveDadosUser),
        type: 'PATCH',
        url: urlSaveDadosUser,
        success: function (data) {
          console.log(data);
          $("div#messageSuccess").removeClass("hide");
          $("#cl_firstName").val("");
          $("#cl_email").val("");
          alert("E-mail cadastrado com sucesso!");
          $('body').removeClass('modal-active');
        },
        error: function (data) {
          console.log(data);
          alert("Houve um erro ao cadastrar seu e-mail. Tente novamente mais tarde");
        }
    });
}
