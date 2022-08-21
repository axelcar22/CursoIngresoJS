/*AGUIRRE AXEL IF10
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{	let numero;
	numero= (Math.round (Math.random()*10 )+1);
	if (numero > 9 ){
		alert(numero + ", EXELENTE!");
	}
	else if (numero >= 4) {
		alert (numero + ", APROBÓ!")	
	}
	else if (numero <=3){
		alert (numero + ", Vamos, la proxima se puede!")	
	}
}//FIN DE LA FUNCIÓN

/*
if(edad < 13)
	{
		alert("Es niño");
	}
	else if(edad < 18)
	{
		alert("Es adolescente");
	} 
	else if(edad < 65)
	{
		alert("Es mayor");
	}
	else
	{
		alert("Es adulto mayor");
	}
	*/