const boutonCoffre = document.querySelector('#bouton-coffre');
const montantGagne = document.querySelector('#argent')
const boutiqueBouton = document.querySelector('#achat-PC')

// bloque le bouton de la boutique au démarrage
boutiqueBouton.disabled = true; 

// Variable qui stocke l'argent du joueur
let butin = 0;


// Fonction qui vérifie le montant du butin actuel pour activer ou désactiver le bouton boutique

function verifierBoutique() {

        if (butin >= 10){
        boutiqueBouton.disabled = false;
    }

    else{
        boutiqueBouton.disabled = true;
    }
}

// actions lors du clic sur le coffre : gagner de l'argent

boutonCoffre.addEventListener('click', () => {
    butin = butin + 1 ;

    montantGagne.textContent = butin; 

    verifierBoutique()
}); 

// actions lors du clic sur la boutique : acheter un PC Elite

boutiqueBouton.addEventListener('click', () =>{

    butin = butin - 10 ; 

    montantGagne.textContent = butin; 

    verifierBoutique()
});




