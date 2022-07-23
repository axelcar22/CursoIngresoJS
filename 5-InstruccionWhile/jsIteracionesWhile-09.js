/*AGUIRRE AXEL- WHILE 09 DIV X
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let bandera;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	//iniciar variables
	bandera=0;
	respuesta="si";
	numeroMaximo=0
	numeroMinimo=0

	do 
	{
		numeroIngresado=prompt ("ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		if (bandera==0){
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			bandera=1;
		}
		else{
			if (numeroIngresado>numeroMaximo){
				numeroMaximo=numeroIngresado;
			} 
			if (numeroIngresado<numeroMinimo){
				numeroMinimo=numeroIngresado;
			}
		}	
		respuesta=prompt("desea ingresar otro numero?si/SI");

	}while(respuesta=="si" || respuesta == "SI");
	
	//document.write ("el numero maximo es " + numeroMaximo +"<br>");
	//document.write ("el numero minimo es " + numeroMinimo);
	//alert (numeroMaximo)
	//alert (numeroMinimo)
	document.getElementById ("txtIdMaximo").value=numeroMaximo
	document.getElementById ("txtIdMinimo").value=numeroMinimo

}//FIN DE LA FUNCIÓN