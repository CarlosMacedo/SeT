/** 
 * Menu de contexto para os conjuntos 
 */

function menuContexto(){  
    $.contextMenu({
        selector: '.conjunto', 
        callback: function(key, options, opt,e) {
            chave1 = $(this).attr("id");
            if (key == "cardinalidade") {
                cardinalidadeClick();
            } else if (key == "conjuntoPotencia") {
                conjuntoPotenciaClick();
            } else if (key == "visualizarVenn"){
                diagramaVennClick();
            }
        },
        items: {
            "cardinalidade": {name: "Cardinalidade", icon: "cardinalidade"},
            "conjuntoPotencia": {name: "Conjunto Potência", icon: "conjPotencia"},
            "visualizarVenn" : {name: "Diagrama de Venn", icon: "venn"},
            "sep1": "---------"
        }
        
    });

    
}