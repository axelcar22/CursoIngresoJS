/* AGUIRRE AXEL switch 04
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/ 
function mostrar()
{
	let mesDelAnio;
	mesDelAnio= document.getElementById("txtIdMes").value;
	switch (mesDelAnio){
		case "Febrero":
			alert ("tiene 28 días.");
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert ("tiene 30 días.");
		break;
		default:
			alert ("tiene 31 días.");
		break;
	}
}//FIN DE LA FUNCIÓN