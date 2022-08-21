/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el 
usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo. */

function mostrar()
{
    let letra;
    let numero;
    let respuesta;
    let cantidadPares;
    let cantidadImpares;
    let cantidadCeros;
    let promedio;
    let sumaPositivos;
    let i;
    let sumaNegativos;
    let maximo;
    let minimo;
    let letraMaximo;
    let letraMinimo;
    let bandera;
    let bandera2;

    cantidadImpares=0
    cantidadPares=0
    cantidadCeros=0
    sumaPositivos=0
    i=0
    sumaNegativos=0
    bandera=0
    bandera2=0

    do{
        letra=prompt("ingrese letra");
        letra=letra.toLowerCase()
        while ((!isNaN (letra))|| (letra.length>1)){
            letra=prompt("ingrese letra");
            letra=letra.toLowerCase()
        }

        numero=prompt("ingrese numero");
        numero=parseInt(numero);
        while ((isNaN (numero)) || numero<-100 || numero>100){
            numero=prompt("ingrese numero");
            numero=parseInt(numero);
        } 

        if(numero>0){
            sumaPositivos=sumaPositivos+numero
            i++
        }

        if (numero<0){
            sumaNegativos=sumaNegativos+numero
        }
        
        if (numero%2==0){
            cantidadPares++;
        }
        if(numero%2!=0){
            cantidadImpares++;
        }
        if (numero==0){
            cantidadCeros++
        }

        if (bandera==0){
            maximo=numero
            letraMaximo=letra
            minimo=numero
            letraMinimo=letra
            bandera=1
        }
        else 
            if (numero>maximo){
                maximo=numero
                letraMaximo=letra
            }    
        else
            if (numero<minimo){
                minimo=numero
                letraMinimo=letra
            }
      
        respuesta=prompt("desea seguir ingresando?")
    }while (respuesta=='s')

    promedio=sumaPositivos/i
    
    document.write("numeros pares " + cantidadPares + "<br>");
    document.write("numeros impares "+ cantidadImpares + "<br>");
    document.write("cantidad de ceros " + cantidadCeros + "<br>");
    document.write("promedio de positivos " + promedio + "<br>");
    document.write("suma de negativos " + sumaNegativos + "<br>");
    document.write("el minimo es " +minimo + " y su letra es "+ letraMinimo + "<br>");
    document.write("el maximo es " +maximo + " y su letra es "+ letraMaximo + "<br>");



}
    