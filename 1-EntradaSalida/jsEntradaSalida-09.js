/*
Aguirre Axel Entrada salida 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let cuenta;

	sueldo = (parseInt) (document.getElementById( "txtIdSueldo").value);
	//resultado = (parseInt) (document.getElementById( "txtIdResultado").value)

	cuenta= (sueldo *10 /100);
	suma = (parseInt) (sueldo + cuenta);

	(document.getElementById( "txtIdResultado").value) =suma;


}
