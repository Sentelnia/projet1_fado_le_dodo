
let player ;
let lvlNum ; //choix du niveau
let portee ; 


/*
*****************
Dessine la portée
*****************
*/
portee = new Portee();//construit une nouvelle portée
portee.createBoard();//dessine la portée

/*
*******************************
event startgame avec le bon lvl
*******************************
*/

document.querySelectorAll(".lvl").forEach(lvl => {
    lvl.addEventListener('click', () => {
        lvlNum = +(lvl.innerHTML[4]); //prend le numero du niveau
    })
})



/*
**********
event play
**********
*/

let play = document.querySelector(".play");
play.addEventListener('click', () => {
    player = new Player(lvlNum);//construit un nouveau player
    console.log(player);
    let lvl = player.lvl;

    player.randomMelody(lvl);// créé la mélodie a trouver

    //****TODO jouer la mélodie****
    console.log(player.melody);
})

