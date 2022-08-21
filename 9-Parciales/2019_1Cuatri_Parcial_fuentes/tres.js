/*Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id. */
function mostrar()
{
    let precio;
    let procentaje;
    let descuento;

    precio=prompt("ingrese precio");
    precio=parseInt(precio);

    procentaje=prompt("ingrese porcentaje");
    procentaje=parseInt(procentaje);
    descuento=(precio*procentaje/100);

    document.getElementById("elPrecioFinal").value= descuento;

}
