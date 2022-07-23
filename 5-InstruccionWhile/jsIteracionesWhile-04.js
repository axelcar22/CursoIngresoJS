/*AGUIRRE AXEL- WHILE04 DIV X
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;

	do{
		num = prompt("ingrese un número entre 0 y 9.");
		num = parseInt(num);

	}while (num < 0 || num>9)
	
	document.getElementById ("txtIdNumero").value=num


}


/*
function mostrar()
{	
	let num;
	num=prompt("ingrese un número entre 0 y 9.");
	num = parseInt(num);

	while (!(num>= 0 && num<=9))
	{
		num=prompt("ingrese número válido.");
		num = parseInt(num);
	}
	document.getElementById ("txtIdNumero").value=num
}*/