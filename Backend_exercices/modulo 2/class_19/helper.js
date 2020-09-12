const obterNomedosBancos = (codigos) => {
    
    const bancos = {
        001: "Banco do Brasil S.A.",
        033: "Banco Santander (Brasil) S.A.",
        104: "Caixa Econômica Federal",
        237: "Banco Bradesco S.A.",
        341: "Banco Itaú S.A.",
        356: "Banco Real S.A. (antigo)",
        389: "Banco Mercantil do Brasil S.A.",
        399: "HSBC Bank Brasil S.A.",
        422: "Banco Safra S.A.",
        453: "Banco Rural S.A.",
        633: "Banco Rendimento S.A.",
        652: "Itaú Unibanco Holding S.A.",
        745: "Banco Citibank S.A.",
    
    };

    const nomeDoBanco = bancos[codigos]
            .replace("S.A", "")
            .replace("(antigo)", "")
            .replace("Holding", "")
            .trim();
     
        return nomeDoBanco;

};

console.log (obterNomedosBancos(453));

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

const formatarCPF = (string) => {
    const cpf = `${string.substr(0,3)}.${string.substr(3,3)}.${string.substr(6,3)}-${string.substr(9,2)}`;

    return cpf;
    
};



const numeroAgencia = (string) => {
    const agencia = `${string.substr(0, 4)}-${string.substr(4, 1)}`;

    return agencia;
    
};



const numeroContaCorrente = (string) => {
    const conta_corrente = `${string.substr(0,6)}-${string.substr(6, 1)}`;

    return conta_corrente;
    
};

console.log(numeroAgencia("12345"));
console.log(formatarCPF("19001284035"));
console.log(numeroContaCorrente("1234563"));

module.exports = {
    obterNomedosBancos: obterNomedosBancos,
    remover: remover,
    formatarCPF: formatarCPF,
    numeroAgencia: numeroAgencia,
    numeroContaCorrente: numeroContaCorrente,

};