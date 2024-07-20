//Carne - 400 gr pro pessoa + de  6 Horas - 650
//Cerveja - 1200 ml por pessoa + 6 Horas - 2000 ml
//Refrigerante/agua - 1000 ml por pessoa + 6 Horas 1500 ml

//Crianças valem por 0,5 

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");



    let adutos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
 
    let qdtTotalCarne = carnePP(duracao) * adutos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adutos;
    let qdtTotalBebidas = bebidasPP(duracao) * adutos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2L de Bebida</p>`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    }else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    }else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    }else {
        return 1000;
    }
}