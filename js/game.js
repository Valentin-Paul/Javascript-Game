class Game {
    constructor(create, draw){
        this.create = create;
        this.draw = draw;
        this.bullets = [];
    }

    startGame() {
            


    }; /// end startGame

    shootBullet(element){
        if(element === 'shoot'){
            const newBullet = new Shooter;
            newBullet.domElement = this.create('bullet');
            this.draw(newBullet);
            this.bullets.push(newBullet)
            
            setInterval(()=>{
                this.bullets.forEach((bullet) =>{
                    console.log(bullet);
                    bullet.shoot();
                    this.draw(bullet);
                })
            },10)
        }
    }
  

}; /// end class Game




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