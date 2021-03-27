class Dodo {
    constructor(){
        this.ctx = document.getElementById('portee').getContext('2d');
    }

    drawDodo(x, y, texte1, texte2){
        const imgDodo = document.createElement("img");
        const imgBulle = document.createElement("img");
       imgDodo.onload = () => {
           let ratio = imgDodo.naturalWidth / imgDodo.naturalHeight;
           this.ctx.drawImage(imgDodo, x, y, 200, 200/ratio);
       };

       imgBulle.onload = () => {
        let ratio = imgBulle.naturalWidth / imgBulle.naturalHeight;
        this.ctx.drawImage(imgBulle, x + 140, y - 80, 225, 225/ratio);
    };
       imgBulle.src = "images/bulle.gif"
       imgDodo.src = "images/dodo.png"

    //score dans la bulle
    this.ctx.clearRect(x + 200, y - 40, 90, 50)
       this.ctx.fillStyle = 'purple'
       this.ctx.font = '19px san serif'
       this.ctx.fillText(texte1, x + 220, y - 20)
       this.ctx.fillText(texte2, x + 245, y + 5)
    }
        
    
}
