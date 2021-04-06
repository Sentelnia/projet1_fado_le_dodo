/* 
*************
objet player
*************

*/

class Player {
    constructor(lvl) {
        this.lvl = lvl; // level choisit par le joueur
        this.notes = [noteDo, noteRe, noteMi, noteFa, noteSol, noteLa, noteSi]; // array notes contient les notes de bases utilisée par la fonction random;
        this.melody = []; // array vide dans laquelle se forme la mélodie à trouver par le joueur
        this.foundMelody = ""; // une vide dans laquelle se met la note choisie par le joueur ( qui sera comparée avec celle de la mélody)
        this.essai = 5; // essai restants du joueur, quand il tombe a zéro c'est game over
        this.score = 0;
    }

    //fonction pour créer une mélodie aléatoire (arg lvl)
    randomMelody(lvl) {
        let index;
        //si lvl 1 , 4 notes aléatoire mais qui se suivent sur 3 notes
        if (lvl === 1) {
            index = random(this.notes);
            var newArr;
            if (index >= 1 && index <= 5) {
                newArr = [
                    this.notes[index - 1],
                    this.notes[index],
                    this.notes[index + 1],
                ];
            } else if (index < 1) {
                newArr = [
                    this.notes[index],
                    this.notes[index + 1],
                    this.notes[index + 2],
                ];
            }
            let note;
            let arr;
            for (let i = 0; i < 4; i++) {
                //les notes doivent forcement se suivre
                if (i === 0) {
                    note = newArr[random(newArr)];
                    this.melody.push(note);
                } else {
                    note = this.melody[i - 1];
                    switch (note) {
                        case newArr[0]:
                            arr = [newArr[0], newArr[1]];
                            note = arr[random(arr)];
                            this.melody.push(note);
                            break;
                        case newArr[1]:
                            note = newArr[random(newArr)];
                            this.melody.push(note);
                            break;
                        case newArr[2]:
                            arr = [newArr[1], newArr[2]];
                            note = arr[random(arr)];
                            this.melody.push(note);
                            break;
                    }
                }
            }
            // si lvl 2, 5 notes aléatoire sur 3 notes qui ne se suivent pas forcement
        } else if (lvl === 2) {
            index = random(this.notes);
            var newArr;
            if (index >= 1 && index <= 5) {
                newArr = [
                    this.notes[index - 1],
                    this.notes[index],
                    this.notes[index + 1],
                ];
            } else if (index < 1) {
                newArr = [
                    this.notes[index],
                    this.notes[index + 1],
                    this.notes[index + 2],
                ];
            }
        for (let i = 0; i < 5; i++) {
            let note = newArr[random(newArr)];
            this.melody.push(note);
        }
            // si lvl 3 , toutes les notes, pas d'écart spécial
        } else if (lvl === 3) {
            for (let i = 0; i < 6; i++) {
                let note = this.notes[random(this.notes)];
                this.melody.push(note);
            }
        }
    }

    // fonction pour jouer la mélodie
    playMelody(melody) {
        var i = 0;
        let intervalID = setInterval(() => {
            if (i < melody.length) {
                melody[i].play();
                i++;
            } else {
                clearInterval(intervalID);
            }
        }, 1295);
    }

    //fonction qui compare la note choisie par le joueur par la note de l'array melody
    checkNote(index) {
        return this.foundMelody === this.melody[index] ? true : false;
    }

    //fonction checkgameover qui check si essai est a 0 (donc le jeu stop)
    checkGameOver() {
        return this.essai === 0 ? true : false;
    }

    //fonction checkwin qui check si toute la mélodie est trouvée
    checkWin() {
        return this.score === this.melody.length ? true : false;
    }
}

//fonction random

function random(arr) {
    return Math.floor(Math.random() * arr.length);
}