$( document ).ready(function() {
 
    $material = $("select[name='material']");
    $subtype = $("select[name='subtype']");
    
    $material.change(function(){
        if($(material).val()=="acero"){
            alert("Acero");
            $("select[name='subtype'] option").remove();
            $("<option>1018</option>").appendTo($subtype);
            $("<option>1045</option>").appendTo($subtype);
            $("<option>Tratado</option>").appendTo($subtype);
            $("<option>Recocido</option>").appendTo($subtype);
            $("<option>D2</option>").appendTo($subtype);
            $("<option>Barra Hueca</option>").appendTo($subtype);
            $("<option>O-1</option>").appendTo($subtype);
        }
        if($(this).val()=="aluminio"){
            $("select[name='subtype'] option").remove();
            $("<option>Blanco</option>").appendTo($subtype);
            $("<option>Negro</option>").appendTo($subtype);
            $("<option>Verde</option>").appendTo($subtype);
        }
    });
});
