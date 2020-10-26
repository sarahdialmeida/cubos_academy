# Desafio - Unidade 3   <img src="https://media.giphy.com/media/3LCP6RP2SlcaPh6YMe/giphy.gif" width="80">  


## Introdução

Imagine que você trabalha como desenvolvedor(a) numa emissora de TV, no setor esportivo. Esta emissora mantém um site sempre atualizado, com bastante conteúdo, inclusive os resultados dos jogos de futebol e a tabela de classificação do brasileirão.

Visando atualizar-se, a empresa solicitou que você desenvolvesse um novo dashboard administrativo para alimentar o site, no qual será possível:

* Ver todos os jogos do brasileirão, separados por rodada
    * No [script de criação do banco de dados que fornecemos aqui](https://drive.google.com/file/d/1Q5O6I9qNAQomTS0jPYg-hvud2yijZo8Y/view?usp=sharing) já contém a rodada de cada jogo

* Ver a classificação atualizada
    * Podendo ser possível ordenar a tabela baseando-se em outros critérios:
        * Número de partidas jogadas
        * Número de vitórias/derrotas
        * Número de gols feitos/sofridos
        * Saldo de gols
* Fazer login
    * Através de um email e senha
    * No [script de criação do banco de dados que fornecemos aqui](https://drive.google.com/file/d/1Q5O6I9qNAQomTS0jPYg-hvud2yijZo8Y/view?usp=sharing) já é inserido um único usuário. 
* Editar resultado das partidas (apenas se estiver logado)

O visual da página deve ficar semelhante a [esta](https://csb-xphbp-ny5ayt8bn.vercel.app/):

<figure>

![](https://i.imgur.com/uGwv6K4.png)
<figcaption>Deslogado</figcaption>
</figure>

<figure>

![](https://i.imgur.com/bQbxAtZ.png)
<figcaption>Logado</figcaption>
</figure>

:::	success
<big><b>Dica! 💡</b></big>

Para permitir que vocês comecem pelo front ou pelo back, como preferirem, implementamos um [back-end de referência](https://desafio-3-back-cubos-academy.herokuapp.com/). Todos os endpoints estão disponíveis (por exemplo, https://desafio-3-back-cubos-academy.herokuapp.com/jogos/1).

Use-o para integrar com o front caso ainda não tenha feito o back, depois é só trocar a URL. 😉
:::

## Regras de negócio
- O usuário pode passar as rodadas no cabeçalho da tabela de jogos. Ao passar, são exibidos os jogos daquela rodada
- O usuário pode editar o placar de cada jogo (ao clicar num botão), alterar os placares e salvar. Mas, apenas se estiver logado.
- O usuário pode logar preenchendo o seu login e sua senha. Para testar utilize as seguintes credenciais:
`Email: admin@cubos.academy`
`Senha: vouserdev`
- Apenas estas credenciais deverão ser autorizados, qualquer outro login deverá ser negado. No [script de criação do banco de dados que fornecemos aqui](https://drive.google.com/file/d/1Q5O6I9qNAQomTS0jPYg-hvud2yijZo8Y/view?usp=sharing) é feita a criação deste usuário, apenas.
- A tabela de classificação deve estar sempre atualizada. Lembre-se que, caso algum resultado de algum jogo seja alterado, a tabela de classificação pode acabar tendo que mudar também.
- O back-end deve fornecer a tabela de classificação ordenada seguindo os seguintes critérios:
    1. Número de pontos
    2. Em caso de mesmo número de pontos, número de vitórias
    3. Em caso de mesmo número de vitórias, saldo de gols (diferença entre gols feitos e sofridos)
    4. Em caso de mesmo saldo de gols, número de gols feitos
    5. Em caso de mesmo número de gols feitos, ordem alfabética.
- Para o calculo do número de pontos a regra é a seguinte:
    * Para cada jogo vencido, o time vencedor ganha 3 pontos.
    * Para cada jogo empatado, cada time ganha 1 ponto.
    * Para cada jogo perdido, o time perdedor não ganha nenhum ponto.
    
- O usuário pode re-ordenar a tabela de classificação por qualquer uma de suas colunas. Faça essa reordenação no front-end.


## Requisitos técnicos

### Front-end

1. Utilize React
2. O mais importante é funcionar corretamente.
3. Aplicar corretamente os conceitos de componentização será um diferencial
4. Escolher corretamente os estados de cada componente será um diferencial
5. O código estar bem organizado será um diferencial


#### Recursos para o front-end

Para fazer requisições `POST`, `PUT`, `DELETE`, etc, autenticadas ou não, pode-se usar a função:
```javascript
function fazerRequisicaoComBody(url, metodo, conteudo, token) {
    return fetch(url, {
        method: metodo,
        headers: {
            "Content-Type": "application/json",
            Authorization: token && `Bearer ${token}`,
        },
        body: JSON.stringify(conteudo),
    });
}
```

:::spoiler Imagens
- Seta pra esquerda (![](https://systemuicons.com/images/icons/arrow_left.svg)): https://systemuicons.com/images/icons/arrow_left.svg
- Seta pra direita (![](https://systemuicons.com/images/icons/arrow_right.svg)): https://systemuicons.com/images/icons/arrow_right.svg
- Seta pra baixo (![](https://systemuicons.com/images/icons/arrow_down.svg)): https://systemuicons.com/images/icons/arrow_down.svg
- Seta pra cima (![](https://systemuicons.com/images/icons/arrow_up.svg)): https://systemuicons.com/images/icons/arrow_up.svg
- Ordenação (![](https://systemuicons.com/images/icons/sort.svg)): https://systemuicons.com/images/icons/sort.svg
- Check (![](https://systemuicons.com/images/icons/check.svg)): https://systemuicons.com/images/icons/check.svg
- Caneta (![](https://systemuicons.com/images/icons/pen.svg)): https://systemuicons.com/images/icons/pen.svg
:::

:::spoiler Cores
- Cor de fundo geral: `rgb(236, 235, 220)`
- Cor de fundo dos títulos dos cards e botões: `rgb(138, 185, 157)`
- Cor de fundo do cabeçalho: `#2b7148`
- Cor de fundo dos botões do cabeçalho: `#04375c`
- Cores de fonte: `white` e `black`
:::

:::spoiler Fonte
`@import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap");`
:::

### Back-end

1. Você deve construir sua API Restful para servir a sua própria aplicação React.
2. Todos os dados necessários devem estar armazenados permamentemente num banco de dados. 
3. Serão necessárias apenas duas tabelas, usuários e jogos. A classificação deve ser calculada no back-end a partir da lista de jogos. 
4. Utilizar as ferramentas e boas práticas aprendidas, além de facilitar sua vida, será um diferencial.
5. O código estar bem organizado será um diferencial.
6. Lembre-se de seguir as boas práticas de segurança principalmente na parte de autenticação e sessão.

Segue abaixo a lista de endpoints que deverão ser implementados:

| Funcionalidade | Método | Caminho |
| -------- | -------- | -------- |
| Listar jogos por rodada     | `GET`     | `/jogos/:rodada`   |
| Editar placar de um jogo     | `POST`     | `/jogos`   |
| Obter classificação | `GET` | `/classificacao` |
| Autenticar     | `POST`     | `/auth`   |

Para editar o placar de um jogo, sugerimos passar um objeto com o seguinte formato:
```javascript=
{
	"id": 3,
	"golsCasa": 0,
	"golsVisitante": 0
}
```

Para autenticar, passe um objeto com o seguinte formato:
```javascript=
{
	"email": "admin@cubos.academy",
	"password": "vouserdev"
}
```



#### Algumas dicas para o back-end
1. Crie uma nova pasta para o desafio e monte a estrutura padrão vista nas aulas, com pastas e responsabilidades separadas.
2. Instale as dependencias conforme for precisando, começando pelo `koa`, `koa-bodyparser` e `koa-router`.
3. Use o DBeaver para criar as tabelas e populá-las com o script que fornecemos.
4. Faça a conexão com o seu banco de dados. Pode usar o mesmo criado no Heroku, ou pode fazer um do zero. Lembre-se de instalar o `pg`.
5. Implemente os endpoints na ordem que julgar mais fácil.
6. Não hesite em consultar novamente as aulas para lembrar os conceitos que precisar.

## Regra de Ouro

Você não precisa se limitar a este escopo, arquitetura ou visual. Fique à vontade para melhorar a aplicação em qualquer aspecto, mas garanta que o básico está funcionando primeiro. Seguem algumas sugestões de possíveis melhorias:

- Cadastrar novos jogos
- Excluir jogos
- Pintar os 4 primeiros como classificados para libertadores
- Pintar os 4 últimos como rebaixados para a segunda divisão.
- Criar uma tabela para times no back-end, que guarde também a url de imagens dos seus escudos. Neste caso, utilizar join para relacionar a tabela de times com a de jogos. Assim será possível mandar junto com o resultado das partidas a url das imagens dos escudos dos times(vai ficar top, hein?)
- Colocar escudos dos times no front-end
- Usem a criatividade!
