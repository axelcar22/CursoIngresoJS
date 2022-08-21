/*Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, 
muestro el mensaje "la resta es xxx y superó el 10". */
function mostrar()
{
    let numero1;
    let numero2;
    let resta;

    numero1=prompt("ingrese primero numero");
    numero1=parseInt(numero1);
    numero2=prompt("ingrese segundo numero");
    numero2=parseInt(numero2);

    resta= numero1-numero2;
    suma=numero1+numero2


    if (numero1==numero2){
        alert ("los numeros " + numero1 + " y " + numero2 + " son iguales");
    }
    if (numero1>numero2){
        if(resta>10){
            alert ("la resta es "+resta + " y superó el 10");
       }
        else{
            alert ("La resta es " + resta);
        }
    }
    if (numero1<numero2){
        alert ("la suma es "+ suma);
    }



}
