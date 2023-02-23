let numero = document.getElementById("num");
let lista = document.getElementById("listaNumeros");

let add = document.getElementById("adiciona");
add.addEventListener("click", adicionaNumero);

let finaliza = document.getElementById("calcula");
finaliza.addEventListener("click", calcula);

let arrayNum = [];
function adicionaNumero(){
    let num = Number(numero.value);
    

    if (num > 100){
        alert("Digite um número menor do que 100!");
        return;
    }
    if (num == 0){
        alert("Digite um número!");
        return;
    }

    arrayNum.push(num);
    let addNum = document.createElement("option");
    addNum.text += `Valor ${num} adicionado`;
    lista.appendChild(addNum);
    console.log(num);  
}

function calcula(){
    if (arrayNum.length == 0){
        alert("Adicione números!");
    } else {
        let tamArray = arrayNum.length;
        let maiorValor = Math.max.apply(null, arrayNum);
        let menorValor = Math.min.apply(null, arrayNum);
        let somaArray = 0;  
        let media;

        for(let i=0; i<arrayNum.length; i++){
            somaArray += arrayNum[i];
        }

        media = somaArray / tamArray; 

        document.getElementById("tamVetor").innerHTML = `Temos ${tamArray} números adicionados!`;
        document.getElementById("maiorValor").innerHTML = `O maior valor informado foi ${maiorValor}`;
        document.getElementById("menorValor").innerHTML = `O menor valor informado foi ${menorValor}`; 
        document.getElementById("soma").innerHTML = `A soma de todos os valores é ${somaArray}`;
        document.getElementById("soma").innerHTML = `A média dos valores é ${media}`;
    }
}