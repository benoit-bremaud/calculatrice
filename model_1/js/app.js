// DOM
const touches = [...document.querySelectorAll('.bouton')];
// console.log(touches);
const listeKeycode = touches.map(touche => touche.dataset.key);
// console.log(listeKeycode);
const ecran = document.querySelector('.ecran');

// paramétrage des événements Keydown and Click event
// 1er événement Keydown event
document.addEventListener('keydown', (e) =>{
    const valeur = e.keyCode.toString();
    // console.log(valeur, typeof valeur);
    calculer(valeur)
});

// 2e événement Click event
document.addEventListener('click', (e) =>{
    // console.log(e);
    const valeur = e.target.dataset.key;
    // console.log(valeur, typeof valeur);
    calculer(valeur)
})

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        // console.log(listeKeycode)
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

// window.addEventListener('error', (e) => console.log(e))

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})