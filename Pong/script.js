// Variáveis - Animação
var game, frames;

// Variáveis - Controle
var pontos = 0;
var tecla;
var jogo = false;

// Variáveis - Direção
var dirJY;
var bolaX, bolaY;
var cpuY = 0;

// Variáveis - Elementos
var vBola;
var vBtIniciar;
var vCpu;
var vJogador;
var vPaineltxtPontos;

// Variáveis - Posições
var posBolaX, posBolaY;
var posJogadorX, posJogadorY;
var posCpuX, posCpuY;

// Variáveis - Posições Iniciais
var posJogIniY = 180, posCpuIniY = 180;
var posJogIniX = 0, posCpuIniX = 930;
var posBolaIniX = 475, posBolaIniY = 240;


// Variáveis - Tamanhos
var campoX = 0, campoY = 0, campoW = 960, campoH = 500;
var barraW = 20, barraH = 140; 
var bolaW = 20, bolaH = 20;

// Variáveis - Velocidades
var velBola, velCpu, velJogador;


// Funções
function controlaBola(){
    // Movimentação da Bola
    posBolaX += velBola * bolaX;
    posBolaY += velBola * bolaY;
    // Colisão com o Jogador
    if((posBolaX <= (posJogadorX + barraW)) && 
    ((posBolaY + bolaH) >= posJogadorY) && 
    (posBolaY <= (posJogadorY + barraH))){
        bolaY = ((posBolaY + (bolaH/2)) - (posJogadorY + (barraH/2)))/16;
        bolaX *= -1;
    }
    // Colisão com o CPU
    if((posBolaX >= (posCpuX - barraW)) && 
    ((posBolaY + bolaH) >= posCpuY) && 
    (posBolaY <= (posCpuY + barraH))){
        bolaY = ((posBolaY + (bolaH/2)) - (posCpuY + (barraH/2)))/16;
        bolaX *= -1;
    }
    // Limites superior e inferior
    if(posBolaY >= 470 || posBolaY <= 10){
        bolaY *= -1;
    }
    // Saiu da Tela pela Direita e Esquerda
    if(posBolaX >= (campoW - bolaW)){
        velBola = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        pontos++;
        vPaineltxtPontos.value=pontos;
        jogo = false; 
        vJogador.style.top=posJogadorY+"px";
        vCpu.style.top=posCpuY+"px";
    }
    else if(posBolaX <= 0){
        velBola = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        pontos--;
        vPaineltxtPontos.value=pontos;
        jogo = false; 
        vJogador.style.top=posJogadorY+"px";
        vCpu.style.top=posCpuY+"px";
    }
    vBola.style.top=posBolaY + "px";
    vBola.style.left=posBolaX + "px";
}

function controlaCpu(){
    if(jogo){
        if((posBolaX > (campoW/2)) && (bolaX > 0)){
            // Movimentar CPU
            if((posBolaY + (bolaH/2)) > (posCpuY + (barraH/2)) + velCpu){
                // Mover para baixo
                if((posCpuY + barraH) <= campoH){
                    posCpuY += velCpu;
                }
            }
            else if((posBolaY + (bolaH/2)) < (posCpuY + (barraH/2)) - velCpu){
                // Mover para cima
                if(posCpuY >= 0){
                    posCpuY -= velCpu;
                }
            } 
        }
        else{
            // Posicionar a CPU no Centro
            if(posCpuY + (barraH/2) < (campoH/2)){
                posCpuY += velCpu;
            }
            else if(posCpuY + (barraH/2) > (campoH/2)){
                posCpuY -= velCpu;
            }
        }
        vCpu.style.top=posCpuY+"px";
    }
}

function controlaJogador(){
    if(jogo){
        posJogadorY += velJogador * dirJY;
        if(((posJogadorY + barraH) >= campoH) || (posJogadorY <= 0)){
            posJogadorY += (velJogador * dirJY) * (-1);
        }
        vJogador.style.top=posJogadorY+"px";
    }
}

function teclaDown(){
    tecla = event.keyCode;
    // CIMA
    if(tecla == 38){
        dirJY = -1;
    }
    // BAIXO
    else if(tecla == 40){
        dirJY = 1;
    }
}

function teclaUp(){
    // CIMA
    tecla = event.keyCode;
    if(tecla == 38){
        dirJY = 0;
    }
    // BAIXO
    else if(tecla == 40){
        dirJY = 0;
    }
}

function game(){
    if(jogo){
        controlaJogador();
        controlaBola();
        controlaCpu();
    }
    frames = requestAnimationFrame(game);
}

function iniciaJogo(){
    if(!jogo){
        velBola = velCpu = velJogador = 5;
        cancelAnimationFrame(frames);
        jogo = true;
        dirJY = 0;
        bolaY = 0;
        if((Math.random()*10) < 5){
            bolaX = -1;
        }
        else{
            bolaX = 1;
        }
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        posJogadorX = posJogIniX;
        posCpuX = posCpuIniX;
        game();
    }
}

function inicializa(){
    velBola = velCpu = velJogador = 5;
    vBtIniciar = document.getElementById("btIniciar");
    vBtIniciar.addEventListener("click", iniciaJogo);
    vBola = document.getElementById("dvBola");
    vCpu = document.getElementById("dvCPU");
    vJogador = document.getElementById("dvJogador");
    vPaineltxtPontos = document.getElementById("txtPontos");
    document.addEventListener("keydown", teclaDown);
    document.addEventListener("keyup", teclaUp);
}

window.addEventListener("load", inicializa);