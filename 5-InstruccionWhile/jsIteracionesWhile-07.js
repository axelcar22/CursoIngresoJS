/*AGUIRRE AXEL- WHILE 07 DIV X
Al presionar el botón pedir números hasta que el USUARIO QUIERA e 
informar la suma acumulada y el promedio.
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let i;
	let suma;
	let num;
	let promedio;
	let respuesta;

	suma=0;
	i=0;
	respuesta='s'

	while (respuesta=='s')
	{
		num= prompt ("Ingrese un numero ");
		num= parseFloat (num);
		i=i+1;
		suma= suma+num;
		respuesta= prompt ("quiere seguir ingresando numeros?. s/n")
	}
		promedio= suma/i

	document.getElementById("txtIdSuma").value=suma.toFixed(2);
	document.getElementById("txtIdPromedio").value=promedio.toFixed(2);
}

//FIN DE LA FUNCIÓN