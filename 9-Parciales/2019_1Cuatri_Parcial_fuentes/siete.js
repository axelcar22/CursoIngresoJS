/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de 
las alturas en centimetros(validar entre 0 y 250) , el sexo. 
(validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de mujeres que su altura supere los 190 centimetros. */
function mostrar()
{
    let altura;
    let sexo;
    let promedio
    let alturaBaja;
    let cantidadMujeres;
    let i;
    let sumaAlturas;
    let bandera;
    let sexoMenor;


    sumaAlturas=0
    alturaBaja=250
    bandera=0
    cantidadMujeres=0

    for (i=0;i<5;i++){
        do{
            altura=prompt("Ingrese altura");
            altura=parseInt(altura);
        }while ((isNaN(altura))|| altura<0|| altura>250)
    
    
        do{
            sexo=prompt("Ingrese sexo")
            sexo=sexo.toLowerCase()
        }while (sexo!='f' && sexo!='m')

        sumaAlturas=sumaAlturas+altura
        promedio=sumaAlturas/5

        if(altura<alturaBaja){
            bandera=1
            alturaBaja=altura
            if (bandera!=0){
                sexoMenor=sexo
            }    
        }

        if (altura >190 && sexo=='f'){
            cantidadMujeres++
        }
    }

    alert ("El promedio de las alturas es " + promedio)
    alert ("La altura mas baja es " + alturaBaja + " y el sexo es " +sexoMenor)
    alert ("La cantidad de mujeres que superan los 190m son " + cantidadMujeres )
}

