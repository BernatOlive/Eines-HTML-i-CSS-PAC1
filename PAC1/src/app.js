var imatges = ["https://api.time.com/wp-content/uploads/2023/03/Worlds-Greatest-Places-Barcelona-Spain.jpg", "https://media.timeout.com/images/105890036/image.jpg", "https://media-cdn.tripadvisor.com/media/photo-m/1280/28/5f/12/72/caption.jpg"];
var idx = 0;
var temps = 3000; //temps en milisegons

function canviarImatge() {
    idx++;
    if (idx >= imatges.length) {
        idx = 0;
    }
    document.getElementById("portada").innerHTML = '<img src="' + imatges[idx] + '" alt="imatge de portada">';
    setTimeout(canviarImatge, temps);
}

canviarImatge();