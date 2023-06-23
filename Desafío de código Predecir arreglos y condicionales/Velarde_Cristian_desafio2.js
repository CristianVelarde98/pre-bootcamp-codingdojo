// Fragmento de codigo 1
function muestraInformaciónContacto() {
  var auntContactInfo = [
    "Paula",
    "Smith",
    "Calle Principal 1234",
    "St. Louis",
    "MO",
    12345,
  ];
  console.log(auntContactInfo); // [ 'Paula', 'Smith', 'Calle Principal 1234', 'St. Louis', 'MO', 12345 ]
}
// muestraInformaciónContacto();

// Fragmento de codigo 2
function muestraListaDeCompras() {
  var produce = ["manzanas", "naranjas"];
  var frozen = ["brócoli", "helado"];
  frozen.push("croqueta de papa");
  console.log(frozen); // [ 'brócoli', 'helado', 'croqueta de papa' ]
}
// muestraListaDeCompras();

// Fragmento de codigo 3
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary); // [ 'Bambi', 'Beetlejuice', 'Toy Story', 'Zoro' ]
