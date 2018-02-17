$( document ).ready(function() {
 
    $material = $("select[name='material']");
    $subtype = $("select[name='subtype']");
    $figure = $("select[figure]");
    $material.change(function(){
        if($(material).val()=="Acero"){
            $("select[name='subtype'] option").remove();
            $("<option value='1018'>1018</option>").appendTo($subtype);
            $("<option value='1045'>1045</option>").appendTo($subtype);
            $("<option value='tratado'>4140 Tratado</option>").appendTo($subtype);
            $("<option value='recocido'>4140 Recocido</option>").appendTo($subtype);
            $("<option value='d2'>D2</option>").appendTo($subtype);
            $("<option value='bh'>Barra Hueca</option>").appendTo($subtype);
            $("<option value='o1'>O-1</option>").appendTo($subtype);
        }
        if($(this).val()=="Aluminio"){
            $("select[name='subtype'] option").remove();
            $("<option disabled selected value>Tipo de Aluminio</option>").appendTo($subtype);
            $("<option>OP1</option>").appendTo($subtype);
            $("<option>OP2</option>").appendTo($subtype);
            $("<option>OP3</option>").appendTo($subtype);
        }
        if($(this).val()=="Nylamid"){
            $("select[name='subtype'] option").remove();
            $("<option disabled selected value>Color</option>").appendTo($subtype);
            $("<option>Blanco</option>").appendTo($subtype);
            $("<option>Negro</option>").appendTo($subtype);
            $("<option>Verde</option>").appendTo($subtype);
        }
        if($(this).val()=="Bronce"){
            $("select[name='subtype'] option").remove();
            $("<option disabled selected value>Tipo de Bronce</option>").appendTo($subtype);
            $("<option>Estandard</option>").appendTo($subtype);
            $("<option>SAE 62</option>").appendTo($subtype);
            $("<option>SAE 64</option>").appendTo($subtype);
            $("<option>SAE 68</option>").appendTo($subtype);
            $("<option>AMPCO 18</option>").appendTo($subtype);
        }
    });

    $subtype.change(function(){
        if($(material).val()=="Acero"){
            
        }
    });



});
