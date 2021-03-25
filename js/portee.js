class Portee {
    constructor(){
        this.ctx = document.getElementById('portee').getContext('2d');
        this.y = 400;
        this.x = 250;
    }

    createBoard(){
        this.y = 400;
        // portée vide
        this.ctx.clearRect(this.x,0,1400,500);
        //lignes
        this.ctx.lineWidth = 5;
        for (let i = 0; i < 5; i++){
            this.ctx.beginPath();
            this.ctx.moveTo(this.x, this.y);
            this.ctx.lineTo(1300, this.y);
            this.ctx.stroke();
            this.y -= 50;
        }

    }

    createCle(){
        this.y = 400;
        // bout de porté de la clé de sol
        for (let i = 0; i < 5; i++){
            this.ctx.beginPath();
            this.ctx.moveTo(50, this.y);
            this.ctx.lineTo(250, this.y);
            this.ctx.stroke();
            this.y -= 50;
        }

       //clé de sol
       const imgCle = document.createElement("img");
       imgCle.onload = () => {
           let ratio = imgCle.naturalWidth / imgCle.naturalHeight;
           this.ctx.drawImage(imgCle, 40, 65, 270, 270/ratio);
       };
       imgCle.src = "images/cleSol.png"
    }

}

