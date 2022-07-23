/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas 
y censos nos pide realizar una carga de datos validada e ingresada por 
ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y 
luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados 
y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, 
“N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edad;
	let respuesta;
	let sexo;
	let estadoCivil;
	let sueldo;
	let legajo;
	let nacionalidad;
//edad
	do{
		edad = prompt ("ingrese edad (entre 18 y 90 años inclusive)")
		edad=parseInt(edad);

		while  ((isNaN (edad)) || (edad >90) ||  (edad <18))
		{
			edad = prompt ("Error. ingrese edad (entre 18 y 90 años inclusive)")
			edad=parseInt(edad)
		}
		document.getElementById("txtIdEdad").value=edad
//sexo
		sexo=prompt("Ingrese sexo, m(Masculino)/f(Femenino")
		while ((sexo !='m') && (sexo !='f')){	
			sexo=prompt("Error. Ingrese sexo, m(Masculino)/f(Femenino")	
		}		
			if (sexo=='m'){
				sexo="masculino"
			}
			else if (sexo=='f'){
				sexo="femenino"
			}		
		document.getElementById("txtIdSexo").value=sexo
//Estado Civil
		do{
			estadoCivil=prompt ("Ingrese su edad civil, 1= Soltero, 2= Casado, 3= Divociado, 4= Viudo")

			if (estadoCivil==1){
				estadoCivil="Soltero"
			}
			else if (estadoCivil==2){
				estadoCivil="Casado"
			}
			else if (estadoCivil==3){
				estadoCivil="Divorciado"
			}
			else if (estadoCivil==4){
				estadoCivil="Viudo"
			}
			else {
				estadoCivil=prompt ("Ingrese su edad civil, 1= Soltero, 2= Casado, 3= Divociado, 4= Viudo")
			}
		}while (estadoCivil<1 || estadoCivil>5)		
		document.getElementById("txtIdEstadoCivil").value=estadoCivil
//sueldo
		sueldo= prompt ("Ingrese sueldo bruto, no menor a $8000")
		while (sueldo < 8000){
			sueldo= prompt ("Erros. Ingrese sueldo bruto, no menor a $8000")
		}
		document.getElementById("txtIdSueldo").value=sueldo
//legajo

		legajo= prompt ("Ingrese su legajo legajo de cuatro cifras")

		while (legajo<1000 || legajo>9999){
			legajo=prompt ("Error. El legajo debe tener cuatro cifras")
		}
		document.getElementById("txtIdLegajo").value=legajo
//Nacionalidad	
		nacionalidad= prompt("Ingrese nacionalidad")
		while ((nacionalidad!='a') && (nacionalidad!='e') && (nacionalidad!='n')){
			nacionalidad= prompt("Ingrese nacionalidad correcta")
		}
			if (nacionalidad=='a'){
				nacionalidad="Argentino"
			}
			else if (nacionalidad=='e'){
				nacionalidad="Extranjero"
			}
			else if (nacionalidad=='n'){
				nacionalidad="Nacionalizado"
			}
		
		document.getElementById("txtIdNacionalidad").value=nacionalidad

		respuesta=prompt ("desea continuar ingresando datos? s/n")
	} while (respuesta=='s')

}//Fin de función



