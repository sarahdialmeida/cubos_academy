const form = document.querySelector("form");
const input = document.querySelector("input");
const tarefasAFazer = document.querySelector(".to-do");
const tarefasFeitas = document.querySelector(".done");

function removerTarefa(event) {
	const tarefa = event.target.closest("li");
	tarefa.remove();
}

function marcarTarefaComoFeita(event) {
	const tarefa = event.target.closest("li");
	const texto = tarefa.querySelector("span");
	
	if (event.target.checked) {
		tarefasFeitas.append(tarefa);
	} else {
		tarefasAFazer.append(tarefa);
	}
}

function adicionarTarefa(event) {
	event.preventDefault();
	
	const tarefa = document.createElement("li");
	
	const botaoDeDeletarTarefa = document.createElement("button");
	botaoDeDeletarTarefa.innerText = "Deletar";
	botaoDeDeletarTarefa.addEventListener("click", removerTarefa);
	
	const textoDaTarefa = document.createElement("span");
	textoDaTarefa.innerText = input.value;
	
	const checkboxDeTarefaFeita = document.createElement("input");
	checkboxDeTarefaFeita.setAttribute("type", "checkbox");
	checkboxDeTarefaFeita.addEventListener("change", marcarTarefaComoFeita);
	
	tarefa.append(checkboxDeTarefaFeita);
	tarefa.append(textoDaTarefa);
	tarefa.append(botaoDeDeletarTarefa);
	
	tarefasAFazer.appendChild(tarefa);
	
	input.value = "";
}

form.addEventListener('submit', adicionarTarefa);
