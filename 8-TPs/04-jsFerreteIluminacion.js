/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidadLamparas;
    let cuenta;
    let descuento;
    let marca;
    let precioConDescuento;
    let ingresosBrutos;
    let cuenta2

    cantidadLamparas= document.getElementById ("txtIdCantidad").value;
    cantidadLamparas= parseInt (cantidadLamparas);
    cuenta = cantidadLamparas*35;
    marca= (document.getElementById ("Marca").value);

    if (cantidadLamparas>=6 )
    {
        descuento= (50 * cuenta /100);
    }
    if(cantidadLamparas == 5) {
        if(marca == "ArgentinaLuz" ){
        descuento = (40 * cuenta /100);
        } 
            else{
                descuento = (30 * cuenta /100);
            }  
    }
    if (cantidadLamparas == 4) {
        if(marca == "ArgentinaLuz" || marca  == "FelipeLamparas"){
            descuento = (25 * cuenta /100);
        }
        else {
            descuento = (20 * cuenta /100);
        }

    }
    if (cantidadLamparas ==3) {
        if (marca=="ArgentinaLuz"){
        descuento = (15 * cuenta /100);
        }
            else {
                if (marca=="FelipeLamparas"){
                descuento = (10 * cuenta /100);
            }
                else{
                    descuento = (5 * cuenta /100);
                }
            }
    }

    precioConDescuento= (cuenta - descuento);
    (document.getElementById ("txtIdprecioDescuento").value) =precioConDescuento;

    cuenta2 = (precioConDescuento *10/100)
    ingresosBrutos= precioConDescuento + cuenta2 
    if (precioConDescuento > 120){
    alert ("Usted pago $ " + ingresosBrutos +" de IIBB!." );
    }
}
