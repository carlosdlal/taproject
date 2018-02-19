$( document ).ready(function() {
 
    $material = $("select[name='material']");
    $subtype = $("select[name='subtype']");
    $figure = $("select[name='figure']");
    $x2 =$('#x2').val();
    $x3 =$('#x3').val();
    $material.change(function(){
        if($(material).val()=="Acero"){
            $("select[name='subtype'] option").remove();
            $("<option disabled selected value> Tipo de Acero</option>").appendTo($subtype);
            $("<option value='1018'>1018</option>").appendTo($subtype);
            $("<option value='1045'>1045</option>").appendTo($subtype);
            $("<option value='tratado'>4140 Tratado</option>").appendTo($subtype);
            $("<option value='recocido'>4140 Recocido</option>").appendTo($subtype);
            $("<option value='d2'>D2</option>").appendTo($subtype);
            $("<option value='bh'>Barra Hueca</option>").appendTo($subtype);
            $("<option value='o1'>O-1</option>").appendTo($subtype);
            $("<option value='12L14'>12L14</option>").appendTo($subtype);
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
        $( ".price" ).hide();
        if($(subtype).val()!="bh" && $(material).val()=="Acero"){
            $( ".figure" ).show();
            $("select[name='figure'] option").remove();
            $("<option disabled selected value>Forma</option>").appendTo($figure);
            $("<option value='round'>Redondo</option>").appendTo($figure);
            $("<option value='plate'>Solera</option>").appendTo($figure);
            $("<option value='square'>Cuadrado</option>").appendTo($figure);
            if($(subtype).val()=="1018"||$(subtype).val()=="12L14"){
                $("<option value='hex'>Hexagonal</option>").appendTo($figure);
            }
        }
        else{
            $( ".price" ).show();
            $( ".figure" ).hide();
            $( ".x1" ).show();
            $( ".x2" ).show();
            $( ".x3" ).show();
            $("#lblx1").empty();
            $("#lblx1").append("DIAMETRO INTERNO");
            $("#lblx2").empty();
            $("#lblx2").append("DIAMETRO EXTERNO");
            $("#lblx3").empty();
            $("#lblx3").append("LARGO");
        }
    });

    $figure.change(function(){
        $( ".price" ).show();
        if($(figure).val()=="round"){
            $( ".x1" ).show();
            $( ".x2" ).show();
            $( ".x3" ).hide();
            $("#lblx1").empty();
            $("#lblx1").append("DIAMETRO");
            $("#lblx2").empty();
            $("#lblx2").append("LARGO");
        }
        if($(figure).val()=="plate"){
            $( ".x1" ).show();
            $( ".x2" ).show();
            $( ".x3" ).show();
            $("#lblx1").empty();
            $("#lblx1").append("ESPESOR");
            $("#lblx2").empty();
            $("#lblx2").append("ANCHO");
            $("#lblx3").empty();
            $("#lblx3").append("LARGO");
        }
        if($(figure).val()=="square" || $(figure).val()=="hex"){
            $( ".x1" ).show();
            $( ".x2" ).show();
            $( ".x3" ).hide();
            $("#lblx1").empty();
            $("#lblx1").append("LADO");
            $("#lblx2").empty();
            $("#lblx2").append("LARGO");
        }
        if($(figure).val()=="buje"){
            $( ".x1" ).show();
            $( ".x2" ).show();
            $( ".x3" ).show();
            $("#lblx1").empty();
            $("#lblx1").append("DIAMETRO INTERNO");
            $("#lblx2").empty();
            $("#lblx2").append("DIAMETRO EXTERNO");
            $("#lblx3").empty();
            $("#lblx3").append("LARGO");
        }

    });
    $('#x1-btn').click(function () {
        $xvalue=$('#x1').val()*39.370;
        $( "#in-inches" ).show();
        $('#x1-aux').val($xvalue +"Pulgadas");
    });
    $('#x2-btn').click(function () {
        if($('#x2').val()!=""){
            $xvalue=$('#x2').val()*39.370;
            $( "#in-inches" ).show();
            $('#x2-aux').val($xvalue + "Pulgadas");
        }
        else{
            $( "#in-inches" ).hide();
        }
    });



});
