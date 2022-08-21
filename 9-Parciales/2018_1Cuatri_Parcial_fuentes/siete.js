/**Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6. */

function mostrar()
{
    let notas;
    let sexo;
    let sumaNotas;
    let promedio;
    let notaBaja;
    let bandera;
    let notaMayorSeis;
    let sexoMenor;

    i=0
    sumaNotas=0
    notaBaja=10
    bandera=0
    notaMayorSeis=0

//Ingreso de datos
    for (i=0;i<5;i++){
        notas=prompt("Ingrese la nota");
        notas=parseInt(notas);

        while ((isNaN(notas)) || notas<0 || notas>10){
            notas=prompt("Error. Ingrese la nota");
            notas=parseInt(notas);
        }

        sexo=prompt("Ingrese el sexo");
        sexo= sexo.toLowerCase();

        while (sexo!='m' && sexo !='f'){
            sexo = prompt("Error. Ingrese sexo");
            sexo= sexo.toLowerCase();
        }
 //       
        sumaNotas= sumaNotas+ notas;

        if (notas<notaBaja){
            notaBaja=notas;
            sexoMenor=sexo     
        }

        if(sexo=='m' && notas>=6){
            notaMayorSeis++
        }
    }

    promedio =sumaNotas/5;
  
    alert ("El promedio es " + promedio);
    alert ("La nota mas baja es "+notaBaja +" y su sexo es " + sexoMenor)
    alert ("La cantidad de varones que obtuvieron mas de 6 es " + notaMayorSeis)
}
