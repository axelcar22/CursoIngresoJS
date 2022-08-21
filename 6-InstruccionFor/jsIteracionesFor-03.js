/**AGUIRRE, AXEL FOR 03
 * al presionar el botón pedir la cantidad de veces que quiero repetir 
  el mensaje "Hola UTN FRA" */

function mostrar()
{
	let repeticiones;
	let mensaje;
	let contador;

	mensaje= "Hola UTN FRA"
	repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones=parseInt(repeticiones)

	for (contador=repeticiones;contador>0;contador--){
		alert (mensaje)
	}

}//FIN DE LA FUNCIÓN