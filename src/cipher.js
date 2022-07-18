const cipher = {
  cifrar: function(texto, desplazamiento){

    let resultado = '';
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let arrayTexto1 = [...texto]; // se separan las letras en la array con spread
    for (let i = 0; i < arrayTexto1.length; i++) {
      
      let letra = arrayTexto1[i];
      let index = alfabeto.indexOf(letra); // se busca la posicion de la letra en el alfabeto
      let indexNum = index + desplazamiento; // se consigue el indice en la array alfabeto de la letra cifrada
      if (indexNum >= 26) {
        indexNum = indexNum - 26;
      }
      let letraNueva = alfabeto[indexNum];
      resultado = resultado + letraNueva ;
      
    }
    
    return resultado;
  },

  descifrar: function(texto) {
    let resultado = texto;
    return resultado;
    }
};

export default cipher;
