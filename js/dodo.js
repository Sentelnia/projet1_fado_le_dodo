class Dodo {
    constructor(){
        this.ctx = document.getElementById('portee').getContext('2d');
        this.y;
        this.x;
    }

    drawDodo(x, y){
        const imgDodo = document.createElement("img");
       imgDodo.onload = () => {
           let ratio = imgDodo.naturalWidth / imgDodo.naturalHeight;
           this.ctx.drawImage(imgDodo, x, y, 200, 200/ratio);
       };
       imgDodo.src = "images/dodo.png"
    }
    
}
