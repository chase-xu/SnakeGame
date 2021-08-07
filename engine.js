import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js';
import { update as updateFood, draw as drawFood,  } from './treat.js';
import { outsideGrid } from './grid.js';

var lastRenderTime = 0;
const board = document.getElementById('board')
let gameOver = false
console.log('run')

function main(currentTime){
    if(gameOver){
        if(confirm('You lost. Press ok to restart.')){
            window.location ='/'
        }
        return
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;
    // console.log(secondsSinceLastRender);
    update();
    draw();
}

window.requestAnimationFrame(main);

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