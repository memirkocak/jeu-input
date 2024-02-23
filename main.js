const input = document.getElementById('input');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//la lettre cliqué sur le clavier
let prevState = '';



input.addEventListener('input', (e)=>{
//pour récupérer la valeur de l'élément de l'input
const newState = e.target.value;


//vérifie si la nouvelle valeur de l'élément de l'input
    if(newState.length < prevState.length){
//si c'est le cas mettre a jour l'état precedent avec la nouvelle valeur
        prevState = newState;
//et retourner
        return;
    }

//récupérer la derniere lettre de la valeur
    const lastInputLetter = newState[newState.length - 1];
//convertir en majuscule
    const capitalLetter = lastInputLetter.toUpperCase();
//trouver l'index de la lettre dans l'alphabet
    const index = alphabet.indexOf(capitalLetter);
//log index
    console.log(index);
//calculer la lettre suivante en utilisant l'index et le modulo 26 pour revenir au début si nécessaire
    const nextState = prevState + alphabet [( index + 1) %26 ];
//mettre a jour la valeur d'entré avec la lettre suivante
    e.target.value = nextState;
//mettre a jour l'état suivant
    prevState = nextState;

});