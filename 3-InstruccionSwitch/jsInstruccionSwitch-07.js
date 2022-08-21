/*AGUIRRE AXEL switch 07
Al selecionar un destino , indicar el punto cardinal de nuestro pais 
en donde se encuentra Norte, Sur, Este u Oeste*/ 
function mostrar()
{
	let destinoIngresado;
	destinoIngresado= document.getElementById("txtIdDestino").value; 

	switch (destinoIngresado){
		case "Bariloche":
			alert ("Se escuenta en el Oeste!");
		break;
		case "Cataratas":
		alert ("Se encuentra en el Norte! ");
		break;
		case "Mar del plata":
			alert ("Se encuentra en el Este!");
		break;
		default:
			alert ("Se escuentra en el Sur!")
		break;
	}
}//FIN DE LA FUNCIÓN