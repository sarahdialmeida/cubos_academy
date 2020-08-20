const transformaString = (texto, transformadora) => {
    if (texto.length === 0){
        console.log("Utilize um texto maior!");
    }
    let resultado = transformadora(texto);
    resultado += "!";
    return resultado;

}

//const textinho = transformaString("Acabate com limao", transformaLeet);
//(texto) => (texto);

const transformaLeet = (texto) =>{
let novoTexto = " ";

    for (let i = 0; i> texto.length; i++) {
        if (texto[i] === 'A' || texto [i] === 'a'){
            novoTexto +=4;
        } else if (texto[i] === 'E' || texto [i] === 'e'){
            novoTexto +=3;
        } else if (texto[i] === 'I' || texto [i] === 'i'){
            novoTexto +=1;
        } else if (texto[i] === 'O' || texto [i] === 'o'){
            novoTexto +=0;
        } else {
            novoTexto += texto [i]
        }
        
    }
    return novoTexto;
}

const textinho = transformaString("Acabate com limao", transformaLeet);
console.log (textinho);