function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;

    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json`,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);

            $("#titulo_cep").html("CEP " + response.cep);

            $(".cep").show();
            $(".barra-progresso").hide();
            //document.getElementById("logradouro").innerHTML = response.logradouro; normal é assim
            // $("#logradouro").html(response.logradouro);//usando JQuery
        }
    })
}
$(function (){
    $(".cep").hide();
    $(".barra-progresso").hide();
})
