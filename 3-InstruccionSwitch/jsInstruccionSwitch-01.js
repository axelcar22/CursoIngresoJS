/*AGUIRRE AXEL switch 01
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */
function mostrar(){
	let mesDelAño;
	mesDelAño= document.getElementById("txtIdMes").value;
	switch (mesDelAño){
		case "Enero":
			alert("Que comiences bien el año");
		break
		case "Marzo":
			alert("A clases");
		break;
		case "Julio":
			alert ("Se vienen las vaciones");
		break;
		case "Diciembre":
			alert ("Felices fietas");
		break;
		default:
			alert("no hay nada para mostrar");
		break;

	}
}	
