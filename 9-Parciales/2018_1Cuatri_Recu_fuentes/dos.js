/**Bienvenidos.
mostrar en un solo alert * el mensaje "usted es xxxxx y vive en 
la localidad de xxxxxxxx". */


function mostrar()
{
    let nombre;
    let localidad;

    nombre=document.getElementById("elNombre").value
    localidad=document.getElementById("laLocalidad").value

    alert ("Su nombre es " + nombre + " y su localidad es " + localidad);
  
}
