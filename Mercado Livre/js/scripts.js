
// Objeto para pegar os preços e as fotos das camisetas

var camisetas = {
    'branca': {

        'gola_v': {
            'sem_estampa': {
                'preco_unit': 5.12,
                'foto': 'v-white.jpg'
            },
            'com_estampa': {
                'preco_unit': 8.95,
                'foto': 'v-white-personalized.jpg'
            }
        },

        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 4.99,
                'foto': 'normal-white.jpg'
            },
            'com_estampa': {
                'preco_unit': 8.77,
                'foto': 'normal-white-personalized.jpg'
            }
        }
    },

    'colorida': {
        'gola_v': {
            'sem_estampa': {
                'preco_unit': 6.04,
                'foto': 'v-color.jpg'
            },
            'com_estampa': {
                'preco_unit': 9.47,
                'foto': 'v-color-personalized.png'
            }
        },

        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 5.35,
                'foto': 'normal-color.jpg'
            },
            'com_estampa': {
                'preco_unit': 9.28,
                'foto': 'normal-color-personalized.jpg'
            }
        }
    }
}


// parâmetros da pesquisa

var parametros_pesquisa = {
    "quantidade": 1,
    "cor": "branca",
    "gola": "gola_v",
    "qualidade": "q150",
    "estampa": "sem_estampa",

}





// Resolução do desafio:

window.onload = (event) => {

    //function atualizar_orcamento(parametros) {

    //    $(".refresh-loader").show();

    //    var preco_unit = camisetas[parametros.cor][parametros.gola][parametros.estampa].preco_unit;
    //    var foto = "img/" + camisetas[parametros.cor][parametros.gola][parametros.estampa].foto;
    //    var valor_total = quantidade * preco_unit;


    //    alert(valor_total);

    //}




    function atualizar_orcamento(parametros) {
        $(".refresh-loader").show();

        var quantidade = parametros.quantidade;
        var preco_unit = camisetas[parametros.cor][parametros.gola][parametros.estampa].preco_unit;
        var foto = "img/" + camisetas[parametros.cor][parametros.gola][parametros.estampa].foto;

        var valor_total = quantidade * preco_unit;
        var valor_total2 = quantidade * preco_unit;




        if (parametros.qualidade == "q190") {
            valor_total *= 1.12
        }



        if (quantidade >= 1000) {
            valor_total *= 0.85;
        } else if (quantidade >= 500) {
            valor_total *= 0.90;
        } else if (quantidade < 100) {
            valor_total *= 0.95;
        }



        //Jogar no Modal

        //var id_gola = "#" + parametros.gola
        //$("#result_gola").html($(id_gola).html());


        var id_gola = "option[value='" + parametros.gola + "']";
        $("#result_gola").html($(id_gola).html());

        var id_estampa = "option[value='" + parametros.estampa + "']";
        $("#result_estampa").html($(id_estampa).html());



        var id_qualidade = "option[value='" + parametros.qualidade + "']";
        $("#result_qualidade").html($(id_qualidade).html());


        var id_cor = "option[value='" + parametros.cor + "']";
        $("#result_cor").html($(id_cor).html());

        var id_embalagem = "option[value='" + parametros.embalagem + "']"
        $("#result_embalagem").html($(id_embalagem).html());


        var id_quantidade = "option[value='" + parametros.quantidade + "']";
        $("#result_quantidade").html($(id_quantidade).html());

        $("#valor-total").html(valor_total2.toLocaleString("pt-br", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
        $("#valor-total2").html(valor_total2.toLocaleString("pt-br", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
        $("#foto-produto").attr("src", foto);

        console.log("parametros: ", parametros);
        console.log("valor total: ", valor_total);
        $(".refresh-loader").hide();

    };



    $("select").change(function () {


        var parametro_select = $(this).attr("id");
        parametros_pesquisa[parametro_select] = $(this).val();
        atualizar_orcamento(parametros_pesquisa);


    });


    $("#quantidade").change(function () {

        var parametro_input = $(this).attr("id");
        parametros_pesquisa[parametro_input] = $(this).val();
        atualizar_orcamento(parametros_pesquisa);

    });






    atualizar_orcamento(parametros_pesquisa);
    atualizar_campos(parametros_pesquisa);





    function atualizar_campos(parametros) {


        //$("#cor").children().removeClass("selected");
        //var id_cor = "#" + parametros.cor
        //$(id_cor).addClass("selected");


        //$("#gola").children().removeClass("selected");
        //var id_gola = "#" + parametros.gola
        //$(id_gola).addClass("selected");


        //$("#qualidade").children().removeClass("selected");
        //var id_qualidade = "#" + parametros.qualidade
        //$(id_qualidade).addClass("selected");




        $("#cor").val(parametros.cor);

        $("#gola").val(parametros.gola);

        $("#qualidade").val(parametros.qualidade);
        $("#estampa").val(parametros.estampa);



        $("#quantidade").val(parametros.quantidade);

    }



    $(".option-filter div").click(function () {

        $(this).parent().children("div").removeClass("selected");
        $(this).addClass("selected");


        var categoria = $(this).parent().attr("id");
        parametros_pesquisa[categoria] = $(this).attr("id");
        atualizar_orcamento(parametros_pesquisa);


    });


}