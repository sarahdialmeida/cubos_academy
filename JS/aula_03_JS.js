console.log("Olá Mundo!");

const nome = "Sarah";
console.log(nome);

let idade = 29;
console.log(idade);

    idade =30;
console.log(idade);

//let: variáveis mutáveis
//const variáveis imutáveis 

const cidade_natal = "Salvador";
console.log(cidade_natal);

let populacao = "10 mil habitantes";
console.log(populacao);

populacao = "2 milhoes e meio de habitantes";
console.log(populacao);

//arrays: permite o armazenamento ordenado de dados semelhantes
//index é a posiçao de cada item na lista, começando por zero
//o último item da lista tem sempre index = lengh -1
// o último elemento do vetor é tamanho menos 1
//criar vetores []
const nomes = ["Sarah", "Hugo", "Suzanne", "Ligia", "Guilherme"];
console.log(nomes);

console.log(nomes[1]);
nomes [1] = "Renee";
console.log(nomes[1]);
console.log(nomes);

//adiciona um item ao fim da lista
nomes.push("Aurora");
console.log(nomes);

//elimina um item do fim da lista
nomes.pop();
console.log(nomes);

//retira o primeiro item da lista
nomes.shift();
console.log(nomes);

//adiciona um item no começo
nomes.unshift("Sarah");
console.log(nomes);

//tamanho do vetor
console.log(nomes.lenght);


//lista de 5 paises:
const paises = ["Brasil" , "Colombia", "Argentina", "Peru", "Venezuela"];
console.log(paises);

paises.push ("Equador");
console.log(paises);

paises.pop();
console.log(paises);

paises.unshift("Chile");
console.log(paises);

paises.shift();
console.log(paises);

console.log (paises);

console.log (paises.length);
console.log (paises);

console.log(paises[paises.length-1]);
console.log(paises);

console.log(paises[2]);
paises [2] = "Renee";