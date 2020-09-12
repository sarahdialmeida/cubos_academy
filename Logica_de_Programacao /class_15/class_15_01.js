const finalizando = () => {
  console.log("Fim");
}

const contagemRegressiva = (valorInicial, aoFinalizar) => {
    for(i = valorInicial; i>=0; i--)
    console.log(i);
}

contagemRegressiva(10, finalizando());