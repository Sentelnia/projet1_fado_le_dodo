class Portee {
    constructor(){
        this.ctx = document.getElementById('portee').getContext('2d');
    }

    createBoard(){
        let y = 400
        // portée vide
        //lignes
        this.ctx.lineWidth = 5;
        for (let i = 0; i < 5; i++){
            this.ctx.beginPath();
            this.ctx.moveTo(50, y);
            this.ctx.lineTo(1300, y);
            this.ctx.stroke();
            y -= 50;
        }
    }
}