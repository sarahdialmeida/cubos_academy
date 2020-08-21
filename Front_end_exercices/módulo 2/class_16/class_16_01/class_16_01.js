const form = document.querySelector("form");
const input = document.querySelector("input");
const to_do = document.querySelector(".aFazer");
const done = document.querySelector(".done");

form.addEventListener("submit", event => {
    event.preventDefault();

    const tarefa = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    const botaoDeletar = document.createElement("button")
    botaoDeletar.innerText = "Deletar" /*assim se configura o conteudo textual*/

    tarefa.append(checkbox);
    tarefa.append(input.value);
    tarefa.append(botaoDeletar);
    /*append inclui textos ou elementos*/

    to_do.append(tarefa);

    input.value = "";
});