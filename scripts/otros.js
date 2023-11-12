// script.js
function mostrarOcultarOtros() {
    var otrosInput = document.getElementById("otraAlergia");
    var alergiasSelect = document.getElementById("alergias");
    var alergicoSelect = document.getElementById("alergico-");

    // Verificar si la opción "Tengo alguna alergia" está seleccionada
    if (alergicoSelect.value === "1") {
        // Obtener todas las opciones seleccionadas
        var opcionesSeleccionadas = Array.from(alergiasSelect.selectedOptions).map(option => option.value);

        // Verificar si "otros" está incluido en las opciones seleccionadas
        if (opcionesSeleccionadas.includes("otros")) {
            otrosInput.style.display = "block";
        } else {
            otrosInput.style.display = "none";
        }

        // Mostrar el bloque de alergias
        document.getElementById("alergiaDiv-").style.display = "block";
    } else {
        // Ocultar el bloque de alergias
        document.getElementById("alergiaDiv-").style.display = "none";

        // Ocultar el campo de texto "Otros"
        otrosInput.style.display = "none";
    }
}