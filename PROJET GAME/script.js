let boutique = [
    { nom: "PC Élite", prix: 10, quantite: 0, puissance: 1 },
    { nom: "Connexion Fibre Pro", prix: 50, quantite: 0, puissance: 5 },
    { nom: "Serveur Dédié", prix: 250, quantite: 0, puissance: 25 },
    { nom: "IA de Forçage", prix: 1250, quantite: 0, puissance: 125 },
    { nom: "Supercalculateur Quantique", prix: 7000, quantite: 0, puissance: 700 }
];

const boutonCoffre = document.querySelector('#bouton-coffre');
const montantGagne = document.querySelector('#argent')

const boutonsBoutique = document.querySelectorAll('.bouton-shop');
const affichagesPrix = document.querySelectorAll('.prix-produit');
const affichagesQuantite = document.querySelectorAll('.quantite-produit');

const affichageVitesse = document.querySelector('#vitesse-gain');

// bloque le bouton de la boutique au démarrage
boutonsBoutique.forEach((bouton) => {
    bouton.disabled = true;
});

// Variable qui stocke l'argent du joueur
let butin = 0;

// Variable valeur d'un clic en fonction des ameliorations
let puissanceClic = 1; 



// Fonction qui vérifie le montant du butin actuel pour activer ou désactiver le bouton boutique

function verifierBoutique() {

    boutonsBoutique.forEach((bouton, index) => {
         if (butin >= boutique[index].prix){
        bouton.disabled = false;
    }

    else{
        bouton.disabled = true;
    }
    });
}

// actions lors du clic sur le coffre : gagner de l'argent

boutonCoffre.addEventListener('click', () => {
    butin = butin + puissanceClic ;

    montantGagne.textContent = butin.toFixed(2); 

    verifierBoutique()
}); 

// actions lors du clic sur la boutique : acheter un PC Elite

boutonsBoutique.forEach((bouton, index) => {
    bouton.addEventListener('click', () =>{

    butin = butin - boutique[index].prix ; 
    boutique[index].quantite = boutique[index].quantite + 1;

    boutique[index].prix = boutique[index].prix *1.15

    montantGagne.textContent = butin.toFixed(2);
    affichagesQuantite[index].textContent = boutique[index].quantite;
    affichagesPrix[index].textContent = boutique[index].prix.toFixed(2); 

    verifierBoutique()
})});


setInterval(() => { let gainSeconde = 0; 
    
    boutonsBoutique.forEach((bouton, index) => {
    gainSeconde = gainSeconde + boutique[index].quantite * boutique[index].puissance
    }); 
    
    butin = butin + gainSeconde

    montantGagne.textContent = butin.toFixed(2);
    affichageVitesse.textContent = gainSeconde.toFixed(2);

    verifierBoutique() }
    , 1000);