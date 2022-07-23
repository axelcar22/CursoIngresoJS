/*3.
    Aguirre Axel ferreteria, pinturas
Para el departamento de Pinturas:
    Aguirre Axel - TP- jsFerreteriaConstruccion
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () 
{
    
    let fahrenheit;

    let temperatura;


    temperatura = ((parseInt) (document.getElementById("txtIdTemperatura").value));
    fahrenheit = ((temperatura - 32) * (5/9))

    alert (temperatura + " º fahrenheit, equivalen a " +fahrenheit + "º centigrados");

}

function CentigradosFahrenheit () 
{
    let centigrados;

    temperatura = ((parseInt) (document.getElementById("txtIdTemperatura").value));
    centigrados = ((temperatura * 9/5) +32)

    alert (temperatura + " º centigrados, equivalen a " +centigrados +"º fahrenheit")

	
}
