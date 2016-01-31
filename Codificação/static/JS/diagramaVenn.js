

function diagramaVennClick(){   
    
    $("#venn").dialog({
        modal: true,
        title: "Diagrama de Venn",
        resizable: true,
        width: 820,
        open: function( event, ui ) {criaVenn();clickArea();},
        close: function( event, ui ) {deletarVenn();}
    });
    
    
}
function deletarVenn(){
    $("#venn > *").remove();
}

function criaVenn(){  
    $("#venn").append(decidirText());
}

function decidirQntCirculos(){
    return ;
}

function clickArea(){
    $(".vennArea").attr("data-toggle", "popover");
    
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        content: function (){
            //var classe = $("#"+chave1).attr('class');
            var elementos = conjuntos[chave1];
            return "{"+elementos+"}";
        },
        title: "Elementos",
        trigger: "click"
    });
}


























function decidirText(){
    var diagramas = {};
    diagramas[1] = "<center><svg width='640' height='480' xmlns='http://www.w3.org/2000/svg'> "+
 "<!-- Created with SVG-edit - http://svg-edit.googlecode.com/ --> "+
 "<g> "+
  "<title>Layer 1</title> "+
  "<circle class = 'vennArea' fill='#ffffff' stroke='#000000' stroke-width='2' cx='320' cy='240' r='175.08176' id='svg_A'/> "+
 "</g> "+
"</svg></center>";

    diagramas[2] = "<center><svg width='640' height='480' xmlns='http://www.w3.org/2000/svg'>"+
 "<!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->"+
 "<g>"+
  "<title>Layer 1</title>"+
  "<circle id='svg_2' fill='#ffffff' stroke='#000000' stroke-width='2' cx='405.5' cy='242' r='175.08176'/>"+
  "<circle id='svg_1' fill='#ffffff' stroke='#000000' stroke-width='2' cx='237.5' cy='240' r='175.08176'/>"+
 " <circle id='svg_0' fill='none' stroke='#000000' stroke-width='2' cx='405.5' cy='241' r='175.08176'/>"+
 "<path id='interseccao' d='m320,393l22,-14l30,-28l27,-44l10,-47l-1,-57l-17,-45l-26,-37l-22,-19l-23,-15l-44,36l-27,36l-13,42l-5,47l8,46l16,40l22,29l43,30z' stroke-linecap='null' stroke-linejoin='null' stroke-dasharray='null' stroke-width='0' stroke='#000000' fill='none'/>"+
 "<path id='svg_A' d='m319,396l-64,16l-59,-1l-52,-23l-49,-49l-30,-79l6,-76l32,-54l51,-43l68,-20l57,4l42,14l-36,25l-35,39l-18,52l-4,52l9,45l20,42l25,30l37,26z' stroke-linecap='null' stroke-linejoin='null' stroke-dasharray='null' stroke-width='0' stroke='#000000' fill='none'/>"+
 "<path id='svg_B' transform='rotate(-180 452,240.5) '  d='m578,397l-64,16l-59,-1l-52,-23l-49,-49l-30,-79l6,-76l32,-54l51,-43l68,-20l57,4l42,14l-36,25l-35,39l-18,52l-4,52l9,45l20,42l25,30l37,26z' stroke-linecap='null' stroke-linejoin='null' stroke-dasharray='null' stroke-width='0' stroke='#000000' fill='none'/>"+
 "</g>"+
"</svg></center>";
    diagramas[3] = "<center><svg width='640' height='480' xmlns='http://www.w3.org/2000/svg'>"+
 "<!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->"+
 "<g>"+
  "<title>Layer 1</title>"+
  "<circle id='svg_13' r='133.79462' cy='172' cx='237' stroke-linecap='null' stroke-linejoin='null' stroke-dasharray='null' stroke-width='2' stroke='#000000' fill='none'/>"+
  "<circle id='svg_14' r='133.79462' cy='168' cx='390' stroke-linecap='null' stroke-linejoin='null' stroke-dasharray='null' stroke-width='2' stroke='#000000' fill='none'/>"+
  "<circle id='svg_15' r='133.79462' cy='310' cx='320' stroke-linecap='null' stroke-linejoin='null' stroke-dasharray='null' stroke-width='2' stroke='#000000' fill='none'/>"+
 "</g>"+
"</svg></center>";
    
    return diagramas[1]; 
}

