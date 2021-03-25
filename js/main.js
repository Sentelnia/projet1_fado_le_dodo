let player;
let lvlNum; //choix du niveau
let portee;
let note;
let color;
let index;
let ecart; // pour décaler la prochaine note à trouver
let win;
let gameover;
let miniDo;
let miniRe;
let miniMi;
let miniFa;
let miniSol;
let miniLa;
let miniSi;

/*
*******************************
event startgame avec le bon lvl
*******************************
*/

document.querySelectorAll(".lvl").forEach((lvl) => {
    lvl.addEventListener("click", () => {
        lvlNum = +lvl.innerHTML[4]; //prend le numero du niveau
    });
});

/*
**********
event play
**********
*/

let play = document.querySelector("#newMelody");

play.addEventListener("click", () => {

    if (play.className === 'play') {

        player = new Player(lvlNum); //construit un nouveau player
        console.log(player);
        let lvl = player.lvl;


        ecart = 150;
        win = false;
        gameover = false;
        portee = new Portee(); //construit une nouvelle portée
        portee.createBoard(); //dessine la portée
        portee.createCle(); //dessine la clé de sol
        portee.createHelp(); //dessine la portée d'aide


        note = new Note();
        color = note.color;
        note.noteName();
        note.drawNote(color); // active l'interface utilisateur

        //dessine les notes d'aide
        miniDo = new MiniNotes('Do', 'red', 1030, 187 );
        miniDo.drawMiniNote();
        miniRe = new MiniNotes('Re', 'orange', 1080, 174 );
        miniRe.drawMiniNote();
        miniMi = new MiniNotes('Mi', 'yellow', 1130, 161 );
        miniMi.drawMiniNote();
        miniFa = new MiniNotes('Fa', 'green', 1180, 150 );
        miniFa.drawMiniNote();
        miniSol = new MiniNotes('Sol', 'cyan', 1230, 138 );
        miniSol.drawMiniNote();
        miniLa = new MiniNotes('La', 'indigo', 1280, 124 );
        miniLa.drawMiniNote();
        miniSi = new MiniNotes('Si', 'magenta', 1330, 110 );
        miniSi.drawMiniNote();


        player.randomMelody(lvl); // créé la mélodie a trouver

        player.playMelody(player.melody); // joue la mélodie à trouver

        index = 0;
        play.classList.remove('play')
    }

});

/*
************
event replay
************
*/
let replay = document.querySelector(".replay");

replay.addEventListener("click", () =>{
    player.playMelody(player.melody);
})

/*
*************
event clavier
*************
*/

document.addEventListener('keydown', (event) => {
    if (gameover === false && win === false) {
        switch (event.key) {
            case 'ArrowUp':
                note.noteUp(); //la note monte
                portee.createBoard(); //animation
                note.noteName();
                color = note.color;
                note.drawNote(color);
                break;
            case 'ArrowDown':
                note.noteDown(); // la note descend
                portee.createBoard(); // animation
                note.noteName();
                color = note.color;
                note.drawNote(color);
                break;
            case 'ArrowRight':
                //son de la note
                let son = note.name;
                son.play();
                // la note devient la foundMelody
                player.foundMelody = son;
                //si c'est la bonne note
                if (player.checkNote(index)) {
                    player.score++; //on ajoute 1 point
                    index++; // on passe a la note suivante
                    portee.x += 149;
                    portee.createBoard(); //animation
                    //on verifie si win
                    if (player.checkWin()) {
                        play.classList.add('play')//on peut réutiliser le bouton new melody
                        return win = true;
                    }
                    note = new Note; // on créé une nouvelle note de comparaison
                    note.x += ecart; // qui sera décalé sur la portée
                    ecart += 130;
                    note.noteName();
                    color = note.color;
                    note.drawNote(color);
                } else {
                    player.essai--; //on enlève un essai
                    //on verifie game over
                    if (player.checkGameOver()) {
                        play.classList.add('play')//on peut réutiliser le bouton new melody
                        return gameover = true;
                    }
                }
                break;
        }
    }


})