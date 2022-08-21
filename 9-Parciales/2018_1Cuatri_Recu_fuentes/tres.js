/**Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id. */

function mostrar()
{
    let precio;
    let porcentajeDescuento;
    let descuento;

    precio=prompt("Ingrese precio: ")
    porcentajeDescuento=prompt("Ingrese porcentaje de descuento: ")

    descuento=(porcentajeDescuento * precio /100);

    document.getElementById("elPrecioFinal").value= descuento







}
