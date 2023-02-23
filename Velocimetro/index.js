let vel = document.getElementById("velo");
let botao = document.getElementById("envia");
botao.addEventListener("click", medeVelocidade);

function medeVelocidade() {
    let velocidade = vel.value;
    console.log(velocidade);
    document.getElementById("velocidadeAtual").innerHTML = `Você está a ${velocidade}km/h!`;

    if (velocidade <= 60) {
        document.getElementById("aviso").innerHTML = `Você esta em uma boa velocidade!`;
    } else if (velocidade >=61 && velocidade <= 100) {
        document.getElementById("aviso").innerHTML = `Você esta no limite da velocidade`;
    } else {
        document.getElementById("aviso").innerHTML = `Você ultrapassou o limite de velocidade! <strong>MULTADO</strong>`;
    }

}