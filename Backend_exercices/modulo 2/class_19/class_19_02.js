const remover = (caracteres) => {
   let textoTransformado = caracteres;

   while (textoTransformado.indexOf('.') !== -1){
        textoTransformado = textoTransformado.replace (".", "");
    }
    
    while (textoTransformado.indexOf('-') !== -1){
        textoTransformado = textoTransformado.replace ("-", "");
    }
        
    return textoTransformado;
};

console.log(remover("190.012.840-35"));
console.log(remover("1234-5"));
console.log(remover("123456-3"));