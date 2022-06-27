// Variáveis para obtenção dos valores
var hour, minute, second, obj;

function tempo(){
    var data = new Date()
    obj = document.getElementById("dv1");
    hour = data.getHours();
    minute = data.getMinutes();
    second = data.getSeconds();
    obj.innerHTML= ('0' + hour).slice(-2) + ":" + ('0' + minute).slice(-2) + ":" + ('0' + second).slice(-2);
}

setTimeout(tempo, 0);
setInterval(tempo, 1000);


/* Outro método 

function tempo(){
    var data = new Date()
    document.getElementById("dv1").innerHTML = data.toLocaleTimeString();
}

setInterval(tempo, 1000);
    */
