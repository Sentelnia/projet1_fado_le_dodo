class Note{
    constructor(){
        this.name = "";
        this.color = "red";
        this.ctx = document.getElementById('portee').getContext('2d');
        this.x = 375;
        this.y = 450;
    }

    //dessine une note
    drawNote(color){
        this.ctx.moveTo(this.x, this.y);
        this.ctx.fillStyle = color;
        this.ctx.arc(this.x, this.y, 25, 0, Math.PI *2);
        this.ctx.fill();
        // si c'est un do, rajoute la barre
        if (this.y === 450){
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'red'
            this.ctx.moveTo(this.x - 40, 450);
            this.ctx.lineTo(this.x + 40, 450);
            this.ctx.stroke();
            this.ctx.strokeStyle = 'black';
        }
    }

    //fait monter la note
    noteUp(){
        if (this.y > 300){
        this.y -= 25;
        }
    }
    
    //fait baisser la note
    noteDown(){
        if (this.y < 450){
        this.y += 25
        }
    }

    //donne le nom de la note
    noteName(){
        let y = this.y;
        switch (y) {
            case 450 : 
                this.name = noteDo;
                this.color = "red";
                break;
            case 425 : 
                this.name = noteRe;
                this.color = "orange";
                break;
            case 400 : 
                this.name = noteMi;
                this.color = "yellow";
                break;
            case 375 : 
                this.name = noteFa;
                this.color = "green";
                break;
            case 350 : 
                this.name = noteSol;
                this.color = "cyan";
                break;
            case 325 : 
                this.name = noteLa;
                this.color = "indigo";
                break;
            case 300 : 
                this.name = noteSi;
                this.color = "magenta";
                break;
        }
    }
}