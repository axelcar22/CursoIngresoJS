/*AGUIRRE AXEL switch 02
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

function mostrar()
{
	let mesDelAño;
	mesDelAño= document.getElementById("txtIdMes").value;
	switch (mesDelAño){
		case "Julio":
		case "Agosto":
			alert ("Abrigate que hace frio.");
		break;
		case "Septiembre":
		case "Octubree":	
		case "Noviembre":
		case "Diciembre":
			alert ("Ya pasamos el frio, ahora calor!!!.");
		break;
		default:
			alert ("Falta para el inviero");
		break;
	}		
}
