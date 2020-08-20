const fs = require ("fs")// importando o nosso modulo file system
fs.readFile("texto.txt"/*localizaçao do arquivo*/, (/*aqui um callback; uma funçao que recebe dois parâmetros; o 'err' é sempre o primeiro parâmetro nesse callback*/err, buffer)=> {
    console.log(buffer.toString());
})
