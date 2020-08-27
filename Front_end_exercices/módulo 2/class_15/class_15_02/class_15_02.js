const inputAdultos = document.querySelector(".adultos");
const inputCriancas = document.querySelector(".criancas");
const button = document.querySelector("button");

const adultosValores = {
    'Berinjela': 0.5,
    'Abobrinha': 0.5,
    'Milho': 2,
    'Quiabo': 5,
    'Litros de Suco de Cacau': 2,
};

const criancasValores = {
    'Berinjela': 0.25,
    'Abobrinha': 0.25,
    'Milho': 1,
    'Quiabo': 2.5,
    'Litros de Suco de Cacau': 1,
};

button.addEventListener("click", () => {
    const adultos = inputAdultos.valueAsNumber;
    const criancas = inputCriancas.valueAsNumber;

    const total = {
        'Berinjela': 0,
        'Abobrinha': 0,
        'Milho': 0,
        'Quiabo': 0,
        'Litros de Suco de Cacau': 0,
    };
    
    const chaves = Object.keys(total);
    for (let i = 0; i < chaves.length; i++) {
        const chave = chaves[i];
        
        const totalAdultos = adultos * adultosValores[chave];
        const totalCriancas = criancas * criancasValores[chave];
        total[chave] = totalAdultos + totalCriancas;
    }

    let mensagem = "";
    for (let i = 0; i < chaves.length; i++) {
        const chave = chaves[i];
        const linha = chave + ": " + total[chave];
        mensagem += linha + "\n";
    }

    alert(mensagem);
});