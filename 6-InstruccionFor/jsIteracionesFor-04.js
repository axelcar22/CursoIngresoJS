/*AGUIRRE, AXEL FOR 04
al presionar el botón repetir hasta que utilizamos 'BREAK'.*/

function mostrar()
{
	let mensaje;
	let contador;
	let numero;

	mensaje="Hola mundo";
	contador=0;
	numero=prompt ("ingrese hasta donde mostrar mensaje");
	numero=parseInt (numero);

	for(contador=0;contador<numero;contador++){
		alert (mensaje)
		if (contador==5){
			break 
		}	
	}


}//FIN DE LA FUNCIÓN




