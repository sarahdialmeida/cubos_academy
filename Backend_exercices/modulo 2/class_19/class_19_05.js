const numeroContaCorrente = (string) => {
    const conta_corrente = `${string.substr(0,6)}-${string.substr(6, 1)}`;

    return conta_corrente;
    
};

console.log(numeroContaCorrente("1234563"));