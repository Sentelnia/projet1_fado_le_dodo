let player;
let elNum; //choix du niveau
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
let miniNoteArr = [];
let dodo;
let replay = document.querySelector(".replay");
let play = document.querySelector("#newMelody");
let lvls = document.querySelectorAll(".lvl");


dodo = new Dodo; // construit le dodo
/*
*******************************
event startgame avec le bon lvl
*******************************
*/

lvls.forEach((el) => {
    //remet les bouton en background white
    el.addEventListener("click", () => {

        if (el.className === 'lvl') {

            lvls.forEach((e) => {
                e.classList.remove('valid')
            })
            
            elNum = +el.innerHTML[6]; //prend le numero du niveau 
            el.classList.add('valid');//met un background violet sur le bouton
            play.classList.add('play');
            play.classList.remove('valid');
        }
    });
});

/*
*****************
event instruments
*****************
*/


let trump = document.querySelector('.trompette')
let piano = document.querySelector('.piano')


//trompette
trump.addEventListener("click", () =>{
    if (trump.className === 'trompette')
    trump.classList.add('valid');
    piano.classList.remove('valid');

    //change le son des notes
    noteDo.src = "audio/trompette/do.mp3";
    noteRe.src = "audio/trompette/re.mp3";
    noteMi.src = "audio/trompette/mi.mp3";
    noteFa.src = "audio/trompette/fa.mp3";
    noteSol.src = "audio/trompette/sol.mp3";
    noteLa.src = "audio/trompette/la.mp3";
    noteSi.src = "audio/trompette/si.mp3";

})


//piano
piano.addEventListener("click", () =>{
    if (piano.className === 'piano')
    piano.classList.add('valid');
    trump.classList.remove('valid');

    //change le son des notes
    noteDo.src = "audio/piano/do.mp3";
    noteRe.src = "audio/piano/re.mp3";
    noteMi.src = "audio/piano/mi.mp3";
    noteFa.src = "audio/piano/fa.mp3";
    noteSol.src = "audio/piano/sol.mp3";
    noteLa.src = "audio/piano/la.mp3";
    noteSi.src = "audio/piano/si.mp3";

})


/*
**********
event play
**********
*/

play.addEventListener("click", () => {

    if (play.className === 'play') {
        //ajoute le background violet
        play.classList.add('valid');
        replay.classList.toggle("replay");
        lvls.forEach((e) => {
            e.classList.remove('lvl')
        })

        player = new Player(elNum); //construit un nouveau player
        let lvl = player.lvl;


        ecart = 150;
        win = false;
        gameover = false;
        portee = new Portee(); //construit une nouvelle portée
        portee.createBoard(); //dessine la portée
        portee.createCle(); //dessine la clé de sol
        dodo.drawDodo(250, 115, "Essais:", player.essai); //dessine le dodo
        portee.createHelp(); //dessine la portée d'aide


        note = new Note();
        color = note.color;
        note.noteName();
        note.drawNote(color); // active l'interface utilisateur

        //dessine les notes d'aide
        miniDo = new MiniNotes('Do', 'red', 1030, 187);
        miniDo.son = noteDo;
        miniDo.drawMiniNote();
        miniNoteArr.push(miniDo);
        miniRe = new MiniNotes('Re', 'orange', 1080, 174);
        miniRe.drawMiniNote();
        miniRe.son = noteRe;
        miniNoteArr.push(miniRe);
        miniMi = new MiniNotes('Mi', 'yellow', 1130, 161);
        miniMi.drawMiniNote();
        miniMi.son = noteMi;
        miniNoteArr.push(miniMi);
        miniFa = new MiniNotes('Fa', 'green', 1180, 150);
        miniFa.drawMiniNote();
        miniFa.son = noteFa;
        miniNoteArr.push(miniFa);
        miniSol = new MiniNotes('Sol', 'cyan', 1230, 138);
        miniSol.drawMiniNote();
        miniSol.son = noteSol;
        miniNoteArr.push(miniSol);
        miniLa = new MiniNotes('La', 'indigo', 1280, 124);
        miniLa.drawMiniNote();
        miniLa.son = noteLa;
        miniNoteArr.push(miniLa);
        miniSi = new MiniNotes('Si', 'magenta', 1330, 110);
        miniSi.drawMiniNote();
        miniSi.son = noteSi;
        miniNoteArr.push(miniSi);


        player.randomMelody(lvl); // créé la mélodie a trouver

        player.playMelody(player.melody); // joue la mélodie à trouver

        index = 0;
        play.classList.remove('play')
        setTimeout(() => {
            replay.classList.toggle("replay");
            lvls.forEach((e) => {
                e.classList.add('lvl')
            })
        }, 9000);


    }

});


/*
***********************
event notes mini portée
***********************
*/
let canvas = document.getElementById("portee");

//delimite le canvas
let canvasLeft = canvas.offsetLeft + canvas.clientLeft;
let canvasTop = canvas.offsetTop + canvas.clientTop;

canvas.addEventListener('click', (event) => {
    var x = event.pageX - canvasLeft;

    var y = event.pageY - canvasTop;

    miniNoteArr.forEach((e) => {
        if (y > e.top() && y < e.top() + 25 && x > e.left() && x < e.left() + 25) {
            e.son.play();
        }
    })
}, false)


/*
************
event replay
************
*/


replay.addEventListener("click", () => {
    if (replay.className === "replay") {
        replay.classList.toggle('valid');
        replay.classList.toggle("replay");
        lvls.forEach((e) => {
            e.classList.remove('lvl')
        })


        player.playMelody(player.melody);

        setTimeout(() => {
            replay.classList.toggle('valid');
            replay.classList.toggle("replay");
            lvls.forEach((e) => {
                e.classList.add('lvl')
            })
        }, 9000);
    }

})

/*
******************
event instructions
******************
*/
let instrArr = [];
let imgArr = [];

let inst = document.querySelector('.instructions')

const imgonun = document.createElement("img");
imgonun.src = 'images/instructions/choixlvl.png';
imgArr.push(imgonun);
const imgondeux = document.createElement("img");
imgondeux.src = 'images/instructions/newMelody.svg.png';
imgArr.push(imgondeux);
const imgontrois = document.createElement("img");
imgontrois.src = 'images/instructions/controles.svg.png';
imgArr.push(imgontrois);
const imgonquatre = document.createElement("img");
imgonquatre.src = 'images/instructions/portéeAide.png';
imgArr.push(imgonquatre);
const imgoncinq = document.createElement("img");
imgoncinq.src = 'images/instructions/essai.png';
imgArr.push(imgoncinq);


let onun = document.createElement('div');
onun.className = 'onun'
instrArr.push(onun);
let ondeux = document.createElement('div');
ondeux.className = 'ondeux'
instrArr.push(ondeux);
let ontrois = document.createElement('div');
ontrois.className = 'ontrois'
instrArr.push(ontrois);
let onquatre = document.createElement('div');
onquatre.className = 'onquatre'
instrArr.push(onquatre);
let oncinq = document.createElement('div');
oncinq.className = 'oncinq'
instrArr.push(oncinq);

let suivant = document.createElement('button');
suivant.innerHTML = 'Suivant';


inst.addEventListener('click', () => {
    if (inst.className === 'instructions') {
        inst.classList.toggle('valid');
        let numArr = 0
        addImg(instrArr[numArr], imgArr[numArr]);
        //cliquer sur le bouton suivant pour faire aparaitre la prochaine instruction
        suivant.addEventListener('click', () => {
            if (numArr < 4) {
                deleteImg(instrArr[numArr], imgArr[numArr]);
                addImg(instrArr[numArr + 1], imgArr[numArr + 1]);
                numArr++;
            } else {
                deleteImg(instrArr[numArr], imgArr[numArr]);
                inst.classList.toggle('valid');
            }
        })

    }
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
                        play.classList.remove('valid');
                        play.classList.add('play') //on peut réutiliser le bouton new melody
                        dodo.drawDodo(250, 115, "Bravo !", "");
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
                    dodo.drawDodo(250, 115, "Essais:", player.essai); //dessine le dodo
                    //on verifie game over
                    if (player.checkGameOver()) {
                        play.classList.remove('valid');
                        play.classList.add('play') //on peut réutiliser le bouton new melody
                        dodo.drawDodo(250, 115, "Game", "Over");
                        return gameover = true;

                    }
                }
                break;
        }
    }


})

let blockInstr = document.querySelector('.instructionoff')
// Fonction pour les instructions (ajoute image et bouton suivant)
function addImg(numDiv, imgName) {
    blockInstr.appendChild(numDiv)
    numDiv.appendChild(imgName);
    numDiv.appendChild(suivant);
}

// Fonction pour les instructions (enleve image et bouton suivant)
function deleteImg(numDiv, imgName) {
    numDiv.removeChild(imgName);
    numDiv.removeChild(suivant);
    blockInstr.removeChild(numDiv)
}