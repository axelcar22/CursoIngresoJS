/*1.	
    Aguirre Axel - TP- jsFerreteFacturacion
    Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

let precio1;
let precio2;
let precio3;
let suma;

function Sumar () 
{
    precio1 = ((parseInt) (document.getElementById( "txtIdPrecioUno").value));
    precio2 = ((parseInt) (document.getElementById( "txtIdPrecioDos").value));
    precio3 = ((parseInt) (document.getElementById( "txtIdPrecioTres").value));

    suma = precio1 + precio2 +precio3;

    alert ("El total de la suma es " + suma);
}

function Promedio () 
{
	let promedio;

    promedio = suma / 3;

    promedio = parseInt (promedio)

    alert ("el promedio de los precios es " + promedio);

}

function PrecioFinal () 
{
	
    precio1 = ((parseInt) (document.getElementById( "txtIdPrecioUno").value));
    precio2 = ((parseInt) (document.getElementById( "txtIdPrecioDos").value));
    precio3 = ((parseInt) (document.getElementById( "txtIdPrecioTres").value));

    let precioFinal;
    let cuenta;

    cuenta= (suma * 21 /100);
    precioFinal=  (cuenta + suma);

    alert ("el promedio es " + precioFinal.toFixed(0));
}