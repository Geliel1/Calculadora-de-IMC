const calcular = document.getElementById('calcular');


function imc() {

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let clasificacao = "";

        if (valorIMC < 18.5) {
            clasificacao = "abaixo do peso, tente comer mais vezes no decorrer do seu dia."
        }

        if (valorIMC >= 18.5) {
            clasificacao = " com um peso ideal, continuei cuidando da sua alimentação."
        }

        if (valorIMC >= 24.9) {
            clasificacao = " com sobrepeso, tente fazer atividades físicas, andar de bike, skate... etc "
        }

        if (valorIMC >= 30.0) {
            clasificacao = " obeso, procure um medico e cuide da sua saúde."
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${clasificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos Por favor!.'
    }
}

calcular.addEventListener('click', imc)