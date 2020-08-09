function processarVotos(votosA, votosB, votosC) {
    //Sua resolução aqui

    //exercicio 1: Imprima na tela o total de votos até o momento

     const total = votosA + votosB + votosC

    /*imprimir(`O total de votos até agora é ${total}`);*/


    //exercicio 2: Imprima na tela a candidata que está ganhando. Em caso de empate pode imprimir o nome de qualquer uma delas.

/*  let vencedora;
    let votosvencedora;  

     if(votosA> votosB){
        //a ganhando
        vencedora = "A";
        votosvencedora = votosA;
    } else {
        vencedora = "B";
        votosvencedora = votosB;
        //b ganhando
    }
    if  (votosC > votosvencedora){
        // c venceu
        votosvencedora = votosC;
        vencedora = "C";
    }

    imprimir(`quem está ganhando é a candidata ${vencedora}`); */


      //exercicio 3: Imprima na tela o nome da candidata que está ganhando e a quantidade de votos dela.


    /*let vencedora;
    let votosvencedora; 

if(votosA> votosB){
        //a ganhando
        vencedora = "A";
        votosvencedora = votosA;
    } else {
        vencedora = "B";
        votosvencedora = votosB;
        //b ganhando
    }
    if  (votosC > votosvencedora){
        // c venceu
        votosvencedora = votosC;
        vencedora = "C";
    }

    if (votosvencedora === 1) {
        imprimir(`quem está ganhando é a candidata ${vencedora} com ${votosvencedora} voto`);
    } else {
        imprimir(`quem está ganhando é a candidata ${vencedora} com ${votosvencedora} votos`);

    }*/

    //exercicio 4: Imprima na tela o nome da candidata que está ganahndo e a porcentagem dos votos totais que ela tem.
   
   /* let vencedora;
    let votosvencedora; 

if(votosA> votosB){
        //a ganhando
        vencedora = "A";
        votosvencedora = votosA;
    } else {
        vencedora = "B";
        votosvencedora = votosB;
        //b ganhando
    }
    if  (votosC > votosvencedora){
        // c venceu
        votosvencedora = votosC;
        vencedora = "C";
    }

    const porcentagem = votosvencedora / (votosA + votosB + votosC) * 100;
    imprimir(`Quem está vencendo é a jogadora ${vencedora} com ${porcentagem.toFixed(2)}% dos votos`);*/

    //exercicio 5: Imprima na tela o nome da candidata que está ganhando e se haverá segundo turno (não há segundo turno quando a candidata mais votada tem, pelo menos, 50% dos votos totais + 1 voto).

    /*let vencedora;
    let votosvencedora; 

    if(votosA> votosB){
        //a ganhando
        vencedora = "A";
        votosvencedora = votosA;
    } else {
        vencedora = "B";
        votosvencedora = votosB;
        //b ganhando
    }
    if  (votosC > votosvencedora){
        // c venceu
        votosvencedora = votosC;
        vencedora = "C";
    }

    const porcentagem = votosvencedora / (votosA + votosB + votosC) * 100;
    if (porcentagem > 50){
        imprimir(`Quem está vencendo é a jogadora ${vencedora} com ${porcentagem.toFixed(2)}% dos votos e não haverá segudo turno`);
    }else {
        imprimir(`Quem está vencendo é a jogadora ${vencedora} com ${porcentagem.toFixed(2)}% dos votos mas não haverá segudo turno`);
    }*/
    
    //exercicio 6: Imprima na tela a candidata que está ganhando e quantos votos ela tem de vantagem para a segunda colocada. Em caso de empate imprima o nome das que estão empatadas.

   
    const vencedora = {
        nome: "",
        votos: 0
    };
    
    const ranking = [];

    if(votosA> votosB) {
        //a ganhando
        hanking[0]= {
            nome: "A",
            votos: votosA
        };
        ranking [1] = {
            nome: "B",
            votos: votosB
        }

    } else {
        //b ganhando
        hanking[0]= {
            nome: "B",
            votos: votosB
        };
        ranking [1] = {
            nome: "A",
            votos: votosA
        };
    }
    
    if (votosC > hanking[0].votos) {
         //c venceu
        ranking.unshift({
            nome:"C",
            votos: votosC
        });
    } else {
        if (votosC > ranking [1].votos) {
            ranking.push(ranking[1]);
            ranking[1] = {
                nome:"C",
                votos: votosC
            }
        } else {
            ranking.push({
                nome:"C",
                votos: votosC 
            })
        }
    }
    const vantagem = ranking[0].votos - ranking[1].votos;
    if (vantagem === 0) {
        if(ranking[1].votos - ranking[2].votos === 0) {
            imprimir ("Temos um empate triplo!");
        } else {
        if (vantagem === 1) {
            imprimir (`Quem está vencendo é a candidata ${ranking[0].nome} com ${vantagem} voto de vantagem.`);
        } else {
            imprimir (`Quem está vencendo é a candidata ${ranking[0].nome} com ${vantagem} votos de vantagem.`);
        }
    }
    
}


//Não mexa em nada daqui pra baixo
let votosA = 0, votosB = 0, votosC = 0;

function imprimir(text) {
    document.getElementById("imprimir").innerHTML= text;
}

document.getElementById("a").addEventListener("click", () => {
    votosA++;
    document.getElementById("a").innerHTML = votosA;
    processarVotos(votosA, votosB, votosC);
});

document.getElementById("b").addEventListener("click", () => {
    votosB++;
    document.getElementById("b").innerHTML = votosB;
    processarVotos(votosA, votosB, votosC);
});

document.getElementById("c").addEventListener("click", () => {
    votosC++;
    document.getElementById("c").innerHTML = votosC;
    processarVotos(votosA, votosB, votosC);
});