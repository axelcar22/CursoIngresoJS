/*/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6. */
/*
function mostrar()
{
    let notas;
    let i;
    let sexo;
    let promedio;
    let sumaNotas;
    let notaBaja;
    let varonesMayorSeis;
    let bandera;

    sumaNotas=0
    notaBaja=10
    varonesMayorSeis=0
    bandera=0

    for (i=0;i<5;i++){
        notas=prompt("Ingrese notas");
        notas=parseInt(notas);

        while ((isNaN (notas)) || (notas <0) || (notas>10)){
            notas=prompt("Error. Ingrese notas");
            notas=parseInt(notas);    
        }
        sexo= prompt ("ingrese su sexo, m/f")
        sexo=sexo.toLowerCase();

        while ((sexo !='m') && (sexo !='f') ){
            sexo= prompt ("Error. Ingrese su sexo, m/f");
            sexo=sexo.toLowerCase();
        }
        sumaNotas=sumaNotas + notas
        
        if (notas<notaBaja) {
                bandera=1
                notaBaja=notas
                if (bandera !=0){
                    sexo=sexo
                }
 
        }
        if(sexo=='m' && notas>=6){
            varonesMayorSeis++
        }
    }
    promedio= sumaNotas / 5
    alert ("El promedio de las notas es " + promedio);

    alert ("la nota mas baja es " + notaBaja + " y su sexo es " + sexo)

    alert ("la cantidad de varones con nota mayor a seis son : " + varonesMayorSeis)
}
*/
/*
Realizar el algoritmo que permita ingresar los datos de una compra de 
ingredientes para preparar comida al por mayor ,
hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero),
tipo validar("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre 
el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre 
el total a pagar.
a) El importe total a pagar , bruto sin descuento
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo de alimento más caro.
d) El promedio de precio por kilo en total.* */


function mostrar()
{
	let tipoIngredientes;
	let kilo;
    let precio;
    let precioPorKilo;
    let descuento;
    let masCaro;
    let totalPagar;
    let respuesta;
    let tipoMasCaro;
    let sumaDescuento;
    let promedioPrecios;
    let i;
    let sumaPrecios;

    masCaro=0
    bandera=0
    totalPagar=0
    respuestas='s'
    descuento=0
    sumaDescuento=0
    sumaPrecios=0
    i=0

    do{
        tipoIngredientes= prompt("ingresar ingrediente")
        tipoIngredientes=tipoIngredientes.toLowerCase()
        while (tipoIngredientes!='v' && tipoIngredientes!='a' && tipoIngredientes!='m'){
            tipoIngredientes= prompt("Error. Ingresar ingrediente")
            tipoIngredientes=tipoIngredientes.toLowerCase()
        }

        kilo=prompt("ingresar el kilo")
        kilo=parseInt(kilo)
        while (isNaN(kilo) || kilo <10 || kilo >1000){
            kilo=prompt("Error. Ingresar el kilo")
            kilo=parseInt(kilo)
        }

        precio=prompt("ingresar el precio")
        precio=parseInt(precio)
        i++
        while (isNaN(precio) || precio <0){
            precio=prompt("Error. Ingresar el precio")
            precio=parseInt(precio)
            i++
        }

        
        if (precio>masCaro){
            bandera=1
            masCaro=precio
            if (bandera!=0){
                tipoMasCaro=tipoIngredientes;
            }
        }

        precioPorKilo=precio * kilo
        totalPagar=totalPagar+precioPorKilo       



        respuesta=prompt("desea seguir ingresando datos")
    }while (respuesta=='s')

    if (totalPagar>100 && kilo<300){
        descuento= (15 * totalPagar /100);
    }
    if (ktotalPagar>301){
        descuento=  (25 * totalPagar /100);
    }

    sumaDescuento= sumaDescuento+descuento

    promedioPrecios=sumaPrecios/i
    
    sumaPrecios=sumaPrecios+precio

//a
    alert ("El total a pagar es de " + totalPagar );
//b            
    alert ("El precio a pagar con descuento es " + sumaDescuento)
//c   
    alert ("el tipo mas caro es " + tipoMasCaro)
//d
    alert ("El promedio de los precios es " + promedioPrecios )

} 
