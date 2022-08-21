/*AGUIRRE, AXEL FOR 06
al presionar el botón pedir un número. mostrar los numeros pares desde 
el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
Curso de ingreso UTN FRA */
function mostrar()
{	
	let num;
	let contadorDePares;
	let i;

	num=prompt ("ingrese un numero: ");
	num=parseInt(num);
	contadorDePares=0;
	i=1;

	for (i=1;i<=num;i++){
		if (i%2==0){
			document.write("<br> numero par: " + i);
			contadorDePares++
		}
	}
	document.write("<br> cantidad de pares de " + contadorDePares);
}//FIN DE LA FUNCIÓN