class Portee {
    constructor(){
        this.ctx = document.getElementById('portee').getContext('2d');
        this.y = 500;
        this.x = 250;
    }

    createBoard(){
        this.y = 500;
        // portée vide
        this.ctx.clearRect(this.x,230,1400,600);
        //lignes
        this.ctx.lineWidth = 5;
        for (let i = 0; i < 5; i++){
            this.ctx.beginPath();
            this.ctx.moveTo(this.x, this.y);
            this.ctx.lineTo(1350, this.y);
            this.ctx.stroke();
            this.y -= 50;
        }

    }

    createCle(){
        this.y = 500;
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
           this.ctx.drawImage(imgCle, 40, 165, 270, 270/ratio);
       };
       imgCle.src = "images/cleSol.png"
    }

    createHelp(){

        //portée 
        this.y = 162
        for (let i = 0; i < 5; i++){
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(900, this.y);
            this.ctx.lineTo(1350, this.y);
            this.ctx.stroke();
            this.y -= 25;
        }

        //clé de sol
        const imgMiniCle = document.createElement("img");
        imgMiniCle.onload = () => {
            let ratio = imgMiniCle.naturalWidth / imgMiniCle.naturalHeight;
            this.ctx.drawImage(imgMiniCle, 890, 0, 130, 130/ratio);
        };
        imgMiniCle.src = "images/cleSol.png"

     
    }

}

