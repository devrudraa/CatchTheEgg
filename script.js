let scoreCount = 0;
let randomEgg = 0;
let over = 1;
let range = document.querySelector("#moveEgg");
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
    over = 1;
}

function GameOverFunc(){
    eggs.classList.remove('aniEgg');
    GameOver.style.visibility = 'visible';
    GameOver.classList.add('overAni');
    EggImg = document.querySelector('.eggs');
    EggImg.style.top = '63%';
    over = 0;
}

function resume() {
    let lastEgg = randomEgg;
    while (lastEgg == randomEgg) {
        randomEgg = Math.floor(Math.random() * 4);
    }
    var eggImg = { '0': "img/egg1.png", '1': "img/egg2.png", '2': "img/egg3.png" , '3':'img/Bomb.png' }
    eggs.style.backgroundImage = `url(${eggImg[randomEgg]})`;
    scoreCount += 1;
    eggs.classList.remove('aniEgg');
    void eggs.offsetTop;
    eggs.style.left = random + "px";
    score.innerHTML = scoreCount;
    eggs.classList.add('aniEgg');
    GameOver.classList.remove('overAni');
    over = 1;
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
            if (randomEgg == 3) {
                GameOverFunc();
                // eggs.style.backgroundImage = `url('img/BombBlast.jpg')`;
            }else{
                resume();
            }
        }
        
        else {
            if (randomEgg != 3) {
                GameOverFunc();
            }else{
                resume();
            }
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
    if(over != 0){
        bowly = parseInt(window.getComputedStyle(bowl, null).getPropertyValue('left'));
        bowl.style.left = (bowly + 15) + "px";
    }
}
function MoveBowlLeft() {
    if(over != 0){
        bowly = parseInt(window.getComputedStyle(bowl, null).getPropertyValue('left'));
        bowl.style.left = (bowly - 15) + "px";
    }
}

function ValueOfRange(){
    if(over != 0){
        console.log(range.value);
        bowl.style.left = (range.value) + "%";
    }
}
