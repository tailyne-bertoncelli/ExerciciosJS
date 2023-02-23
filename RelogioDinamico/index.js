function dia(){
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    document.getElementById("hora").innerHTML = `Agora são ${hora}:${minutos} horas!`;

    if (hora <=12 ) {
        document.getElementById("imagem").src = "../RelogioDinamico/img/pexels-david-kanigan-14932278.jpg";
        document.getElementById("saudacao").innerHTML = `Tenha um bom dia!`;
        document.body.style.backgroundColor = "#F59620";
    } else if (hora >=13 && hora <=18){
        document.getElementById("imagem").src = "../RelogioDinamico/img/pexels-george-desipris-858241.jpg";
        document.getElementById("saudacao").innerHTML = `Tenha uma boa tarde!`;
        document.body.style.backgroundColor = "#5F384D";
    } else if (hora >=19 && hora <=23) {
        document.getElementById("imagem").src = "../RelogioDinamico/img/pexels-reynaldo-brigworkz-brigantty-771883.jpg";
        document.getElementById("saudacao").innerHTML = `Tenha uma boa noite!`;
        document.body.style.backgroundColor = "#584342";
    } 
}   