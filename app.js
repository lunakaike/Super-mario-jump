const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const nuvens = document.querySelector('.nuvens');

// ^============= OBJETOS ============^ //

const position_score = document.querySelector('.position_score');

// ^============= PONTUAÇÃO ============^ //

const screen_menu = document.querySelector('.screen_menu');
const botoes= document.querySelector('.button');
const play = document.querySelector('#play');

// ^============= MENU ============^ // 

const coin_sound = document.querySelector('.coin_sound');
const death_sound = document.querySelector('.death_sound');
const game_sound = document.querySelector('.game_sound');
const menu_sound = document.querySelector('.menu_sound');

// ^============= SOUNDS ============^ // 

const screen_gameover = document.querySelector('.over');
const score_gameover = document.querySelector('.score_gameover');
const botton_reset = document.querySelector('.button_reset');
const botton_menu = document.querySelector('.button_menu');

// ^============= GAMEOVER ============^ //

const screen_mario = document.querySelector('.screen_mario');
const floor_move = document.querySelector('.floor_move');
const floor_stop = document.querySelector('.floor_stop');

// ^============= TELAS ============^ //

let cu = 0;
let over = 'no';
let start = 'no';
let screen = 'menu';
let score = 0;
let death = 'no'
let mario_air = 'no'

// ^============= VARIAVEIS ============^ //

function jump() {

    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)
};

function go() {
    setTimeout(() => {
        cano.style.left = `-100vw`;
        cano.classList.add('canoani')
        
    }, 1500);
    screen = 'game'
    
}

botton_menu.addEventListener('click', function(){
    if(screen == "gameover"){

        screen = 'menu';
        mario.src = "css/imagens/mario correndo.gif";
        mario.style.width = `120px`;
        
        floor_stop.style.zIndex = 0;
        screen_gameover.style.opacity = 0;
        screen_gameover.style.zIndex = 0;
        screen_menu.style.opacity = 1;
        screen_menu.style.zIndex = 9;
        document.getElementsByClassName('botton_menu').disabled = true;
        document.getElementsByClassName('botton_menu').disabled = false;

    }})

botton_reset.addEventListener('click', function(){
    if(screen == "gameover"){
        floor_stop.style.zIndex = 0
        pontuacaoA = 0;
        mario.style.bottom = `37px`;
        mario.style.width = `120px`
        mario.src = "css/imagens/mario correndo.gif";
        screen_gameover.style.opacity = 0;
        screen = 'game';
        death = 'no'
        screen_gameover.style.zIndex = 0
        floor_move.style.backgroundColor = "RGBA(12, 3, 7, 0)";
        go();
        document.getElementsByClassName('botton_reset').disabled = true;
        document.getElementsByClassName('botton_reset').disabled = false;

    }})
    

// ^============= MENU SCREEN DEATH =============^//



play.addEventListener('click', function(){
    screen_menu.style.opacity = 0
    screen_menu.style.zIndex = 0
    document.getElementById('play').disabled = true;
    document.getElementById('play').disabled = false;
    go();
});

setInterval(() => {
if(screen == "game" && death == 'no'){
    score += 1;
    position_score.textContent = `score: ${score}`;
    score_gameover.textContent = `your score: ${score}`;
}
 }, 170);


const loop = setInterval(() => {

        const canoleft = +window.getComputedStyle(cano).left.replace('px', '');
        const marioup = +window.getComputedStyle(mario).bottom.replace('px', '');

        // ^================ POSITION DETECTION =============^//

        if(marioup > 37){
            mario_air = "yes"
        }else{
            mario_air = "no"
        }

        // ^================ MARIO_AIR DETECTION =============^//

        if(canoleft <= 80 && marioup <= 120 && canoleft >= 0 && screen == 'game') {
            setTimeout(() => {
                floor_stop.style.zIndex = 13
                death = 'yes'
                cano.style.left = `${canoleft}px`;
                cano.classList.remove('canoani')
                mario.style.bottom = `${marioup}px`;
                mario.classList.remove('jump');
                mario.src = "";
                mario.src = 'css/imagens/mario morrendo.webp';
                mario.style.width = `77px`;
                mario.classList.add('jumpmorte')
                setTimeout(() => {
                    cano.style.left = '-100vw';
                    screen_mario.style.border = 0;
                    screen_gameover.style.opacity = 1;
                    screen_gameover.style.zIndex = 15;
                    mario.src = "css/imagens/mario correndo.gif";
                    mario.classList.remove('jumpmorte')
                }, 500);
                screen = "gameover"
            }, 0);
    }},10);
            // ^================ DEATH DETECTION =============^//

document.addEventListener("keydown", function(event) {
    if (screen == 'game') {
        jump();
    }
  });
