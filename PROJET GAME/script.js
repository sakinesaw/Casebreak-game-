const boutonCoffre = document.querySelector('#bouton-coffre');
const montantGagne = document.querySelector('#argent')
const boutiqueBouton = document.querySelector('#achat-PC')
const nombrePc = document.querySelector('#nb-pc')
const montantPc = document.querySelector('#prix-pc')

// bloque le bouton de la boutique au démarrage
boutiqueBouton.disabled = true; 

// Variable qui stocke l'argent du joueur
let butin = 0;

// Variable valeur d'un clic en fonction des ameliorations
let puissanceClic = 1; 

// Variable compteur ordinateur 
let nbrPC = 0;

// Prix du pc initial
let prixPC = 10;


// Fonction qui vérifie le montant du butin actuel pour activer ou désactiver le bouton boutique

function verifierBoutique() {

        if (butin >= prixPC){
        boutiqueBouton.disabled = false;
    }

    else{
        boutiqueBouton.disabled = true;
    }
}

// actions lors du clic sur le coffre : gagner de l'argent

boutonCoffre.addEventListener('click', () => {
    butin = butin + puissanceClic ;

    montantGagne.textContent = butin.toFixed(2); 

    verifierBoutique()
}); 

// actions lors du clic sur la boutique : acheter un PC Elite

boutiqueBouton.addEventListener('click', () =>{

    butin = butin - prixPC ; 
    nbrPC = nbrPC + 1;

    if (nbrPC >= 5){
        prixPC = prixPC * 1.5;
    } 

    else{
        prixPC = prixPC
    } 

    montantGagne.textContent = butin.toFixed(2);
    nombrePc.textContent = nbrPC;
    montantPc.textContent = prixPC.toFixed(2); 

    puissanceClic = puissanceClic + 1 ; 

    verifierBoutique()
});




