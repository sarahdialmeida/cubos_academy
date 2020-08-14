let tamanhoFonte = 18;
const fonte = document.querySelector("fonte");
const aumentar = document.querySelector(".aumentar");
const diminuir = document.querySelector(".diminuir");

aumentar.addEventListener("click", () =>{
	tamanhoFonte += 1;
    fonte.style["font-size"] = tamanhoFonte + "px";
});

diminuir.addEventListener("click", () =>{
	tamanhoFonte -= 1;
    fonte.style["font-size"] = tamanhoFonte + "px";
});