import cipher from './cipher.js';



window.addEventListener("load", inicio, true);
let texto = '';
let desplazamiento = 0;

function inicio(){
  document.getElementById("mensaje").addEventListener("keyup",function(){ // Cuando se escriba en minisculas se convierte en mayusculas
    this.value = this.value.toUpperCase();
  }, true);
  document.getElementById("cifrar").addEventListener("click", function(){ // funcion que trae el elemento cifrar y lo escucha en el click
    texto = document.getElementById("mensaje").value; //
    desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    document.getElementById("mensaje2").value = cipher.cifrar(texto, desplazamiento);
  }, true);
  document.getElementById("descifrar").addEventListener("click", function(){ // funcion que trae el elemento descifrar y lo escucha en el click
    texto = document.getElementById("mensaje").value;
    desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    document.getElementById("mensaje2").value = cipher.descifrar(texto, desplazamiento);
}, true);
}




