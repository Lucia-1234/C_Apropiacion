// clasificar la velocidad de un vehiculo 
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

//variable para preguntar la edad 
let velocidad = parseInt(prompt("Ingrese la velocidad del vehiculo: "));

//si es menor a 30
if (velocidad < 30) {
  console.log("Muy lento")
};

//si esta entre 30 y 60
if (velocidad >= 30 && velocidad <= 60) {
  console.log("Velocidad moderada")
};

//si esta entre 61 y 100
if (velocidad >= 61 && velocidad <= 100) {
  console.log("Rapido")
};

//si es mayor a 100
if (velocidad > 100) {
  console.log("Muy rapido")
};