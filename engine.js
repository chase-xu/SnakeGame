import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, restSnake} from './snake.js';
import { update as updateFood, draw as drawFood, restFood } from './treat.js';
import { outsideGrid } from './grid.js';
import { restInputs } from './input.js';

var lastRenderTime = 0;
const board = document.getElementById('board')
let gameOver = false
let gameStarted = false
/** start page */
let start = document.getElementById('start');
start.addEventListener('click', startGame);
let header = document.getElementById('header')


function startGame(){
    if(gameStarted === true){
        restBoard()
        board.style.display = ""
        header.style.display = 'none';
        board.style.visibility = "visible"
    }
    else{
        gameStarted = true
        header.style.display = 'none';
        board.style.visibility = "visible"
    }
   
    window.requestAnimationFrame(main);

}

function restBoard(){
    restSnake()
    restInputs()
    restFood()
}

function main(currentTime){
    if(gameOver){
        header.children[0].innerHTML = "YOU LOSE!!"
        header.style.marginLeft ='0'
        start.innerHTML = "Play Again"
        header.style.display = 'block'
        board.style.display = 'none'
        gameOver = false
        console.log(gameOver)
        return
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;
    update();
    draw();
}


function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    board.innerHTML = ''
    drawSnake(board)
    drawFood(board)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()

}