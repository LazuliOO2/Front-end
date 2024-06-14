const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

const ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = 2;

const paddleHeight = 75;
const paddleWidth = 10;
let paddle1Y = (canvas.height - paddleHeight) / 2;
let paddle2Y = (canvas.height - paddleHeight) / 2;
const paddleSpeed = 7;

let upPressed = false;
let downPressed = false;

// Variáveis para controlar o bot
let botEnabled = true;
const botDifficulty = 0.5; // Valor entre 0 e 1 que define a velocidade de reação do bot

// Variáveis para armazenar a pontuação dos jogadores
let player1Score = 0;
let player2Score = 0;

// Limite de pontos máximo
const maxPoints = 5;

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function keyDownHandler(event) {
    if (event.key === 'ArrowUp') {
        upPressed = true;
    } else if (event.key === 'ArrowDown') {
        downPressed = true;
    } else if (event.key === 'B') {
        // Ativar/desativar o bot quando a tecla 'B' for pressionada
        botEnabled = !botEnabled;
    }
}

function keyUpHandler(event) {
    if (event.key === 'ArrowUp') {
        upPressed = false;
    } else if (event.key === 'ArrowDown') {
        downPressed = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(x, y) {
    ctx.beginPath();
    ctx.rect(x, y, paddleWidth, paddleHeight);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

// Função para atualizar os placares no DOM
function updateScores() {
    document.getElementById('player1Score').textContent = 'Player 1: ' + player1Score;
    document.getElementById('player2Score').textContent = 'Player 2: ' + player2Score;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle(0, paddle1Y);
    drawPaddle(canvas.width - paddleWidth, paddle2Y);

    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    if (x + dx > canvas.width - ballRadius) {
        if (y > paddle2Y && y < paddle2Y + paddleHeight) {
            dx = -dx;
        } else {
            // Ponto para o jogador 1
            player1Score++;
            updateScores(); // Atualize os placares
            x = canvas.width / 2;
            y = canvas.height / 2;
            dx = -dx;
            if (player1Score >= maxPoints) {
                alert('Game Over! Player 1 wins!');
                document.location.reload(); // Reiniciar o jogo
            }
        }
    } else if (x + dx < ballRadius) {
        if (y > paddle1Y && y < paddle1Y + paddleHeight) {
            dx = -dx;
        } else {
            // Ponto para o jogador 2
            player2Score++;
            updateScores(); // Atualize os placares
            x = canvas.width / 2;
            y = canvas.height / 2;
            dx = -dx;
            if (player2Score >= maxPoints) {
                alert('Game Over! Player 2 wins!');
                document.location.reload(); // Reiniciar o jogo
            }
        }
    }

    if (upPressed && paddle1Y > 0) {
        paddle1Y -= paddleSpeed;
    } else if (downPressed && paddle1Y < canvas.height - paddleHeight) {
        paddle1Y += paddleSpeed;
    }

    // Controle mais inteligente do movimento do bot
    if (botEnabled) {
        let paddle2YCenter = paddle2Y + paddleHeight / 2;
        if (y < paddle2YCenter - paddleHeight / 3) {
            paddle2Y -= paddleSpeed * botDifficulty;
        } else if (y > paddle2YCenter + paddleHeight / 3) {
            paddle2Y += paddleSpeed * botDifficulty;
        }
    }

    y += dy;
    x += dx;

    requestAnimationFrame(draw);
}

draw();
