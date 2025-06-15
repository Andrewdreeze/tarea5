//Función para sumar las notas

let notasAlumno = [6,8,9,2,5,10]; //arreglo con las notas

function sumarNotas(notas) {
  // Suma de notas en una sola línea
  let suma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5];
  return suma; //devolución de la suma total
}

//función para calcular el promedio
function calculoPromedio(notas){
    let suma = sumarNotas(notas); //acá se obtiene la suma anterior
    let promedio = suma / notas.length; //divide la suma por la cantidad de notas.
    return promedio; //devolvemos el promedio

}

console.log("Promedio de notas:", calculoPromedio(notasAlumno));// Mostramos en consola el promedio de las notas