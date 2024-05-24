
function carregamento(){
    var data = new Date();
    var horas = data.getHours();
    var min = data.getMinutes();
    var cumprimentos = document.getElementById("cumprimentos");
    var escreva = document.getElementById("msg");
    escreva.innerHTML = `Agora são ${horas} horas e ${min} minutos`;

    if(horas >= 0 && horas< 6){
        //Madrugada
        cumprimentos.innerHTML = `Olá , Já é de madrugada. Seria bom você ir descansar. `;
        document.body.style.background = '#020202';
        document.getElementById("foto").src = "madrugada.jpg";
    }else if(horas >= 6 && horas < 12){
        //Manhã
        cumprimentos.innerHTML = `Tenha um bom dia ! `;
        document.body.style.background = '#2f71ad';
        document.getElementById("foto").src = "manha.jpg";

    }else if(horas >= 12 && horas < 18){
        //Boa tarde
        cumprimentos.innerHTML = `Miau, Boa tarde ! `;
        document.body.style.background = '#e5b05c';
        document.getElementById("foto").src = "tarde.jpg";
    }else{
        //Boa noite!
        cumprimentos.innerHTML = `Excelente noite ! `;
        document.body.style.background = '#06101a';
        document.getElementById("foto").src = "noite.jpg";

    }
}

