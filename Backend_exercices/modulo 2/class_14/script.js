/*
  Não altere nada ABAIXO disso até o próximo comentário;

  -- Este código permite que tenhamos uma 
  -- experiência interativa com o usuário;
  -- Não é necessário entendê-lo neste momento.
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
  Não altere nada ACIMA deste comentário;;
*/

/**
 * Escreva seu código aqui embaixo;
 */

 const cadastros = [
     {
         nome: "Sarah",
         dataDeNascimento: "18/04",
         cpf: "00805259546",
         profissao: "developer",
         deletado: false

     }
 ];
 function listarUsuarios(){
    console.log (cadastros);
 }
 function cadastroUsuario(usuario){
    cadastros.push(usuario);

 }
 
//console.log (listarUsuarios());

function deletarUsuario(cpf){
   //for (cadastro of cadastros){
        //if (cpf === cadastros)
   //}
} 
const cpf = "00805259546" 
   for(i = 0; i < cadastros.length; i++){
        if (cpf === cadastros[i].cpf){
            console.log ("viva")
        }
   }