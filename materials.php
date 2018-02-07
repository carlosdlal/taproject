<html>
    <head>
        <title></title>
        <link rel="stylesheet" type="text/css" href="styles.css">
        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    </head>
    <body>
        <table class="material-table">
            <tr>
                <th>Material</th>
                <th>Subtipo</th>
                <th>Figura</th>
                <th>Medida</th>
                <th>Precios s/iva</th>
                <th>Editar</th>
            </tr>
            <tr>
                <td>Acero</td>
                <td>1018</td>
                <td>Solera</td>
                <td>1/4"</td>
                <td>42.50</td>
                <td class="items-logo" id="edit-trigger"><i class="fas fa-edit"></i></td>
            </tr>
        </table>
        <div class="edit-container" id="edit-modal">
            <h2>Modifica los datos que deseeas actualizar</h2>
            <table >
                <tr>
                    <td>Acero</td>
                    <td>1018</td>
                    <td>Solera</td>
                    <td>1/4"</td>
                    <td>42.50</td>
                </tr>
            </table>
            <span class="edit-save-btn" id="close-modal"><i class="save-icon fas fa-save"></i></span>
        </div>
        <script>
            var modal = document.getElementById('edit-modal');
            var btn = document.getElementById("edit-trigger");
            var span = document.getElementsByClassName("close-modal")[0];
            btn.onclick = function() {
                modal.style.display = "block";
            }
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        </script>
    </body>
</html>