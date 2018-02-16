<html>
    <head>
        <title></title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
        <script src="jquery.js"></script>
        <script src="admin.js"></script>
    </head>
    <body>
        <div class="table-content">
            <form action="">
                <table class="inner-table">
                <!-- USE DATALIST INSTEAD OF SELECT-->
                    <tr>
                        <th><label for="material">Material</label></th>
                        <th><label for="subtype">Subtipo</label></th>
                        <th><label for="figure">Figura</label></th>
                        <th><label for="x1">Medida 1</label></th>
                        <th><label for="x2">Medida 2</label></th>
                        <th><label for="x3">Medida 3</label></th>
                        <th><label for="price">Precio</label></th>
                        <th><label for="quantity">Cantidad</label></th>
                    </tr>
                    <tr>
                        <td>
                            <select id="material" name=material>
                                <option disabled selected value> Tipo de Material</option>
                                <option value="acero">Acero</option>
                                <option value="nylamid">Nylamid</option>
                                <option value="aluminio">Aluminio</option>
                                <option value="bronce">Bronce</option>
                            </select>
                        </td>
                        <td>
                            <select name="subtype" id="subtype">
                                <option>-----------</option>
                            </select>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </form>  
        </div>
        <div class="material-container">
            <div class="materials-title">
                <h3>MATERIAL</h3>
            </div>
            <div class="shadow-text">
                <p>Comienza dando click en el simbolo "+"</p>
            </div>
            <div class="add-btn">
                <i class="fas fa-plus font-center"></i>
            </div>
            
    </body>
</html>