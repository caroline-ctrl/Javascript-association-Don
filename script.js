function boutbon(){
    swal({
        text: "Formulaire envoyé avec succès !",
        icon: "success",
        button: "Entrez",
        });
}


//CAROUSEL
let photos = ["elephants.jpg", 'lion.jpg', 'panda.jpg'];
document.getElementById('images').innerHTML = '<img src="' + photos[0] + '" alt="carousel">';

let i = 0;

function bout1() {
    i--;
    if(i < 0){
        i = photos.length -1;
    }
    document.getElementById('images').innerHTML = '<img src="' + photos[i] + '" alt="carousel">';
}

function bout2() {
    i++;
    if(i > photos.length -1){
        i = 0;
    }
    document.getElementById('images').innerHTML = '<img src="' + photos[i] + '" alt="carousel">';
}







//FORMULAIRE


//document.getElementById('para3').innerHTML = '<p>Chévre</p> <p>Gouda</p> <p>Saint Moret</p>';

/*let vote ="";//variable vide

function save(x){//puis on applique nos functionspour enregistrer le réponse dans la variable
    vote = x
};


function transfer()  {//pour tranfer le réponse vers le button
    document.profession.resultat.value=vote
};*/