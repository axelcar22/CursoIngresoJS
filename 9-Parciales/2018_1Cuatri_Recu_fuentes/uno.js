/**Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo 
por prompt y que muestre el perímetro por alert. */

function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho=prompt("Ingrese ancho: ");
    ancho=parseInt(ancho);
    largo=prompt ("Ingrese largo");
    largo=parseInt(largo);

    perimetro= (ancho + ancho + largo + largo)

    alert ("El perimetro es " + perimetro);




}
