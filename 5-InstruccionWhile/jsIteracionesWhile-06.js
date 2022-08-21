/*	AGUIRRE AXEL- WHILE 06 DIV X
Al presionar el botón pedir 5 números e informar la suma acumulada 
y el promedio.*/ 
function mostrar()
{
	let i;
	let suma;
	let num;
	let promedio;

	i=0;
	suma=0;	
	while (i<5){
		i=i+1
		num= prompt ("Ingrese el º" + i +"numero ")
		num=parseInt(num)
		suma= num+suma
	}

	promedio= suma/i
	document.getElementById("txtIdSuma").value=suma
	document.getElementById("txtIdPromedio").value=promedio.toFixed(2);
}//FIN DE LA FUNCIÓN