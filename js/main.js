let player;
let lvlNum; //choix du niveau
let portee;
let note;
let color;
let index;
let ecart; // pour décaler la prochaine note à trouver
let win;
let gameover;

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
        ecart = 150;
        win = false;
        gameover = false;
        portee = new Portee(); //construit une nouvelle portée
        portee.createBoard(); //dessine la portée
        portee.createCle(); //dessine la clé de sol

        player = new Player(lvlNum); //construit un nouveau player
        console.log(player);
        let lvl = player.lvl;

        note = new Note();
        color = note.color;
        note.noteName();
        note.drawNote(color); // active l'interface utilisateur

        player.randomMelody(lvl); // créé la mélodie a trouver

        player.playMelody(player.melody); // joue la mélodie à trouver

        index = 0;
        play.classList.remove('play')
    }

});


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
                    portee.x += 155;
                    portee.createBoard(); //animation
                    //on verifie si win
                    if (player.checkWin()) {
                        play.classList.add('play')//on peut réutiliser le bouton new melody
                        return win = true;
                    }
                    note = new Note; // on créé une nouvelle note de comparaison
                    note.x += ecart; // qui sera décalé sur la portée
                    ecart += 135;
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