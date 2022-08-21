/* Aguirre Axel, Entrada/Salida-02.js
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{	
	let nombre;
	let edad;
	/*declaro variable local
	let nombre;
	//declaro variable global, prohibido
	// var nombre;
	//el = es un operador de asignación
	nombre = "Axel";
	numero = 7;
	letra = 'a' a
	// comilla doble para palabras o texto, comilla simple para una sola letra
	+ operador de numero o operador de texto
	*/

	nombre = prompt("ingrese su nombre: ");
	edad= prompt ("ingrese su edad: ")
	alert ("su nombre es: " + nombre + " su edad es " + edad);
	// alert(`Su nombre es:  ${nombre} y tiene ${edad} anios` );
	// otra forma de mostrar alertas
}

