/*AGUIRRE AXEL- WHILE 08 DIV X
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let sumaPositivos;
	let multiNegativos;
	let bandera;
	let respuesta;
	let num;

	bandera=0
	sumaPositivos=0
	multiNegativos=1
	respuesta= "si"

	do {
		num=prompt ("Ingrese un numero:")
		num=parseInt(num);
		if (num > 0)
		{
			sumaPositivos=num + sumaPositivos
		}
		else
		{
			multiNegativos= num * multiNegativos
			bandera=1
		}
		respuesta= prompt ("Desea ingresar otro numero?. Si/No")

	} while (respuesta== "si" || respuesta == "SI");

	if (bandera==0){
		multiNegativos=0;
	}

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiNegativos;
}










	/*
	//let i;
	let num;
	let positivos;
	let negativos;
	let respuesta;
	//let suma;

	positivos=0
	negativos=1
	respuesta='s'
	while (respuesta=='s'){
		num=prompt ("ingrese numero")
		num=parseInt(num)
		if (num >0){
			positivos= positivos + num
		}
		else{
			negativos=negativos * num
		}
		respuesta= prompt ("quiere seguir ingresando numeros?. s/n")
	}


	
	document.getElementById("txtIdSuma").value=positivos;
	document.getElementById("txtIdProducto").value=negativos;	

}//FIN DE LA FUNCIÓN	*/
	


