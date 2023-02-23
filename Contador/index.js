let inicio = document.getElementById("inicio");
let fim = document.getElementById("fim");
let passo = document.getElementById("passo");
let res = document.getElementById("resultado"); 

let botao = document.getElementById("contar");
botao.addEventListener("click", ContarNumeros);

function ContarNumeros() {
    let inc = Number(inicio.value);
    let end = Number(fim.value);
    let qnt = Number(passo.value);

    if (inc < end){
        for (let cont=inc; cont<=end; cont+=qnt){
            res.innerHTML += `\u{1F449}${cont} `;          
        }
    }  
    else {
        for (let cont=inc; cont>=end; cont-=qnt){
            res.innerHTML += `\u{1F449}${cont} `;          
        }
    } 
    res.innerHTML += `\u{1F3C1}`;
}