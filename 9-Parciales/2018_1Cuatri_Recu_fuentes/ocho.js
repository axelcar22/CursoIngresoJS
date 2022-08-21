/**Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario 
quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/

function mostrar()
{
    let letra;
    let numero;
    let respuesta;
    let contadorPares;
    let contadorImpares;
    let contadorCeros;
    let sumaPositivos;
  //  let promedio;

    contadorPares=0
    contadorImpares=0
    contadorCeros=0
    sumaPositivos=0

    do{
        letra= prompt("Ingrese letra ") 
        while (!isNaN (letra) || (letra.length>1) ){
            letra=prompt ("Error, ingrese una letra"); 
        }

        numero =prompt ("Ingrese un numero entre -100 y 100")
        while (isNaN (numero) || numero <-100 ||  numero >100){
            numero=prompt("Error. Ingrese un numero entre -100 y 100")
        }

        if (numero%2==0){
            contadorPares++
        }
        if (numero%2!=0){
            contadorImpares++
        }
        if (numero==0){
            contadorCeros++
        }
        respuesta=prompt ("Desea seguir ingresando datos? s/n")

    }while (respuesta=='s')


    document.write("La cantidad de numeros pares es " + contadorPares + "<br>");
    document.write("La cantidad de numeros pares es " + contadorImpares)+ "<br>";


}

/** ejercicio d
 *         if (numero>0){
            sumaPositivos=sumaPositivos+numero;
        }
            promedio=sumaPositivos/
 */