//dados
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const form = document.querySelector("form");

//cancelar evento padrão
form.addEventListener("submit", function (event) {
    event.preventDefault();
    calcularIMC();
});

function calcularIMC() {
    //convertando dados
    const pesoValue = Number(peso.value.replace(",", "."));
    const alturaValue = Number(altura.value.replace(",", "."));
    
    //validando dados
    if (!pesoValue || !alturaValue) {
        alert("Por favor, preencha os valores corretamente.");
        return;
    } else if (pesoValue <= 0 || alturaValue <= 0) {
        alert("Por favor, insira valores positivos para peso e altura.");
        return;
    }
    //processando dados
    const imc = pesoValue / (alturaValue * alturaValue);
    //output
    const resultado = document.getElementById("resultado");
    const status = document.getElementById("status");
    
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;

    if (imc < 16) {
        status.innerHTML = "Status: Magreza grave";
    } else if (imc >= 16 && imc < 17) {
        status.innerHTML = "Status: Magreza moderada";
    } else if (imc >= 17 && imc < 18.5) {
        status.innerHTML = "Status: Magreza leve";
    } else if (imc >= 18.5 && imc < 25) {
        status.innerHTML = "Status: Peso normal";
    } else if (imc >= 25 && imc < 30) {
        status.innerHTML = "Status: Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        status.innerHTML = "Status: Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        status.innerHTML = "Status: Obesidade grau II";
    } else {
        status.innerHTML = "Status: Obesidade grau III";
    }
}
