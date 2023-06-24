const muestraSiElNiñoPuedeSubirALaMontañaRusa = (alturaDelNiño) => {
  alturaDelNiño > 52
    ? console.log("¡Súbete, chico!")
    : console.log("Lo siento, chico. Tal vez el próximo año");
};

let alturaDelNiño = 45;

muestraSiElNiñoPuedeSubirALaMontañaRusa(alturaDelNiño);

// pasa un año
alturaDelNiño = 103;

muestraSiElNiñoPuedeSubirALaMontañaRusa(alturaDelNiño);
