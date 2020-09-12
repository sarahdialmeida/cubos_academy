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