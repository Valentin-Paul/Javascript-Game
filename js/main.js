////// DOM //// create new div and add to game div //////
function createElementInDom(name){
    const game = document.getElementById('game');
    const newElement = document.createElement('div');
    newElement.className = name;
    game.appendChild(newElement);
    return newElement;
}

function drawElementInDom(element){
    element.domElement.style.width = element.width + "vw";
    element.domElement.style.height = element.height + "vh";
    element.domElement.style.left = element.positionX + "%";
    element.domElement.style.bottom = element.positionY + "%";
}

const game = new Game(createElementInDom,drawElementInDom);
game.startGame();

document.addEventListener("keydown",(event)=>{
    if(event.code === 'Space') {
        game.shootBullet('shoot');
    }
})