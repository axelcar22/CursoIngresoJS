/*
Aguirre Axel Entrada salida 06 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	let primerNumero; 
	let segundoNumero;
	let resultado;

	primerNumero = document.getElementById ("txtIdNumeroUno").value;
	segundoNumero = document.getElementById ("txtIdNumeroDos").value;

	primerNumero = parseInt (primerNumero)
	segundoNumero = parseInt (segundoNumero)
	
	resultado=(primerNumero + segundoNumero);

	alert("la suma de ambos numeros es " + resultado);
}

/*
	primerNumero = arseInt (document.getElementById ("txtIdNumeroUno").value);
	segundoNumero = arseInt (document.getElementById ("txtIdNumeroDos").value);

*/	