const finalizando = () => {
    console.log("Fim");
  }
  
  const contagemRegressiva = (valorInicial) => {
      for(i = valorInicial; i>=0; i--)
      console.log(i);
  }

  finalizando();
  
  contagemRegressiva(10);