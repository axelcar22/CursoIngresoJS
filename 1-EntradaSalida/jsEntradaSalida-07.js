/*
Aguirre Axel Entrada salida 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()

{	
	let numero1
	let numero2 
	let sumaresultado

	numero1 = document.getElementById ("txtIdNumeroUno").value;
	numero2 = document.getElementById ("txtIdNumeroDos").value;

	numero1 = parseInt (numero1);
	numero2 = parseInt (numero2);

	sumaresultado = (numero1 + numero2);

	alert ("el resultado de la suma es " + sumaresultado);	
}

function restar()
{
	let numero1
	let numero2 
	let restaresultado

	numero1 = document.getElementById ("txtIdNumeroUno").value;
	numero2 = document.getElementById ("txtIdNumeroDos").value;

	numero1 = parseInt (numero1);
	numero2 = parseInt (numero2);

	restaresultado = (numero1 - numero2);

	alert ("el resultado de la resta es " + restaresultado);
}

function multiplicar()
{ 
	let numero1
	let numero2 
	let multiresultado

	numero1 = document.getElementById ("txtIdNumeroUno").value;
	numero2 = document.getElementById ("txtIdNumeroDos").value;

	numero1 = parseInt (numero1);
	numero2 = parseInt (numero2);

	multiresultado = (numero1 * numero2);

	alert("el resultado de la multiplicación es " + multiresultado);
	
}

function dividir()
{
	let numero1
	let numero2 
	let divisionsultado

	numero1 = document.getElementById ("txtIdNumeroUno").value;
	numero2 = document.getElementById ("txtIdNumeroDos").value;

	numero1 = parseInt (numero1);
	numero2 = parseInt (numero2);

	divisionsultado = (numero1 / numero2);

	alert("el resultado de la división es " + divisionsultado);
	
}

