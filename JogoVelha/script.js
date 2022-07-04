// Variáveis
var jogo = []; 
var jogada;
var jogadaCpu = 1; 
var jogando = true; 
var nivel = 2; 
var quemComeca = 1;
var quemJoga = 0; // 0 -> jogador; 1 -> CPU
var tabuleiro = []; 
var verifica; 

// Jogada do jogador
function jogar(p){
    if((jogando) && (quemJoga == 0)){
        switch(p){
            case 1:
                if(jogo[0][0] == ""){
                    jogo[0][0] = "X";
                    quemJoga = 1;
                }
            break;
            case 2:
                if(jogo[0][1] == ""){
                    jogo[0][1] = "X";
                    quemJoga = 1;
                }
            break;
            case 3:
                if(jogo[0][2] == ""){
                    jogo[0][2] = "X";
                    quemJoga = 1;
                }
            break;
            case 4:
                if(jogo[1][0] == ""){
                    jogo[1][0] = "X";
                    quemJoga = 1;
                }
            break;
            case 5:
                if(jogo[1][1] == ""){
                    jogo[1][1] = "X";
                    quemJoga = 1;
                }
            break;
            case 6:
                if(jogo[1][2] == ""){
                    jogo[1][2] = "X";
                    quemJoga = 1;
                }
            break;
            case 7:
                if(jogo[2][0] == ""){
                    jogo[2][0] = "X";
                    quemJoga = 1;
                }
            break;
            case 8:
                if(jogo[2][1] == ""){
                    jogo[2][1] = "X";
                    quemJoga = 1;
                }
            break;
            case 9:
                if(jogo[2][2] == ""){
                    jogo[2][2] = "X";
                    quemJoga = 1;
                }
            break;
        }
        if(quemJoga == 1){
            atualizaTabuleiro();
            verifica = verificaVitoria();
            if(verifica != ""){
                alert(verifica + " Venceu");
                jogando = false;
            }
            jogada++;
            cpuJoga();
        }
    }   
}

// CPU Joga
function cpuJoga(){
    if(jogando){
        var l, c;
        if(nivel == 1){
            do{
                l = Math.round(Math.random()*2);
                c = Math.round(Math.random()*2);
            }while(jogo[l][c] != "");
            jogo[l][c] = "O";
        }
        else if(nivel == 2){
            // ATAQUE
            // Linha 1
            if((jogo[0][0] == "O") && (jogo[0][1] == "O") && (jogo[0][2] == "")){
                jogo[0][2] = "O";
            }
            else if((jogo[0][0] == "O") && (jogo[0][2] == "O") && (jogo[0][1] == "")){
                jogo[0][1] = "O";
            }
            else if((jogo[0][1] == "O") && (jogo[0][2] == "O") && (jogo[0][0] == "")){
                jogo[0][0] = "O";
            }
            else
            // Linha 2
            if((jogo[1][0] == "O") && (jogo[1][1] == "O") && (jogo[1][2] == "")){
                jogo[1][2] = "O";
            }
            else if((jogo[1][0] == "O") && (jogo[1][2] == "O") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[1][1] == "O") && (jogo[1][2] == "O") && (jogo[1][0] == "")){
                jogo[1][0] = "O";
            }
            else
            // Linha 3
            if((jogo[2][0] == "O") && (jogo[2][1] == "O") && (jogo[2][2] == "")){
                jogo[2][2] = "O";
            }
            else if((jogo[2][0] == "O") && (jogo[2][2] == "O") && (jogo[2][1] == "")){
                jogo[2][1] = "O";
            }
            else if((jogo[2][1] == "O") && (jogo[2][2] == "O") && (jogo[2][0] == "")){
                jogo[2][0] = "O";
            }
            else  
            // Coluna 1
            if((jogo[0][0] == "O") && (jogo[1][0] == "O") && (jogo[2][0] == "")){
                jogo[2][0] = "O";
            }
            else if((jogo[0][0] == "O") && (jogo[2][0] == "O") && (jogo[1][0] == "")){
                jogo[1][0] = "O";
            }
            else if((jogo[1][0] == "O") && (jogo[2][0] == "O") && (jogo[0][0] == "")){
                jogo[0][0] = "O";
            }
            else
            // Coluna 2
            if((jogo[0][1] == "O") && (jogo[1][1] == "O") && (jogo[2][1] == "")){
                jogo[2][1] = "O";
            }
            else if((jogo[0][1] == "O") && (jogo[2][1] == "O") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[1][1] == "O") && (jogo[2][1] == "O") && (jogo[0][1] == "")){
                jogo[0][1] = "O";
            }
            else
            // Coluna 3
            if((jogo[0][2] == "O") && (jogo[1][2] == "O") && (jogo[2][2] == "")){
                jogo[2][2] = "O";
            }
            else if((jogo[0][2] == "O") && (jogo[2][2] == "O") && (jogo[1][2] == "")){
                jogo[1][2] = "O";
            }
            else if((jogo[1][2] == "O") && (jogo[2][2] == "O") && (jogo[0][2] == "")){
                jogo[0][2] = "O";
            }
            else
            // Diagonal 1
            if((jogo[0][0] == "O") && (jogo[1][1] == "O") && (jogo[2][2] == "")){
                jogo[2][2] = "O";
            }
            else if((jogo[0][0] == "O") && (jogo[2][2] == "O") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[2][2] == "O") && (jogo[1][1] == "O") && (jogo[0][0] == "")){
                jogo[0][0] = "O";
            }
            else
            // Diagonal 2
            if((jogo[0][2] == "O") && (jogo[1][1] == "O") && (jogo[2][0] == "")){
                jogo[2][0] = "O";
            }
            else if((jogo[0][2] == "O") && (jogo[2][0] == "O") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[2][0] == "O") && (jogo[1][1] == "O") && (jogo[0][2] == "")){
                jogo[0][2] = "O";
            }
            else
            // DEFESA
            // Linha 1
            if((jogo[0][0] == "X") && (jogo[0][1] == "X") && (jogo[0][2] == "")){
                jogo[0][2] = "O";
            }
            else if((jogo[0][0] == "X") && (jogo[0][2] == "X") && (jogo[0][1] == "")){
                jogo[0][1] = "O";
            }
            else if((jogo[0][1] == "X") && (jogo[0][2] == "X") && (jogo[0][0] == "")){
                jogo[0][0] = "O";
            }
            else
            // Linha 2
            if((jogo[1][0] == "X") && (jogo[1][1] == "X") && (jogo[1][2] == "")){
                jogo[1][2] = "O";
            }
            else if((jogo[1][0] == "X") && (jogo[1][2] == "X") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[1][1] == "X") && (jogo[1][2] == "X") && (jogo[1][0] == "")){
                jogo[1][0] = "O";
            }
            else
            // Linha 3
            if((jogo[2][0] == "X") && (jogo[2][1] == "X") && (jogo[2][2] == "")){
                jogo[2][2] = "O";
            }
            else if((jogo[2][0] == "X") && (jogo[2][2] == "X") && (jogo[2][1] == "")){
                jogo[2][1] = "O";
            }
            else if((jogo[2][1] == "X") && (jogo[2][2] == "X") && (jogo[2][0] == "")){
                jogo[2][0] = "O";
            }
            else  
            // Coluna 1
            if((jogo[0][0] == "X") && (jogo[1][0] == "X") && (jogo[2][0] == "")){
                jogo[2][0] = "O";
            }
            else if((jogo[0][0] == "X") && (jogo[2][0] == "X") && (jogo[1][0] == "")){
                jogo[1][0] = "O";
            }
            else if((jogo[1][0] == "X") && (jogo[2][0] == "X") && (jogo[0][0] == "")){
                jogo[0][0] = "O";
            }
            else
            // Coluna 2
            if((jogo[0][1] == "X") && (jogo[1][1] == "X") && (jogo[2][1] == "")){
                jogo[2][1] = "O";
            }
            else if((jogo[0][1] == "X") && (jogo[2][1] == "X") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[1][1] == "X") && (jogo[2][1] == "X") && (jogo[0][1] == "")){
                jogo[0][1] = "O";
            }
            else
            // Coluna 3
            if((jogo[0][2] == "X") && (jogo[1][2] == "X") && (jogo[2][2] == "")){
                jogo[2][2] = "O";
            }
            else if((jogo[0][2] == "X") && (jogo[2][2] == "X") && (jogo[1][2] == "")){
                jogo[1][2] = "O";
            }
            else if((jogo[1][2] == "X") && (jogo[2][2] == "X") && (jogo[0][2] == "")){
                jogo[0][2] = "O";
            }
            else
            // Diagonal 1
            if((jogo[0][0] == "X") && (jogo[1][1] == "X") && (jogo[2][2] == "")){
                jogo[2][2] = "O";
            }
            else if((jogo[0][0] == "X") && (jogo[2][2] == "X") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[2][2] == "X") && (jogo[1][1] == "X") && (jogo[0][0] == "")){
                jogo[0][0] = "O";
            }
            else
            // Diagonal 2
            if((jogo[0][2] == "X") && (jogo[1][1] == "X") && (jogo[2][0] == "")){
                jogo[2][0] = "O";
            }
            else if((jogo[0][2] == "X") && (jogo[2][0] == "X") && (jogo[1][1] == "")){
                jogo[1][1] = "O";
            }
            else if((jogo[2][0] == "X") && (jogo[1][1] == "X") && (jogo[0][2] == "")){
                jogo[0][2] = "O";
            }
            else{
                if(jogada < 8){
                    do{
                        l = Math.round(Math.random()*2);
                        c = Math.round(Math.random()*2);
                    }while(jogo[l][c] != "");
                    jogo[l][c] = "O";
                }
                else{
                    for(l = 0; l < 3; l++){
                        for(c = 0; c < 3; c++){
                            if(jogo[l][c] == ""){
                                jogo[l][c] = "O";
                            }
                        }
                    }
                }
            }
        }
        verifica = verificaVitoria();
        if(verifica != ""){
            alert(verifica + " Venceu");
            jogando = false;
        }
        atualizaTabuleiro();
        jogada++;
        quemJoga = 0;
    }
}

// Verifica Vitória
function verificaVitoria(){
    var l, c;
    // Linhas
    for(l = 0; l < 3; l++){
        if((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2])){
                return jogo[l][0];
        }
    }
    // Colunas 
    for(c = 0; c < 3; c++){
        if((jogo[0][c] == jogo[1][c]) && (jogo[1][c] == jogo[2][c])){
                return jogo[0][c];
        }    
    }
    // Diagonais
    if((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])){
        return jogo[0][0];
    }    
    if((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])){
        return jogo[0][2];
    }   
    return "";
}

// Atualizar o tabuleiro
function atualizaTabuleiro(){
    for(var linha = 0; linha < 3; linha++){
        for(var coluna = 0; coluna < 3; coluna++){
            if(jogo[linha][coluna] == "X"){
                tabuleiro[linha][coluna].innerHTML="X";
                tabuleiro[linha][coluna].style.color="red";
                tabuleiro[linha][coluna].style.cursos="default";
            }
            else if(jogo[linha][coluna] == "O"){
                tabuleiro[linha][coluna].innerHTML="O";
                tabuleiro[linha][coluna].style.color="blue";
                tabuleiro[linha][coluna].style.cursos="default";
            }
            else{
                tabuleiro[linha][coluna].innerHTML="";
                tabuleiro[linha][coluna].style.cursos="pointer";
            }
        }
    }
}

// Iniciar as operações
function inicia(){
    jogada = 0;
    jogando = true;
    jogadaCpu = 1;
    jogo = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]; 
    tabuleiro = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ];
    atualizaTabuleiro();
    if(quemComeca == 1){
        document.getElementById("dvQuemComeca").innerHTML="Quem começa: Jogador";
        quemComeca = 0;
        quemJoga = quemComeca;
    }
    else{
        document.getElementById("dvQuemComeca").innerHTML="Quem começa: CPU";
        quemComeca = 1;
        quemJoga = quemComeca;
        cpuJoga();
    }
}

window.addEventListener("load", inicia);
