/*AGUIRRE AXEL switch 09
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de
una estacion del año y localidad para vacacionar para poder calcular 
el precio final. EN INVIERNO: bariloche tiene un aumento del 20%, 
cataratas y Cordoba tiene un descuento del 10%. Mar del plata tiene un 
descuento del 20%. EN VERANO: bariloche tiene un descuento del 20% cataratas 
y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
EN OTOÑO Y PRIMAVERA: bariloche tiene un aumento del 10%,
cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento*/
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let diez;
	let veinte;
	let precio;

	estacionIngresada= document.getElementById("txtIdEstacion").value;
	destinoIngresado= document.getElementById("txtIdDestino").value;
	diez= (15000*10/100)
	veinte= (15000*20/100)
	precio=0;

	switch (estacionIngresada){
		case "Invierno":
			switch (destinoIngresado){
				case "Bariloche":
					precio =(15000 + veinte);
				break;
				case "Cataratas":
				case "Cordoba":
					precio =(15000 - diez);
				break;
				case "Mar del plata":
					precio =(15000 - veinte);
				break;
			}
		break;	
		case "Verano": 
		switch (destinoIngresado){
			case "Bariloche":
				precio =(15000 - veinte);
			break;
			case "Cataratas":
			case "Cordoba":
				precio =(15000 + diez);
			break;
			case "Mar del plata":
				precio = (15000 + veinte);
			break;	
			}
		break;
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precio =(15000 + diez);
				break;
				default:
					precio =(15000)
				break;
			}
	}
	alert ("El precio es $" + precio)	
}

