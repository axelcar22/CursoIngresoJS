/*Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje 
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados 
son xx kilos y el promedio de peso xx */
function mostrar()
{
    let nombre1;
    let nombre2;
    let kilo1;
    let kilo2;
    let suma;
    let promedio;

    nombre1=prompt("ingrese primero nombre");
    nombre2=prompt("ingrese segundo nombre");
    kilo1=prompt("ingrese primer peso");
    kilo1=parseInt(kilo1)
    kilo2=prompt("ingrese segundo peso");
    kilo2=parseInt(kilo2)
    suma=0

    suma=kilo1+kilo2;
    promedio =suma/2;

    alert ("ustedes se llaman " + nombre1 + " y " + nombre2 + " pesan " + kilo1 +" y " + kilo2 + " kilos, que sumados son " + suma +  " kilos y el promedio de peso es "  +promedio )







}
