class Note{
    constructor(){
        this.name = "";
        this.color = "red";
        this.ctx = document.getElementById('portee').getContext('2d');
        this.x = 362;
        this.y = 550;
    }

    //dessine une note
    drawNote(color){
        this.ctx.moveTo(this.x, this.y);
        this.ctx.fillStyle = color;
        this.ctx.arc(this.x, this.y, 24, 0, Math.PI *2);
        this.ctx.fill();
        // si c'est un do, rajoute la barre
        if (this.y === 550){
            this.ctx.beginPath();
            this.ctx.lineWidth = 5;
            this.ctx.strokeStyle = 'red'
            this.ctx.moveTo(this.x - 36, 550);
            this.ctx.lineTo(this.x + 36, 550);
            this.ctx.stroke();
            this.ctx.strokeStyle = 'black';
        }
    }

    //fait monter la note
    noteUp(){
        if (this.y > 400){
        this.y -= 25;
        }
    }
    
    //fait baisser la note
    noteDown(){
        if (this.y < 550){
        this.y += 25
        }
    }

    //donne le nom de la note
    noteName(){
        let y = this.y;
        switch (y) {
            case 550 : 
                this.name = noteDo;
                this.color = "red";
                break;
            case 525 : 
                this.name = noteRe;
                this.color = "orange";
                break;
            case 500 : 
                this.name = noteMi;
                this.color = "yellow";
                break;
            case 475 : 
                this.name = noteFa;
                this.color = "green";
                break;
            case 450 : 
                this.name = noteSol;
                this.color = "cyan";
                break;
            case 425 : 
                this.name = noteLa;
                this.color = "indigo";
                break;
            case 400 : 
                this.name = noteSi;
                this.color = "magenta";
                break;
        }
    }
}

/*
***********
minis notes
***********
*/

class MiniNotes{
    constructor(name, color, x, y){
        this.ctx = document.getElementById('portee').getContext('2d');
        this.name = name;
        this.color = color;
        this.y = y;
        this.x = x;
        this.son = "";
    }

    drawMiniNote(){
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, 12, 0, Math.PI *2);
        this.ctx.fill();
        this.ctx.font = '19px san serif'
        this.ctx.fillText(this.name, this.x -6, 225)
        if (this.y === 187){
            this.ctx.beginPath();
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = this.color
            this.ctx.moveTo(this.x - 20, 187);
            this.ctx.lineTo(this.x + 20, 187);
            this.ctx.stroke();
        }

        this.ctx.strokeStyle = 'black'
    }

    top(){
        return this.y - 15
    }

    left(){
        return this.x - 15
    }
        
}


