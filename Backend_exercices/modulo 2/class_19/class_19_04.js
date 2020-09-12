const numeroAgencia = (string) => {
    const agencia = `${string.substr(0, 4)}-${string.substr(4, 1)}`;

    return agencia;
    
};

console.log(numeroAgencia("12345"));