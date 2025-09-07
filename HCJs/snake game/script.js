let position = { x: 0, y: 0 };
let speed = 10;
let score = 0;
let lastPaintTime = 0;
let snake = [{ x: 15, y: 15 }];

food = { x: 5, y: 5 };

function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime / 1000 < 1 / speed)) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snakeArr) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snakeArr[i].y === snake[0].y) {
            return true;
        }
    }

    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }

    return false;
}

function gameEngine() {
    if (isCollide(snake)) {
        position = { x: 0, y: 0 };
        alert("game over");
        snake = [{ x: 15, y: 15 }];
        score = 0;
    }

    if (snake[0].y === food.y && snake[0].x === food.x) {
        score += 1;
        scoreBox.innerHTML = "score: " + score;
        snake.unshift({ x: snake[0].x + position.x, y: snake[0].y + position.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }

    }

    for (let i = snake.length - 2; i >= 0; i--) {
        snake[i + 1] = { ...snake[i] };
    }

    snake[0].x += position.x;
    snake[0].x += position.y;

    snake.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridcolumnStart = e.x;

        if (index === 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);

}
    board.innerHTML="";

    window.requestAnimationFrame(main);
    window.addEventListener('keydown', e => {
        position = { x: 0, y: 1 }
        switch (e.key) {
            case "ArrowUp":
                position.x = 0
                position.y = -1;
                break;

            case "ArrowDown":
                position.x = 0;
                position.y = 1;
                break;

            case "ArrowLeft":
                position.x = -1;
                position.y = 0;
                break;

            case "ArrowRight":
                position.x = 1;
                position.y = 0;
                break;
            default:
                break;
        }
    });


