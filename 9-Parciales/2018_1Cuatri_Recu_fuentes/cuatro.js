/*Bienvenidos.
(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".*/

function mostrar()
{
    let num1;
    let num2;

    num1=prompt("Ingrese primer numero: ");
    num1=parseInt(num1);
    num2=prompt("Ingrese segundo numero ");
    num2=parseInt(num2);

    if(num1==num2) {
        alert ("Los numeros " + num1 + " y " + num2+" son iguales");
    }
    else if (num1>num2) {
        alert (num1/num2);
    }




}
