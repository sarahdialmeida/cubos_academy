const formatarCPF = (string) => {
    const cpf = `${string.substr(0,3)}.${string.substr(3,3)}.${string.substr(6,3)}-${string.substr(9,2)}`;

    return cpf;
    
};

console.log(formatarCPF("19001284035"));