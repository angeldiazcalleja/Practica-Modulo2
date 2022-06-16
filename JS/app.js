var hotel = {
    name: "Paris",
    location: "Las Vegas",
    img: "https://losviajesdedomi.com/mejores-hoteles-de-las-vegas/"
}


hotel.name = prompt ("Introduce el nombre del hotel");
document.getElementById("hotel-name").innerHTML = "Hotel " + hotel.name;


hotel ["location"]= prompt("Introduce la ubicación del hotel");
document.getElementById("hotel-location").innerHTML = hotel ["location"];


document.getElementById ("fachada").src="img/image.png";


/*Usuario */

var rating = prompt ("Puntuación del 1 al 5");
document.getElementById("rating").innerHTML = rating + " estrellas";

var anonymous =confirm ("¿Quiere que su reseña sea pública?");
document.getElementById("anonymous").Checked =anonymous;