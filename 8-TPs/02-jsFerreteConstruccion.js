/*Aguirre Axel - TP- jsFerreteriaConstruccion
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
ACA*/

    let largo;
    let ancho;
    let radio;

function Rectangulo () 
{
    let cuenta;

    largo = ((parseFloat) (document.getElementById( "txtIdLargo").value));
    ancho = ((parseFloat) (document.getElementById( "txtIdAncho").value));

    cuenta= (largo * ancho) ;
    
    alert ("se debe usar " + cuenta + " metros de alambre");


}

function Circulo () 
{
    let cuenta2;

	radio = ((parseFloat) (document.getElementById( "txtIdRadio").value));
    cuenta2= (2 * 3.14 * radio)

    alert ("se debe usar " + cuenta2 + " metros de alambre")
}

function Materiales () 
{
	let cemento;
    let cal;

    largo = ((parseFloat) (document.getElementById( "txtIdLargo").value));
    ancho= ((parseFloat) (document.getElementById( "txtIdAncho").value));

    cemento= ((largo * ancho) * 2 )
    cal = ((largo * ancho) * 3)

    alert ("se necesitan " + cemento + " bolsas de cemento" + " y " + cal + " bolsas de cal.");

}

