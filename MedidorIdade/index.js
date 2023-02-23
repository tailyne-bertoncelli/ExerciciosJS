let ano = document.getElementById("AnoNascimento");
let genero = document.getElementsByName("radgen");
let resul = document.getElementById("resultado");

let botao = document.getElementById("BotaoEnvia");
botao.addEventListener("click", CalculaIdade);

function CalculaIdade() {
    let nascimento = Number(ano.value);

    let data = new Date();
    let anoAtual = data.getFullYear();
    let idade;
    idade = anoAtual - nascimento;
    console.log(idade);

    if (nascimento == 0 || nascimento >= anoAtual){
        alert("Verifique os dados e tente novamente!");
        return;
    }

    if (genero[0].checked) {
        if (idade <=15){
            resul.innerHTML = `
                                <p>Menino com ${idade} anos!</p>
                                <img src="../MedidorIdade/img/CriancaMenino.jpg" id="foto">
                                `
        }
        else if (idade >=16 && idade <=29) {
            resul.innerHTML = `
                                <p>Homem jovem de ${idade} anos!</p>
                                <img src="../MedidorIdade/img/JovemHomem.jpg" id="foto">
                                `
        }
        else if (idade >=30 && idade <=59){
            resul.innerHTML = `
                                <p>Homem adulto de ${idade} anos!</p>
                                <img src="../MedidorIdade/img/HomemAdulto.jpg" id="foto">
                                `
        }
        else {            
            resul.innerHTML = `
                                <p>Homem idoso de ${idade} anos!</p>
                                <img src="../MedidorIdade/img/HomemIdoso.jpg" id="foto">
                                `
        }
    }

    if (genero[1].checked) {
        if (idade <=15){            
            resul.innerHTML = `
                                <p>Menina com ${idade} anos!</p>
                                <img src="../MedidorIdade/img/CriancaMenina.jpg" id="foto">
                                ` 
        }
        else if (idade >=16 && idade <=29) {
            resul.innerHTML = `
                                <p>Mulher jovem de ${idade} anos!</p>
                                <img src="../MedidorIdade/img/JovemMulher.jpg" id="foto">
                                `
        }
        else if (idade >=30 && idade <=59){
            resul.innerHTML = `
                                <p>Mulher adulta de ${idade} anos!</p>
                                <img src="../MedidorIdade/img/MulherAdulta.jpg" id="foto">
                                ` 
        }
        else {
            resul.innerHTML = `
                                <p>Mulher idosa de ${idade} anos!</p>
                                <img src="../MedidorIdade/img/MulherIdosa.jpg" id="foto">
                                `

            
        }
    }
    
}