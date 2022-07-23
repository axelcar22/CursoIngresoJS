/*AGUIRRE AXEL IF04
Al ingresar una edad debemos informar si la persona es adolescente,
edad entre 13 y 17 años (inclusive) .
*/
function mostrar()
{	let edad;
	edad=document.getElementById ("txtIdEdad").value;
	if (edad >= 13 && edad <= 17){
		alert("usted es adolescente");
	}
}//FIN DE LA FUNCIÓN