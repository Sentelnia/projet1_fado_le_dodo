
//fonction random

function random(arr){
    return Math.floor(Math.random() * arr.length);
}


/* 
*************
objet player
************
comprend une array note (do re mi fa sol la si do)
comprend une array melody vide à remplir aléatoirement parmis l'array note a chaque play selon le lvl cf fonction aléatoire (notes conjointes ou pas)
comprend un lvl en parametre   
comprend une array score qui commence à 5 (laisse 5 chances)
comprend une string foundMelody vide qui sera les choix du joueur


fonction aléatoire(arg lvl)
fonction replay qui permet de réécouter la mélodie choisie au hasard
fonction qui cible la portée et la note a trouver ( si bonne note on passe a la note d'apres, sinon , on reste sur la premiere note)
fonction qui compare la note choisie par le joueur par la note de l'array melody
fonction checkgameover qui check si score est a 0 (donc le jeu s'arete)

*/

class Player {
    constructor(lvl) {
        this.lvl = lvl; // level choisit par le joueur
        this.notes = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si']; // array notes contient les notes de bases utilisée par la fonction random;
        this.melody = []; // array vide dans laquelle se forme la mélodie à trouver par le joueur
        this.foundMelody = ""; // une vide dans laquelle se met la note choisie par le joueur ( qui sera comparée avec celle de la mélody)
        this.score = 5; // score du joueur, quand il tombe a zéro c'est game over
    }

    //fonction pour créer une mélodie aléatoire (arg lvl)
    randomMelody(lvl){
        let index;
        //si lvl 1 , 4 notes aléatoire mais qui se suivent sur 3 notes 
        if (lvl === 1){
            index = random(this.notes);
            let newArr;
            if (index >= 1 && index <= 5){
                newArr = [this.notes[index], this.notes[index -1], this.notes[index +1]]
            } else if (index < 1) {
                newArr = [this.notes[index], this.notes[index +1], this.notes[index +2] ]
            } 

            for (let i = 0 ; i < 4; i++){
                let note = newArr[random(newArr)];
                this.melody.push(note);
            }
            console.log('la mélodie est ' + this.melody)
        }
        // si lvl 2, 5 notes aléatoire sur 5 notes avec juste une tierce sinon ça se suit
        // si lvl 3 , toutes les notes, pas d'écart spécial
    }

    // fonction pour rejouer la mélodie
    replay(){
        //rejoue la mélodie
        console.log(this.melody)
    }

    //fonction qui compare la note choisie par le joueur par la note de l'array melody
    checkNote(index){
        return this.foundMelody === this.melody[index] ? true : false
    }

    // //fonction qui cible la portée et la note a trouver ( si bonne note on passe a la note d'apres, sinon , on reste sur la premiere note)
    // target(index){
    //     for (let i = 0 ; i < this.melody.length; i++){
    //         this.checkNote(i);
    //     }
    // }

    
    //fonction checkgameover qui check si score est a 0 (donc le jeu stop)
    checkGameOver(){
        return this.score === 0 ? true : false
    }
}

