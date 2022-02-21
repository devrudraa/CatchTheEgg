let scoreCount = 0;
let randomEgg = 0;
let over = true;
let range = document.querySelector("#moveEgg");
bowl = document.querySelector('.bowl>img');
let score = document.querySelector('.scoreCount');
eggs = document.querySelector('.eggs');
table = document.querySelector('.table');
body = document.querySelector('body');
startMenu = document.querySelector('.welcome')
GameOver = document.getElementById('over')
widthbowl = parseInt(window.getComputedStyle(bowl, null).getPropertyValue('width'));

function GameOverFunc(){
    eggs.classList.remove('aniEgg');
    GameOver.style.visibility = 'visible';
    GameOver.classList.add('overAni');
    EggImg = document.querySelector('.eggs');
    EggImg.style.top = '63%';
    over = false;
}

function game(){
    scoreCount = 0;
    score.innerHTML = scoreCount;
    eggs.classList.add('aniEgg');
    GameOver.style.visibility = 'hidden';
    startMenu.style.visibility = 'hidden';
    eggs.style.left = random + "px";
    over = true;
	value = BodyWidth - widthbowl
	range.max = (value / BodyWidth * 100);
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
    if(scoreCount > 10 && scoreCount < 20  ){
        eggs.style.setProperty("-webkit-animation-duration", 2.5 + "s");
    }else if(scoreCount > 20){
        eggs.style.setProperty("-webkit-animation-duration", 1.5 + "s");
    }else if(scoreCount > 100){
        eggs.style.setProperty("-webkit-animation-duration", 1 + "s");
    }
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
    PosiEgg = Math.abs(TopPosiBowl - TopPosiEgg);
    random = Math.floor(Math.random() * (BodyWidth - Widthegg));

    if (PosiEgg <= 105) {
        if (LeftPosiEgg >= LeftPosiBowl && LeftPosiEgg <= (LeftPosiBowl + widthbowl)) {
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

    if (widthbowl === 204 && LeftPosiBowl > (BodyWidth - widthbowl)) {
        bowl.style.left = "0px";
    }
    else if (widthbowl === 204 && LeftPosiBowl < 0) {
        bowl.style.left = (BodyWidth -(widthbowl+1)) + 'px';
    }
}, 10);

function MoveBowlRight() {
    if(over){
        bowly = parseInt(window.getComputedStyle(bowl, null).getPropertyValue('left'));
        bowl.style.left = (bowly + 15) + "px";
    }
}
function MoveBowlLeft() {
    if(over){
        bowly = parseInt(window.getComputedStyle(bowl, null).getPropertyValue('left'));
        bowl.style.left = (bowly - 15) + "px";
    }
}

function ValueOfRange(){
    if(over){
        // console.log(range.value);
        bowl.style.left = (range.value) + "%";
    }
}

// console.log(parseInt(window.getComputedStyle(bowl, null).getPropertyValue('width')));
