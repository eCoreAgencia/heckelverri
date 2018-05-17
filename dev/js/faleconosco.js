function FaleConosco(){
    var jsonSaveDadosUser = {
        "nome": $("#cl_nome").val(),
        "email": $("#cl_email").val(),
        "tel": $("#cl_tel").val(),
        "pedido": $("#cl_pedido").val(),
        "type": $("#cl_type").val(),
        "description": $("#cl_description").val()
    };

    var storename = 'heckelverri';
    var dataEntity = 'FC';

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
          $("#cl_nome").val("");
          $("#cl_email").val("");
          $("#cl_tel").val("");
          $("#cl_pedido").val("");
          $("#cl_type").val("");
          $("#cl_description").val("");
          alert("Mensagem Enviada com sucesso!");
        },
        error: function (data) {
          console.log(data);
          alert("Houve um erro ao enviar a mensagem. Tente novamente mais tarde");
        }
    });
}
