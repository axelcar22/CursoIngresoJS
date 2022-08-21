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
“N” para nacionalizados.*/
 
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edad;
	let respuesta;
	let sexo;
	let textoSexo;
	let estadoCivil;
	let textoEstadoCivil;
	let sueldo;
	let legajo;
	let nacionalidad;

//edad
	do{
		edad = prompt ("ingrese edad (entre 18 y 90 años inclusive)");
		edad=parseInt(edad);

		while  ((isNaN (edad)) || (edad >90) ||  (edad <18))
		{
			edad = prompt ("Error. ingrese edad (entre 18 y 90 años inclusive)");
			edad=parseInt(edad);
		}

//sexo
		sexo=prompt("Ingrese sexo, m(Masculino)/f(Femenino");
		sexo=sexo.toLowerCase(); 
		while ((sexo !='m') && (sexo !='f')){	
			sexo=prompt("Error. Ingrese sexo, m(Masculino)/f(Femenino");
			sexo=sexo.toLowerCase();	 
		}		
			if (sexo=='m'){ 
				textoSexo="masculino";
			}
			else if (sexo=='f'){
				textoSexo="femenino";
			}	

//Estado Civil
		estadoCivil=prompt ("Ingrese su edad civil, 1= Soltero, 2= Casado, 3= Divociado, 4= Viudo");
		estadoCivil=parseInt (estadoCivil)
		while (isNaN (estadoCivil) || estadoCivil<1 ||  estadoCivil>=4){
			estadoCivil=prompt ("Error. Ingrese su edad civil, 1= Soltero, 2= Casado, 3= Divociado, 4= Viudo");
			estadoCivil=parseInt (estadoCivil)
			}
			switch (estadoCivil) {
				case 1:
					textoEstadoCivil="Soltero"
				break;
				case 2:
					textoEstadoCivil="Casado";
				break;
				case 3:
					textoEstadoCivil="Divorciado";
				break;
				case 4:
					textoEstadoCivil="Viudo";
				break;
			}
				
//sueldo 
		sueldo= prompt ("Ingrese sueldo bruto, no menor a $8000");
		sueldo=parseInt(sueldo)
		while (isNaN (sueldo) || sueldo < 8000){
			sueldo= prompt ("Erros. Ingrese sueldo bruto, no menor a $8000");
			sueldo=parseInt(sueldo)
		}

//legajo
		legajo= prompt ("Ingrese su legajo legajo de cuatro cifras");
		legajo=parseInt(legajo)
		while (isNaN (legajo) ||  legajo<1000 || legajo>9999){
			legajo=prompt ("Error. El legajo debe tener cuatro cifras");
			legajo=parseInt(legajo)
		}

//Nacionalidad	
		nacionalidad= prompt("Ingrese nacionalidad");
		nacionalidad=nacionalidad.toLowerCase();
		while ((nacionalidad!='a') && (nacionalidad!='e') && (nacionalidad!='n')){
			nacionalidad= prompt("Ingrese nacionalidad correcta");
			nacionalidad=nacionalidad.toLowerCase();

		}
			if (nacionalidad=='a'){
				nacionalidad="Argentino";
			}
			else {
				if (nacionalidad=='e'){
					nacionalidad="Extranjero";
				}
				if (nacionalidad=='n'){
					nacionalidad="Nacionalizado";
				}
			}

	respuesta=prompt ("desea continuar ingresando datos? s/n");
	}while (respuesta=='s')

	document.getElementById("txtIdEdad").value=edad
	document.getElementById("txtIdSexo").value=textoSexo
	document.getElementById("txtIdEstadoCivil").value=textoEstadoCivil
	document.getElementById("txtIdSueldo").value=sueldo;
	document.getElementById("txtIdLegajo").value=legajo;
	document.getElementById("txtIdNacionalidad").value=nacionalidad;
}//Fin de función



