/*Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio
(entre -50 y 50) hasta que el usuario quiera e informar al terminar 
el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro 
esa temperatura. */
function mostrar()
{   
    let respuesta;
    let pais;
    let habitantes;
    let temperatura;
    let temperaturaPar;
    let cantidadMenosHabitantes;
    let bandera;
    let nombrePaisMenos
    let mayorCuarenta;
    let promed;
    let sumaHabitantes;
    let i;
    let tempMinima;
    let nombreTempMin;



    temperaturaPar=0;
    bandera=0
    mayorCuarenta=0
    tempMinima=50
    i=0
    sumaHabitantes=0




    do{

        pais=prompt("ingrese pais");
        while ((!isNaN(pais))){
            pais=prompt("ingrese pais");
        }
        
        habitantes=prompt("ingresar millones de habitantes");
        habitantes=parseInt(habitantes);
        i++
        while (((isNaN)(habitantes)) || habitantes <1 || habitantes>7000){
            habitantes=prompt("ingresar millones de habitantes")
            habitantes=parseInt(habitantes);
            i++
        }
        temperatura=prompt("ingrese temperatura")
        temperatura=parseInt(temperatura);
        while((isNaN)(temperatura) || temperatura<-50 || temperatura>50){
            temperatura=prompt("ingrese temperatura")
            temperatura=parseInt(temperatura);
        }

        sumaHabitantes=sumaHabitantes + habitantes;

        if (temperatura%2==0){
            temperaturaPar++
        }

        if (bandera==0){
            cantidadMenosHabitantes=habitantes;
            nombrePaisMenos=pais;
            bandera=1
        }
        else 
            if(habitantes<cantidadMenosHabitantes){
                cantidadMenosHabitantes=habitantes;
                nombrePaisMenos=pais;
            }
        
        if (temperatura>40){
            mayorCuarenta++;
        }

        if (temperatura<tempMinima){
            tempMinima=temperatura;
            nombreTempMin=pais;
        }
        
 

        respuesta=prompt("desea seguir ingresando?")
    }while (respuesta=='s')


    promed=sumaHabitantes/i

    document.write("La cantidad de temperaturas pares es : " + temperaturaPar + "<br>");
    document.write("El nombre del pais con menos habitantes es " + nombrePaisMenos + "<br>");
    document.write("La cantidad de paises que superan los 40 grados es : " + mayorCuarenta + "<br>");
    document.write("el promedio de habitantes entre los paises ingresados es : " + promed.toFixed (2)+ "<br>" + "millones");
    document.write("la temperatura mínima ingresada es "+ tempMinima+ " y nombre del pais que registro esa temperatura es "  + nombreTempMin+ "<br>");
}

/*
 */
