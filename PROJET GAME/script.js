const boutonCoffre = document.querySelector('#bouton-coffre');
const montantGagne = document.querySelector('#argent')
const boutiqueBouton = document.querySelector('#achat-PC')
boutiqueBouton.disabled = true; 
let butin = 0;

boutonCoffre.addEventListener('click', () => {
    butin = butin + 1 ;

    montantGagne.textContent = butin; 

    if (butin >= 10){
        boutiqueBouton.disabled = false;
    }

    else{
        boutiqueBouton.disabled = true;
    }
}); 




