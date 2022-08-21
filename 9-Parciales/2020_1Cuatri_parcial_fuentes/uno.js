/*
Debemos realizar la carga de una compra de 5(cinco) productos de 
prevención de contagio, de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar 
las 1000 unidades), la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, 
el promedio por compra.
c) Cuántas unidades de Barbijos se compraron en total


function mostrar()
{	
	//https://docs.google.com/forms/d/e/1FAIpQLSeTuZaN188LqOKwD6EYuyKbOjaNLGWcSSEFNTpCR1Xhxbs9Xw/viewform?fbzx=8621014668734290398

/*
Aguirre Axel
1)De una Red Social se debe ingresar una cantidad indeterminada 
de interacciones diaria de usuarios, validando los siguientes datos:

             nombre de usuario, 

             edad, 

             cantidad de likes, 

             tipo(“INVITADO” o “VIP”)

Informar:

a)El nombre del usuario de tipo “VIP” más joven.

b)La cantidad total de likes del día.

c)Promedio total de likes de los usuarios del tipo “INVITADO”.

Pedir datos por prompt y mostrar por document.write
*/
function mostrar()
{	
	let respuesta;
	let nombreUsuario;
	let edad;
	let cantidadLikes;
	let tipo;
	let edadMasJovenVip;
	let nombreMasJovenVip;
	let acumuladorLikes;
	let promedioTotalInvitados;
	let acumuladorLikesInvitados;
	let contadorInvitados;

	respuesta='s';

	edadMasJovenVip=101;

	acumuladorLikes=0;
	acumuladorLikesInvitados=0;
	contadorInvitados=0;


	do{

		nombreUsuario=prompt("Ingresar nombre de usuario");

		do {
			edad=prompt("Ingresar edad");
			edad=parseInt(edad);
		}while (isNaN(edad) || edad <=0 || edad >101);

		do {
			cantidadLikes=prompt("Ingresar cantidad de likes");
			cantidadLikes=parseInt(cantidadLikes);
		}while (isNaN(cantidadLikes) || cantidadLikes <0);

		do{			
			tipo=prompt("ingresar tipo");
			tipo=tipo.toLowerCase();
		}while (tipo!="invitado" && tipo!="vip");


		if (tipo=="vip"){
			if (edad<edadMasJovenVip){
				edadMasJovenVip=edad;
				nombreMasJovenVip=nombreUsuario;
			}
		}

		acumuladorLikes+=cantidadLikes;

		if (tipo=="invitado"){
			acumuladorLikesInvitados+=cantidadLikes;
			contadorInvitados++;
		}

		respuesta=prompt("desea seguir ingresando");

	}	while (respuesta=='s');

	promedioTotalInvitados=acumuladorLikesInvitados/contadorInvitados;

	document.write("El nombre del usuario de tipo “VIP” más joven es " + nombreMasJovenVip + "<br>");

	document.write("La cantidad total de likes del día es " +acumuladorLikes + "<br>");

	if (contadorInvitados<0){
		promedioTotalInvitados=acumuladorLikesInvitados/contadorInvitados;
		document.write("Promedio total de likes de los usuarios del tipo “INVITADO es " + promedioTotalInvitados + "<br>");
	}


}




/*
Aguirre Axel
2)De 10 corredores de moto se deben tomar y validar los siguientes 
datos del Enduro del Vera

            nombre, 

			edad, 

			tiempo(dato entero expresado en segundos),

            sexo.

Informar:

a)El nombre del hombre con mas tiempo(si lo hay).

b)El promedio de la edad de todos los participantes.

c)La cantidad de corredores de sexo femenino.

Pedir datos por prompt y mostrar por document.write

function mostrar()
{	
	let i;
	let nombre;
	let edad;
	let tiempo;
	let sexo;
	let hombreMasTiempo;
	let nombreMasTiempo;
	let promedioEdades;
	let acumuladorEdades;
	let cantidadMujeres;

	hombreMasTiempo=0;
	cantidadMujeres=0
	acumuladorEdades=0;


	for (i=0;i<10;i++){

		nombre=prompt("Ingrese nombre");

		do{
			edad=prompt("Ingresar edad");
			edad=parseInt(edad);
		}while (isNaN(edad) || edad <18 || edad >101 );
	
		do{
			tiempo=prompt("Ingresar tiempo en segundos");
			tiempo=parseInt(tiempo);
		}while (isNaN(tiempo) || tiempo <0);
	
		do{			
			sexo=prompt("ingresar sexo");
			sexo=sexo.toLowerCase();
		}while (sexo!='m' && sexo!='f');


		if (sexo=="m"){
			if (tiempo>hombreMasTiempo)
				hombreMasTiempo=tiempo;
				nombreMasTiempo=nombre;
		}

		acumuladorEdades+=edad;


		if (sexo=="f"){
			cantidadMujeres++;
		}


	}
 
	promedioEdades=acumuladorEdades/10;
	
	if (sexo=="m"){
		document.write("El nombre del hombre con mas tiempo " + nombreMasTiempo + "<br>");
	}
	
	document.write("El promedio de la edad de todos los participantes es " + promedioEdades + "<br>");
	document.write("La cantidad de corredores de sexo femenino es " + cantidadMujeres);
}




/*
Aguirre Axel
3)Nos ingresan una cantidad indeterminada de ventas realizadas 
por las distintas sucursales de una Mega Tienda Polirubro, 
validando los datos ingresados:

            nombre del cliente, 

            sucursal( “CABA”, “BS.AS.” o “INTERIOR”), 

            tipo(“GRANDE”,”MEDIANA”,“PEQUEÑA”),

            monto de venta en Pesos.

Informar:

a)El nombre del cliente al que se le vendió menos.

b)El promedio del monto de venta de las sucursales del tipo “PEQUEÑA”.

c)La sucursal con mas cantidad de ventas.

Pedir datos por prompt y mostrar por document.write

function mostrar()
{	
	let respuesta;
	let nombre;
	let sucursal;
	let tipo;
	let monto;
	let nombreMenosVendio;
	let MenosVendio;
	let flagMenosVendio;
	let promedioVentasPequenia;
	let contadorPequenia;
	let acumuladorMontoPequenia;
	let sucursalMasVentas;
	let contadoCaba;
	let contadorBsAs;
	let contadorInterior;
	let mensaje;

	flagMenosVendio=0;
	contadorPequenia=0;
	acumuladorMontoPequenia=0;

	do{

		nombre=prompt("Ingrese nombre");

		do{			
			sucursal=prompt("ingresar sucursal, Caba; Bs.As o interior");
			sucursal=sucursal.toUpperCase();
		}while (sucursal!="CABA" && sucursal!="BS.AS" && sucursal!="INTERIOR");

		do{			
			tipo=prompt("ingresar tipo, grande, mediana, pequeña");
			tipo=tipo.toLowerCase();
		}while (tipo!="grande" && tipo!="mediana" && tipo!="pequenia");

		do{
			monto=prompt("Ingresar el monto");
			monto=parseInt(monto);
		}while (isNaN(monto) || monto <0);

		if (flagMenosVendio==0){
			MenosVendio=monto;
			nombreMenosVendio=nombre;
		}
		else 
			if(monto < MenosVendio){
			MenosVendio=monto;
			nombreMenosVendio=nombre;
		}

		if (tipo=="pequenia"){
			contadorPequenia++;
			acumuladorMontoPequenia+=monto;
		}

		switch (sucursal){
			case "BS.AS":
				contadorBsAs++;
				break;
			case "CABA":
				contadoCaba++;
				break;
			case "INTERIOR":
				contadorInterior++;
				break;
		}
		
		if (contadorBsAs>contadoCaba && contadorBsAs>contadorInterior){
			mensaje = "La sucursal con mas cantidad de ventas es Caba"
		}
		else 
			if (contadoCaba>contadorInterior){
				mensaje = "La sucursal con mas cantidad de ventas es Caba"
			}
		else {
			mensaje = "La sucursal con mas cantidad de ventas es Interior"
		}
	

		respuesta=prompt("desea seguir ingresando");

	}	while (respuesta=='s');

	promedioVentasPequenia= acumuladorMontoPequenia/contadorPequenia;

	document.write("El nombre del cliente al que se le vendió menoses: " + nombreMenosVendio + "<br>");
	if (tipo=="pequenia"){
		document.write("El promedio del monto de venta de las sucursales del tipo “PEQUEÑA” es" + promedioVentasPequenia+ "<br>"); 
	}

	document.write (mensaje);

}*/




 
	





















