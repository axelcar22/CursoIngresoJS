/*AGUIRRE AXEL IF03
Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad.
*/
function mostrar()
{	let edad;
	edad=document.getElementById ("txtIdEdad").value;
	if(edad>17){

		alert("es mayor de edad");
	}else {
		alert ("es menor de edad")
	}	

}//FIN DE LA FUNCIÓN