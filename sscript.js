


window.onload = initPage;
function initPage() {
    mudarpessoa();
    missión();
    datafooter()
}




window.onmousemove = function (e) {
    if (e.pageY < 5) {
        alert("Você tem certeza que quer sair? ")
    }
}


window.onmousemove = function (er) {
    if (er.pageY < 5) {
        alert("Você tem certeza que quer sair? ")
    }
}


function menuresp() {

    document.getElementById("sliding-header-menu-outer").style.right = "0";

}

function fechamenuresp() {

    document.getElementById("sliding-header-menu-outer").style.right = "-320px";

}





/**Sobre Nós**/



var visiontext = "- HTML </br> - Css  </br>- JavaScript  </br> - Excel</br>- MySQL";
var valuetext = "- HTML + Css   </br>- JavaScript + Jquery + Ajax + Json  </br>- MySQL</br>- Inglês (9 anos)</br>";
var colortrue = "#2A2D34";
var colorfalse = "#646872";
var fonttrue = "bold";
var fontfalse = "normal";







function exeplificacor(elemento, cor) {
    document.getElementById(elemento).style['backgroundColor'] = cor;

}


function exeplificafont(elemento, fonte) {
    document.getElementById(elemento).style['font-weight'] = fonte;

}


function missión() {
    var missiontext = "  Meu nome é Gustavo Ferreira, tenho 16 anos e estudo por conta própria para ser um desenvolvedor web.Estou cursando o segundo ano do Ensino Médio e tenho fluência em inglês . </br></br> Já prestei consultoria para a startup CertBest na parte de front-end, porém acredito que estou muito preparado para enfrentar novos desafios.Possuo HTML, Css, Javascript avançados e estou totalmente mergulhado em MySQL, planejo até o fim do ano dominar Node.Js e banco de dados SQL / Oracle.Desenvolvi inteiramente esse portfólio utilizando HTML, Css e JavaScript como podem ver. </br></br>Para o futuro, pretendo me graduar em TI em uma universidade no exterior e quem sabe trabalhar fora .No meu tempo livre gosto muito de  jogar videogames, tocar violão e também sou investidor de Swing Trade na bolsa de valores.";

    
    //document.getElementById("mission").style['background-color'] = " #2A2D34";
    //document.getElementById("vision").style['background-color'] = " #646872";
    //document.getElementById("value").style['background-color'] = " #646872";


    exeplificacor("mission", colortrue);
    exeplificacor("vision", colorfalse);
    exeplificacor("value", colorfalse);


    exeplificafont("mission", fonttrue);
    exeplificafont("vision", fontfalse);
    exeplificafont("value", fontfalse);


    


    //document.getElementById("mission").style['font-weight'] = " bold";
    //document.getElementById("vision").style['font-weight'] = "normal";
    //document.getElementById("value").style['font-weight'] = "normal";

    document.getElementById("box-text").style['font-size'] = "16px";
    document.getElementById("box-text").innerHTML = missiontext;
 


}

function vista() {


    //document.getElementById("vision").style['background-color'] = " #2A2D34";
    //document.getElementById("mission").style['background-color'] = " #646872";
    //document.getElementById("value").style['background-color'] = " #646872";


    //document.getElementById("vision").style['font-weight'] = "bold";
    //document.getElementById("mission").style['font-weight'] = "normal";
    //document.getElementById("value").style['font-weight'] = "normal";




    exeplificacor("mission", colorfalse);
    exeplificacor("vision", colortrue);
    exeplificacor("value", colorfalse);


    exeplificafont("mission", fontfalse);
    exeplificafont("vision", fonttrue);
    exeplificafont("value", fontfalse);



    document.getElementById("box-text").innerHTML = visiontext; 
    document.getElementById("box-text").style['font-size'] = "16px";
}

function valu() {


    //document.getElementById("value").style['background-color'] = " #2A2D34";
    //document.getElementById("mission").style['background-color'] = " #646872";
    //document.getElementById("vision").style['background-color'] = " #646872";

    //document.getElementById("value").style['font-weight'] = "bold";
    //document.getElementById("mission").style['font-weight'] = "normal";
    //document.getElementById("vision").style['font-weight'] = "normal";



    exeplificacor("mission", colorfalse)
    exeplificacor("vision", colorfalse)
    exeplificacor("value", colortrue)


    exeplificafont("mission", fontfalse)
    exeplificafont("vision", fontfalse)
    exeplificafont("value", fonttrue)


    document.getElementById("box-text").innerHTML = valuetext; 
    document.getElementById("box-text").style['font-size'] = "16px";

}



                            //*Barra de Servicos*//






var our_services = [


    
    {
        'title': '<a href = "https://www.linkedin.com/in/fl%C3%A1vioantoniosoaresdesousa/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bj0PacQqnTSGow13XcV%2B2aw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-recommendation_details_profile">Flávio Antônio:</a>',
        'text': 'Tem um grande potencial para se envolver com novas tecnologias associando o empenho, criatividade e sobretudo a capacidade de absorver novos conhecimentos! Tem um futuro promissor!'
    },


    {
        'title': '<a href = "https://www.linkedin.com/in/certbest/" style="text-decoration:solid"> Fabio Sousa: </a>',
        'text': 'O Gustavo é um jovem altamente recomendado. Uma pessoa fora da curva.Com 16 anos resolveu aprender a programar e se empenhou e aprendeu tudo sozinho.Ta aí alguém que recomendo altamente!'
    },


    {
        'title': '<a href = "https://www.linkedin.com/in/olinda-moraes/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bj0PacQqnTSGow13XcV%2B2aw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-recommendation_details_profile" style="text-decoration:"> Olinda Suely: </a>',
        'text': 'Gustavo is a person dedicated to his studies with focus and determination. Who started to analyze which careers he could follow, be interested in the IT area and dedicate a lot of time to improve his skills and learn about the available technologies. He has done a great job with his personal page and other projects he has developed. He will add knowledge and bring results to the team he is working on.'
    },


    



];


var servico_atual = 0;



function mudarpessoa() {




    if (servico_atual == 0) {

        var servico_anterior = our_services.length - 1;

    }
    else {
        var servico_anterior = servico_atual - 1;
    }


    document.getElementById("service-title").innerHTML = our_services[servico_anterior].title;
    document.getElementById("service-text").innerHTML = our_services[servico_anterior].text;
    servico_atual = servico_anterior;

}











                               //Data//



function datafooter() {

    var ano_atual = new Date;
    ano_atual = ano_atual.getFullYear();

    document.getElementById('current_year').innerHTML = ano_atual;


}




                    //Mapa


//API Key: AIzaSyDDg4YXC7zmj25RU5YdwCRxoF2H1Sx2p_g