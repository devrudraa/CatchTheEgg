let scoreCount = 0;
let over = 1;
bowl = document.querySelector('.bowl>img');
let score = document.querySelector('.scoreCount');
eggs = document.querySelector('.eggs');
table = document.querySelector('.table');
body = document.querySelector('body');
startMenu = document.querySelector('.welcome')
GameOver = document.getElementById('over')

function game() {
    scoreCount = 0;
    score.innerHTML = scoreCount;
    eggs.classList.add('aniEgg');
    GameOver.style.visibility = 'hidden';
    startMenu.style.visibility = 'hidden';
}

document.onkeydown = function (key) {
    
    if (key.keyCode == 39 || key.keyCode == 68) {
        MoveBowlRight();
    }
    else if (key.keyCode == 37 || key.keyCode == 65) {
        MoveBowlLeft();
    }
}

setInterval(() => {
    TopPosiEgg = parseInt(window.getComputedStyle(eggs, null).getPropertyValue('top'));
    LeftPosiEgg = parseInt(window.getComputedStyle(eggs, null).getPropertyValue('left'));
    TopPosiBowl = parseInt(window.getComputedStyle(bowl, null).getPropertyValue('top'));
    LeftPosiBowl = parseInt(window.getComputedStyle(bowl, null).getPropertyValue('left'));
    BodyWidth = parseInt(window.getComputedStyle(body, null).getPropertyValue('width'));
    Widthegg = parseInt(window.getComputedStyle(eggs, null).getPropertyValue('width'));
    widthbowl = parseInt(window.getComputedStyle(bowl, null).getPropertyValue('width'));

    PosiEgg = Math.abs(TopPosiBowl - TopPosiEgg);
    random = Math.floor(Math.random() * (BodyWidth - Widthegg));

    if (PosiEgg <= 105) {
        if (LeftPosiEgg >= LeftPosiBowl && LeftPosiEgg <= (LeftPosiBowl + 199)) {
            randomEgg = Math.floor(Math.random() * 3);
            var eggImg = { '0': "img/egg1.png", '1': "img/egg2.png", '2': "img/egg3.png" }
            eggs.style.backgroundImage = `url(${eggImg[randomEgg]})`;
            scoreCount += 1;
            eggs.classList.remove('aniEgg');
            void eggs.offsetTop;
            eggs.style.left = random + "px";
            score.innerHTML = scoreCount;
            eggs.classList.add('aniEgg');
            GameOver.classList.remove('overAni');
        }
        else {
            GameOver.style.visibility = 'visible';
            GameOver.classList.add('overAni');
            Egg = document.querySelector('.eggs');
            over = 0;
            Egg.classList.remove('aniEgg');
        }
    }

    if (LeftPosiBowl > (BodyWidth - widthbowl)) {
        bowl.style.left = "0px";
    }
    else if (LeftPosiBowl < 0) {
        bowl.style.left = (BodyWidth -(widthbowl+1)) + 'px';
    }
}, 10);

function MoveBowlRight() {
    bowly = parseInt(window.getComputedStyle(bowl, null).getPropertyValue('left'));
    bowl.style.left = (bowly + 15) + "px";
}
function MoveBowlLeft() {
    bowly = parseInt(window.getComputedStyle(bowl, null).getPropertyValue('left'));
    bowl.style.left = (bowly - 15) + "px";
}
