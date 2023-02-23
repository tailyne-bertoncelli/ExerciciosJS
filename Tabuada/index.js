let numero = document.getElementById("num");
let resultado = document.getElementById("tabuada");

let envia = document.getElementById("calcula");
envia.addEventListener("click", geraTabuada);

function geraTabuada() {
    let num = Number(numero.value);
    resultado.innerHTML = ``;
    for (let i = 0; i<= 10; i++) {
        let multiplica = i * num;
        console.log(num + " x " + i + " = " + multiplica);
        let item = document.createElement("option");
        item.text += `${num} x ${i} = ${multiplica}`;
        resultado.appendChild(item);
    }
}