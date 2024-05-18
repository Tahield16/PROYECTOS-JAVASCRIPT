let cuenta=parseInt(prompt("Ingrese monto de la cuenta"));
let porcentajePropina=parseInt(prompt("Ingrese porcentaje de propina a cobrar"));
let propina=cuenta*porcentajePropina/100;
let importeFinal=propina+cuenta;
console.log(`cuenta ingresada : ${cuenta}`);
console.log(`porcentaje de la propina : ${porcentajePropina}`)

console.log(`La propina total es ${propina}`);
console.log(`El importe Final es ${importeFinal}`)