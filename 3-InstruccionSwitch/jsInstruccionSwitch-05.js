/*AGUIRRE AXEL switch 05
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana."*/ 
function mostrar()
{	
	let horaDelDia;
	horaDelDia= document.getElementById("txtIdHora").value;
	horaDelDia= parseInt(horaDelDia);
	switch (horaDelDia){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert ("es de mañana!")
	break;
	}
}//FIN DE LA FUNCIÓN