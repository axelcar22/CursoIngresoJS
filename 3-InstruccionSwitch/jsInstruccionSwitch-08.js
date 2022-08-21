/*AGUIRRE AXEL switch 08
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */
function mostrar()
{
	let destinoIngresado;
	destinoIngresado= document.getElementById("txtIdDestino").value; 

	switch (destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			alert ("Aqui hace frio!");
		break;
		case "Mar del plata":
		case "Cataratas":
			alert ("Aqui hace calor!");
		break;
	}
}//FIN DE LA FUNCIÓN