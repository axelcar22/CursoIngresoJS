/**AGUIRRE, AXEL FOR 05
 * al presionar el botón repetir el pedido de número hasta que ingresemos 
el 9. */
function mostrar()
{
	let num;
	//let i;
	
	for (;;){ //(i=0;i>=0;i++){
		num= prompt ("ingrese un numero");
		num=parseInt(num);
		if (num==9){
			break;
		}

		alert ("Usted ingreso el numero: " + num);
	}
		
}//FIN DE LA FUNCIÓN