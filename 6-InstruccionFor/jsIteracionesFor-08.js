/*AGUIRRE, AXEL FOR 08
al presionar el botón pedir un número. Informar si el numero 
es PRIMO o no.*/ //numero divisible por 1 y por si mismo
function mostrar()
{	
	let num;
	let contadorDiv;
	let i;

	num=prompt("ingrese un numero:");
	num=parseInt (num);
	contadorDiv=0;
	i=1;

	for (i=1;i<=num;i++){
		if (num%i==0){
			contadorDiv++;
		}
	}
	if (contadorDiv==2){
		alert(num+ " es un numero primo");
	}else {
		alert (num+ "no es un numero primo")
	}


}//FIN DE LA FUNCIÓN