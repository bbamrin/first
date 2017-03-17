window.onload = init;

var map,
    player,
    enemyCvs;
var ctxMap,
    ctxPlayer,
    ctxEnemy;
var isPlaying;
var requestAnimFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame;


//Переменные для персонажей
var myPlayer,
    enemy;


var drawBtn,
    clearBtn;

var gameWidth = 800,
    gameHeight = 500;

var background = new Image();
background.src = "img/bg.jpg";

var tales = new Image();
tales.src = "img/tales.png";


function init() {
    map = document.getElementById("map");
    ctxMap = map.getContext("2d");

    player = document.getElementById("player");
    ctxPlayer = player.getContext("2d");

    enemyCvs = document.getElementById("enemy");
    ctxEnemy = enemyCvs.getContext("2d");

    map.width = gameWidth;
    map.height = gameHeight;

    enemyCvs.width = gameWidth;
    enemyCvs.height = gameHeight;

    player.width = gameWidth;
    player.height = gameHeight;

    drawBtn = document.getElementById("drawBtn");
    clearBtn = document.getElementById("clearBtn");

    drawBtn.addEventListener("click", drawRect, false);
    clearBtn.addEventListener("click", clearRect, false);

    myPlayer = new Player();
    enemy = new Enemy();

    drawBg();
    startLoop();
}
//цикл игры
function loop() {
    if (isPlaying) {
        drawAll();
        update();
        requestAnimFrame(loop);
    }
}

function startLoop() {
    isPlaying = true;
    loop();
}

function stopLoop() {
    isPlaying = false;
}

function update() {
    console.log("loop");
    myPlayer.update();
}

function drawAll() {
    myPlayer.draw();
    enemy.draw();
}
//----Прототип игрока----
function Player() {
    //Координаты изображения в графическом файле
    this.srcX = 0;
    this.srcY = 0;
    //Координаты игрок на поле
    this.drawX = 0;
    this.drawY = 0;
    //размер изображения
    this.width = 128;
    this.height = 113;
    //Скорость
    this.speed = 3;
}

Player.prototype.draw = function () {
    clearCtxPlayer();
    ctxPlayer.drawImage(tales,
        this.srcX, this.srcY, this.width, this.height,
        this.drawX, this.drawY, this.width, this.height);
}
Player.prototype.update = function () {
    //this.drawX += 1;
    this.chooseDir();
}
Player.prototype.chooseDir = function () {
        if (this.isUp) this.drawY -= this.speed;
        if (this.isDown) this.drawY += this.speed;
        if (this.isLeft) this.drawX -= this.speed;
        if (this.isRight) this.drawX += this.speed;

    }
    //----Прототип игрока----
    //----Прототип врага----
function Enemy() {
    //Координаты изображения в графическом файле
    this.srcX = 0;
    this.srcY = 115;
    //Координаты на поле
    this.drawX = 700;
    this.drawY = 10;
    //размер изображения
    this.width = 43;
    this.height = 43;
    //Скорость
    this.speed = 8;
    //для управления
    this.isUp = false;
    this.isDown = false;
    this.isRight = false;
    this.isLeft = false;

}
Enemy.prototype.draw = function () {
    ctxEnemy.drawImage(tales, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
}


function drawRect() {
    ctxMap.fillStyle = "#333";
    ctxMap.fillRect(10, 10, 100, 100);
}

function clearRect() {
    ctxMap.clearRect(0, 0, 800, 500);
}

function clearCtxPlayer() {
    ctxPlayer.clearRect(0, 0, gameWidth, gameHeight);
}

function drawBg() {
    ctxMap.drawImage(background, 0, 0, 800, 500, //для картинки
        0, 0, gameWidth, gameHeight); //на экране
}