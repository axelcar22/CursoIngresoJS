/*AGUIRRE, AXEL FOR 07
al presionar el botón pedir un número. mostrar los numeros divisores 
desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores 
encontrados. */
function mostrar()
{
	let num;
	let contadorDiv;
	let i;

	num=prompt ("ingrese un numero")
	num=parseInt (num);
	contadorDiv=0;
	i=1

	for (i=1;i<=num;i++){
		if (num%i==0){
			document.write(i +"<br>");
			contadorDiv++
		}
	}

	document.write("<br> la cantidad de divisores es: " + contadorDiv);

}//FIN DE LA FUNCIÓN
