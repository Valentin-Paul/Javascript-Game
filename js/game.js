class Game {
    constructor(create, draw){
        this.create = create;
        this.draw = draw;
        this.bullets = [];
        this.obstacle = null;
    }

    startGame() {
        this.obstacle = new Obstacle;
        this.obstacle.domElement = this.create('obstacle');
        this.draw(this.obstacle)

    
        setInterval(()=>{
            if(this.obstacle.positionX === 0){
                this.obstacle.wall = 'left';
            }
            else if(this.obstacle.positionX + this.obstacle.width === 100){
                this.obstacle.wall = 'right';
            }

            if(this.obstacle.wall === 'left'){
                this.obstacle.moveObstacleRight();
                this.draw(this.obstacle);
            }
            else if(this.obstacle.wall === 'right'){  
                this.obstacle.moveObstacleLeft();
                this.draw(this.obstacle);
            }
        },20)
    

    }; /// end startGame




    shootBullet(element){
        if(element === 'shoot'){
            const newBullet = new Shooter;
            newBullet.domElement = this.create('bullet');
            this.draw(newBullet);
            this.bullets.push(newBullet)
            
            setInterval(()=>{
                this.bullets.forEach((bullet) =>{
                    bullet.shoot();
                    this.draw(bullet);
                })
            },10)
        }
    }
  

}; /// end class Game



class Obstacle{
    constructor(){
        this.positionX = 0
        this.positionY = 80
        this.width = 30
        this.height = 5 
        this.domelement = null;
        this.wall = null;
    }

    moveObstacleRight(){
        this.positionX += 0.5;
    }

    moveObstacleLeft(){
        this.positionX -= 0.5;
    }
}



 class Shooter {
    constructor(){
        this.positionX = 50
        this.positionY = 0
        this.width = 0.5
        this.height = 15
        this.domElement = null;
    }

    shoot(){
        if(this.positionY <= 100){
            this.positionY += 0.5;
        }
    }
}