import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js';

let lastRenderTime = 0;
const board = document.getElementById('board')


function main(currentTime){
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return 
    window.requestAnimationFrame(main);
    lastRenderTime = currentTime;
    console.log(secondsSinceLastRender);

    // update();
    // draw();

}

window.requestAnimationFrame(main);

function update(){
    updateSnake()
}

function draw(){
    drawSnake(board)
}