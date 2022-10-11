// Je récupère mon bouton qui va lancer le dé
const button = document.querySelector(".rollButton");
// J'écoute le clic et appelle la fonction getRandomInt
button.addEventListener("click", getRandomInt);

// Fonction permettant de tirer un nombre au hasard
function getRandomInt() {
    //console.log("clique !!");
    // Je récupère la valeur du bouton radio checked
    let radioValue = document.querySelector('input[name="dice"]:checked').value;

    // Cherche un nombre entre 1 et le nombre récupérer dans la value
    let roll = Math.floor(Math.random() * radioValue) + 1;

    // Récupère l'élément img
    let imgElmt = document.querySelector(".dicePicture")
    let square = document.querySelector(".square")
    // Modifie l'image et le alt en fonction du nombre récupérer
    if (roll < 7) {
        //console.log("On a moins de 7 !");
        imgElmt.style.display = "block";
        square.style.display = "none";
        imgElmt.setAttribute("src", "img/dice" + roll + ".png");
        imgElmt.setAttribute("alt", "Face du dé " + roll);
    } else if (roll > 6){
        //console.log("On a plus de 6 !");
        imgElmt.style.display = "none";
        square.style.display = "block";
        square.textContent = roll;
    }
}