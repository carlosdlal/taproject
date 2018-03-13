$( document ).ready(function() {
    //**********ADDING ITEM START***************
    //ALL THIS IS FOR ADDING AN ITEM

    $material = $("select[name='material']");
    $subtype = $("select[name='subtype']");
    $figure = $("select[name='figure']");
    $value1="";
    $value2="";
    $value3="";
    $weight=0.0;
    $price="";
    $material.change(function(){
        $('#weight').val("");
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
            $("<option value='6061-T6'>6061 T6</option>").appendTo($subtype);
            $("<option value='1100'>1100</option>").appendTo($subtype);
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
        $('#weight').val("");
        $( ".price" ).hide();
        $( ".quant" ).hide();
        $("#lbl3x1").empty();
        $("#lbl3x1").append("Pulgadas");
        $("#measure3x1").val("inches");
        $("#lbl3x2").empty();
        $("#lbl3x2").append("Metros");
        $("#measure3x2").val("meters");
        if($(material).val()=="Acero"){
            if($(subtype).val()!="bh"){
                $( ".figure" ).show();
                $("select[name='figure'] option").remove();
                $("<option disabled selected value>Forma</option>").appendTo($figure);
                $("<option value='round'>Redondo</option>").appendTo($figure);
                $("<option value='plate'>Solera</option>").appendTo($figure);
                $("<option value='square'>Cuadrado</option>").appendTo($figure);
                if($(subtype).val()=="1018"||$(subtype).val()=="12L14"){
                    $("<option value='hex'>Hexagonal</option>").appendTo($figure);
                }
                $("#lbl1x1").empty();
                $("#lbl1x1").append("Pulgadas");
                $("#measure1x1").val("inches");
                $("#lbl1x2").empty();
                $(".m1-table .m2").hide();
                $("#lbl2x1").empty();
                $("#lbl2x1").append("Pulgadas");
                $("#measure2x1").val("inches");
                $("#lbl2x2").empty();
                $("#lbl2x2").append("Metros");
                $("#measure2x2").val("meters");
            }
            else if($(subtype).val()=="bh"){
                $( ".price" ).show();
                $( ".quant" ).show();
                $( ".figure" ).hide();
                $( ".x1" ).show();
                $( ".x2" ).show();
                $( ".x3" ).show();
                $(".m1-table .m2").show();
                $("#lblx1").empty();
                $("#lblx1").append("Diametro Externo");
                $("#lblx2").empty();
                $("#lblx2").append("Diametro Interno");
                $("#lblx3").empty();
                $("#lblx3").append("Largo");
                $("#lbl1x1").empty();
                $("#lbl1x1").append("Milimetros");
                $("#measure1x1").val("mm");
                $("#lbl1x2").empty();
                $("#lbl1x2").append("Pulgadas");
                $("#measure1x2").val("inches");
                $("#lbl2x1").empty();
                $("#lbl2x1").append("Milimetros");
                $("#measure2x1").val("mm");
                $("#lbl2x2").empty();
                $("#lbl2x2").append("Pulgadas");
                $("#measure2x2").val("inches");
            }
        }
        if($(material).val()=="Bronce"){
            $( ".figure" ).show();
            $("select[name='figure'] option").remove();
            $("<option disabled selected value>Forma</option>").appendTo($figure);
            $("<option value='round'>Redondo</option>").appendTo($figure);
            $("<option value='buje'>Buje</option>").appendTo($figure);
            $("#lbl1x1").empty();
            $("#lbl1x1").empty();
            $("#lbl1x1").append("Pulgadas");
            $("#measure1x1").val("inches");
            $("#lbl1x2").empty();
            $(".m1-table .m2").hide();
            $("#lbl2x1").empty();
            $("#lbl2x1").append("Pulgadas");
            $("#measure2x1").val("inches");
            $("#lbl2x2").empty();
            $("#lbl2x2").append("Metros");
            $("#measure2x2").val("meters");
        }
        if($(material).val()=="Aluminio" && $(subtype).val()!=""){
            $( ".figure" ).show();
            $("select[name='figure'] option").remove();
            $("<option disabled selected value>Forma</option>").appendTo($figure);
            $("<option value='round'>Redondo</option>").appendTo($figure);
            $("<option value='square'>Cuadrado</option>").appendTo($figure);
            $("<option value='plate'>Solera</option>").appendTo($figure);

            $("#lbl1x1").empty();
            $("#lbl1x1").append("Pulgadas");
            $("#measure1x1").val("inches");
            $("#lbl1x2").empty();
            $(".m1-table .m2").hide();
            $("#lbl2x1").empty();
            $("#lbl2x1").append("Pulgadas");
            $("#measure2x1").val("inches");
            $("#lbl2x2").empty();
            $("#lbl2x2").append("Metros");
            $("#measure2x2").val("meters");
        }
    });
    $figure.change(function(){
        $('#weight').val("");
        $( ".price" ).show();
        $( ".quant" ).show();
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
            if($(material).val()=="Bronce"){
                $(".m1-table .m2").show();
                $("#lblx1").empty();
                $("#lblx1").append("Diametro Externo");
                $("#lblx2").empty();
                $("#lblx2").append("Diametro Interno");
                $("#lblx3").empty();
                $("#lblx3").append("Largo");
                $("#lbl1x1").empty();
                $("#lbl1x1").append("Milimetros");
                $("#measure1x1").val("mm");
                $("#lbl1x2").empty();
                $("#lbl1x2").append("Pulgadas");
                $("#measure1x2").val("inches");
                $("#lbl2x1").empty();
                $("#lbl2x1").append("Milimetros");
                $("#measure2x1").val("mm");
                $("#lbl2x2").empty();
                $("#lbl2x2").append("Pulgadas");
                $("#measure2x2").val("inches");
            }
        }

    });
    $("#x1, #x2, #x3 , .measures, #price").change(function() {
        $('#weight').val("");
        //Materiales Redondos, Cuadrados y Hexagonales
        if($('#x1').val()!="" && $('#x2').val()!="" && $('#x3').val()==""){
            //Aceros
            if($(material).val() =="Acero"){
                if($(figure).val()=="round"){
                    if($('input[name=measures2]:checked').val()=="meters"){
                        $value1=$('#x1').val();
                        $value2=$('#x2').val();
                        $weight=((Math.pow($value1,2)*4)*$value2);
                        $('#weight').val($weight);
                    }
                    else if($('input[name=measures2]:checked').val()=="inches"){
                        $value1=$('#x1').val();
                        $value2=$('#x2').val()*0.0254;
                        $weight=($value1*$value1*4*$value2);
                        $('#weight').val($weight);
                    }
                }
                if($(figure).val()=="square"){
                    if($('input[name=measures2]:checked').val()=="meters"){
                        $value1=$('#x1').val();
                        $value2=$('#x2').val()/0.0254;
                        $weight=$value1*$value1*$value2*.13;
                        $('#weight').val($weight);
                    }
                    else if($('input[name=measures2]:checked').val()=="inches"){
                        $value1=$('#x1').val();
                        $value2=$('#x2').val();
                        $weight=$value1*$value1*$value2*.13;
                        $('#weight').val($weight);
                    }
                }
                if($(figure).val()=="hex"){
                    if($('input[name=measures2]:checked').val()=="meters"){
                        $value1=$('#x1').val();
                        $value2=$('#x2').val()/0.0254;
                        $weight=$value1*$value1*$value2*4.5;
                        $('#weight').val($weight);
                    }
                    else if($('input[name=measures2]:checked').val()=="inches"){
                        $value1=$('#x1').val();
                        $value2=$('#x2').val();
                        $weight=$value1*$value1*$value2*4.5;
                        $('#weight').val($weight);
                    }
                }
            }
            //Bronces
            if($(material).val() =="Bronce"){
                if($(figure).val()=="round"){
                    if($('input[name=measures2]:checked').val()=="meters"){
                        $value1=$('#x1').val();
                        $value2=$('#x2').val();
                        $weight=(((Math.pow($value1,2)*1.7)*$value2)/14);
                        $('#weight').val($weight);
                    }
                    else if($('input[name=measures2]:checked').val()=="inches"){
                        $value1=$('#x1').val();
                        $value2=$('#x2').val()*0.0254;
                        $weight=(((Math.pow($value1,2)*1.7)*$value2)/14);
                        $('#weight').val($weight);
                    }
                }
            }
            //Aluminio
            if($(material).val() =="Aluminio"){
                if($(figure).val()=="round"){
                    if($('input[name=measures2]:checked').val()=="meters"){
                        $value1=$('#x1').val();
                        $value2=$('#x2').val();
                        $weight=(((Math.pow($value1,2)*.035)*$value2));
                        $('#weight').val($weight);
                    }
                    else if($('input[name=measures2]:checked').val()=="inches"){
                        $value1=$('#x1').val();
                        $value2=$('#x2').val()*0.0254;
                        $weight=(((Math.pow($value1,2)*.035)*$value2));
                        $('#weight').val($weight);
                    }
                }
                if($(figure).val()=="square"){
                    if($('input[name=measures2]:checked').val()=="meters"){
                        $value1=$('#x1').val();
                        $value2=$('#x2').val()/0.0254;
                        $weight=$value1*$value1*$value2*.048;
                        $('#weight').val($weight);
                    }
                    else if($('input[name=measures2]:checked').val()=="inches"){
                        $value1=$('#x1').val();
                        $value2=$('#x2').val();
                        $weight=$value1*$value1*$value2*.048;
                        $('#weight').val($weight);
                    }
                }
            }
        }
        //Materiales Soleras, Barra Huecas, Bujes
        if($('#x1').val()!="" && $('#x2').val()!="" && $('#x3').val()!=""){
            //Aceros
            if($(material).val() =="Acero"){
                //Aceros Soleras
                if($(figure).val()=="plate"){
                    if($('input[name=measures2]:checked').val()=="meters"){
                        $value2=$('#x2').val()/0.0254;
                    }
                    else if($('input[name=measures2]:checked').val()=="inches"){
                        $value2=$('#x2').val();
                    }
                    if($('input[name=measures3]:checked').val()=="meters"){
                        $value3=$('#x3').val()/0.0254;

                    }
                    else if($('input[name=measures3]:checked').val()=="inches"){
                        $value3=$('#x3').val();
                    }
                    $value1=$('#x1').val();
                    $weight=($value1*$value2*$value3*.13);
                    $('#weight').val($weight);
                }
                //Aceros Barras Huecas
                if($(subtype).val()=="bh"){
                    if($('input[name=measures1]:checked').val()=="mm"){
                        $value1=$('#x1').val()/25.4;
                    }
                    else if($('input[name=measures1]:checked').val()=="inches"){
                        $value1=$('#x1').val();
                    }
                    if($('input[name=measures2]:checked').val()=="mm"){
                        $value2=$('#x2').val()/25.4;
                    }
                    else if($('input[name=measures2]:checked').val()=="inches"){
                        $value2=$('#x2').val();
                    }
                    if($('input[name=measures3]:checked').val()=="meters"){
                        $value3=$('#x3').val();
                    }
                    else if($('input[name=measures3]:checked').val()=="inches"){
                        $value3=$('#x3').val()*0.0254;
                    }
                    $('#weight').val($weight);
                    $exterior=$value1*$value1*4*$value3;
                    $interior=$value2*$value2*4*$value3;
                    alert( $exterior + "-"+ $value1 + "-"+ $value2 + "-"+ $value3 + "\n");
                    alert( $interior + "-"+ $value1 + "-"+ $value2 + "-"+ $value3 + "\n");
                    $weight=($exterior-$interior);
                    
                    $('#weight').val($weight);
                }    
            }
            if($(material).val() =="Aluminio"){
                if($(figure).val()=="plate"){
                    if($('input[name=measures2]:checked').val()=="meters"){
                        $value2=$('#x2').val()/0.0254;
                    }
                    else if($('input[name=measures2]:checked').val()=="inches"){
                        $value2=$('#x2').val();
                    }
                    if($('input[name=measures3]:checked').val()=="meters"){
                        $value3=$('#x3').val()/0.0254;

                    }
                    else if($('input[name=measures3]:checked').val()=="inches"){
                        $value3=$('#x3').val();
                    }
                    $value1=$('#x1').val();
                    $weight=$value1*$value2*$value3*.048;
                    $('#weight').val($weight);
                }
            }

        }
    });
    $("#price , #quantity").change(function() {
        $price=$('#price').val() *$('#weight').val()* $('#quantity').val();
        $('#totalQ').val($price);
    });
    //--------------ADDING ITEM END----------------------
});

