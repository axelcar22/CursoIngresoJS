/*AGUIRRE AXEL IF07
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	let edad;
	let estadoc;
	edad=parseInt (document.getElementById ("txtIdEdad").value);
	estadoc= document.getElementById ("estadoCivil").value; 
	if (edad < 18 && estadoc != "Soltero"){
		alert("Es muy pequeño para NO ser soltero!");
	}


}//FIN DE LA FUNCIÓN
