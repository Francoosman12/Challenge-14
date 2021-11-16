let x = prompt("Ingrese un numero:");
let y = prompt("Ingrese otro numero:");

if (!isNaN(x) && !isNaN(y)){
  if (x>y) {
    console.log("El primer número es mayor que el segundo");
  } else {
    if (x<y) {
      console.log("El primer número es menor que el segundo");
    } else {
      console.log((x == y) + " Los números son iguales");
    }
  }
}