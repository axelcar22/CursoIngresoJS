/*Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100, 
que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito 
se le agrega un 10% mas de descuento.
Si es África tiene un 60% de descuento y si además paga por 
mercadoPago o efectivo se le agrega un 15% mas de descuento.
Si es Europa tiene un 20% de descuento y si ademas paga por 
débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%*/
function mostrar()
{
    let continente;
    let dias;
    let formaPago;
    let precioDias;

    continente=document.getElementById("Marca").value;
    dias=prompt("ingrese cantidad de dias");
    dias=parseInt(dias);
    formaPago=prompt("ingrese forma de pago");

    precioDias=dias*100

    switch(continente){
        case "América":
            alert (precioDias*50/100);
            switch (formaPago){
                case "debito":
                alert (precioDias*40/100)
            }
        break;
        case "África":
            

    }







   // alert ("usted de queda en "+ continente+ " y debe pagar " +precioDias )



      
      
}









