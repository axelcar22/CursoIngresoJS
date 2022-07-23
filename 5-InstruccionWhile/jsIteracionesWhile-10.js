/*AGUIRRE AXEL- WHILE 10 DIV X
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos). */

function mostrar()
{
	let respuesta;
	let num;
	let sumaNegativos;
	let sumaPositivos;
	let cantNegativos;
	let cantPositivos;
	let contador;
	let contador2;
	let cantCeros;
	let cantPares;
	let promedioNega;
	let promedioPosi;
	let diferencia;

	respuesta="s";
	contador=0
	contador2=0
	sumaNegativos=0
	sumaPositivos=0
	cantNegativos=0
	cantPositivos=0
	cantPares= 0
	cantCeros=0

	while(respuesta=="s")
	{	
		num=prompt ("ingrese un numero");
		num=parseInt(num);
		if (num>0){
			contador=contador+1;
			sumaPositivos=sumaPositivos + num;
			cantPositivos=contador;
		}
		else {
			contador2=contador2+1;
			sumaNegativos=sumaNegativos + num;
			cantNegativos=contador2;
		}
		if(num % 2 == 0){
			cantPares=cantPares+1
		
		}
		if (num ==0){
			cantCeros=cantCeros +1
		}
		
	respuesta = prompt("desea continuar?");	
	}

	promedioNega=sumaNegativos/cantNegativos
	promedioPosi=sumaPositivos/cantPositivos
	diferencia= (cantPositivos)-(cantNegativos)

	document.write("la suma de negativos es :"+sumaNegativos +"<br>");
	document.write("la suma de positivos es :"+sumaPositivos +"<br>");
	document.write("la cantidad de negativos es :"+cantNegativos+"<br>");
	document.write("la cantidad de positivos es :"+cantPositivos+"<br>");
	document.write("la cantidad de ceros es :"+cantCeros+"<br>");
	document.write("la cantidad de pares es :"+cantPares+"<br>");
	document.write("la diferencia entre positivos y negativos es :"+ diferencia+"<br>");

	if (! isNaN(promedioNega)){
		document.write("el promedio de negativos es :"+ promedioNega+"<br>");
	}
	if (! isNaN(promedioNega)){
		document.write("el promedio de positivos es :"+ promedioPosi+"<br>");
	}
}//FIN DE LA FUNCIÓN
