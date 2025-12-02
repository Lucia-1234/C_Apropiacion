//temperatura de una ciudad
import prompt_sync from 'prompt-sync'
const prompt = prompt_sync();

//se solicita al usuario la temperatura de la ciudad
let temperatura = parseInt(prompt("Ingrese la temperatura de la ciudad: "));

//se crea una condicional dependiendo de la temperatura 
if (temperatura >= 30) {
  console.log("hace calor")
} else
  console.log("Clima agradable")
