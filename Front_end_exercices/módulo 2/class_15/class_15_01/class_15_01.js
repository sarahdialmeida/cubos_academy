const inputAltura = document.querySelector(".altura");
const inputPeso = document.querySelector(".peso");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const imc = (
        inputPeso.valueAsNumber / (
            inputAltura.valueAsNumber * inputAltura.valueAsNumber
        )
    ).toFixed(2);

    alert(imc);
});