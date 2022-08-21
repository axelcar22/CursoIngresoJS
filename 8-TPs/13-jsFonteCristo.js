/*El departamento de NUMEROS ESPECIALES  del instituto matemático  
FonteCristo  nos está pidiendo una aplicación que verifique las distintas 
cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para 
verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares 
desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares 
desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números 
divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número 
primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números 
Primos desde el número ingresado hasta el cero.
*/
/*function ComenzarIngreso () 
{   
    let numPositivo;
    numPositivo=document.getElementById("txtIdNumero").value; 
    while (numPositivo<0){
        alert ("Ingrese un numero positivo.")
    }
}
*/
function NumerosPares()
{   
    let numPositivo;
    let contador;
    let i;

    contador=0;
    i=0;
    numPositivo=document.getElementById("txtIdNumero").value;
     
    for (i=numPositivo;i>=0;i--){
        if (i%2==00){
            contador++
           // alert (i) 
        }        
    }
    alert (contador)
}

function NumerosImpares()
{   
    let i;
    let num;
    let contador;

    i=0;
    contador=0;
    num=document.getElementById("txtIdNumero").value;

    for (i=num;i>0;i--){
        if (i%2!=0){
            contador++
           // alert (i)
        }
    }
    alert (contador)
}

function NumerosDivisibles()
{   
    let i;
    let num;
    let contador;

    num=document.getElementById("txtIdNumero").value;
    num=parseInt(num)
    contador=0;
    i=1;

    for (i=1;i<101;i++){
        if (num%i==0){ //el resto tiene que ser cero
            contador++
           // document.write( i + "<br>")
        }
    }
    alert ("La cantidad de numeros divisibles es "+ contador);

}

function VerificarPrimo()
{
    let num;
    let i;
    let contador;

    num=document.getElementById("txtIdNumero").value;
    i=1;
    contador=0;

    for (i=1;i<=num;i++){
        if (num%i==0){
            contador++
        }
    }
    if (contador==2){
        alert (num + " es un numero primo")
    }else{
        alert (num + " no es un numero primo")
    }  
}

function NumerosPrimos()
{
    let num;
    let contador;
    let i;
    let j;
    let contadorPrimos;

    num=document.getElementById("txtIdNumero").value;
    contadorPrimos=0
    i=0;
    j=0;
    
    for (i=0;i<=num;i++){ 
        contador=0;
        for (j=0;j<=num;j++){ 
            if (i%j==0){
                contador++
            }
        }   
        if (contador==2){  
            contadorPrimos++; 
        }                      
    } 


    alert (contadorPrimos)
   
}


 