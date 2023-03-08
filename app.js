document.addEventListener("DOOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: "Trollface",
      imagenes: "magenes/TrollFace og.jpg"
    },
    {
      name: "Trollface",
      imag: "imagenes/trolface 2.jpge"
    },
    {
      name: "Trollface",
      img: "imagenes/trollface ayo 8.jpg"
    },
    {
      name: "Trollface",
      img: "imagenes/trollface cure 7.png"
    },
    {
      name: "Trollface",
      img: "imagenes/trollFace imp 4.jpg"
    },
    {
      name: "Trollface",
      img: "imagenes/trollFace lol 6.jpg"
    },
    {
      name: "Trollface",
      imagenes: "magenes/TrollFace og.jpg"
    },
    {
      name: "Trollface",
      imag: "imagenes/trolface 2.jpge"
    },
    {
      name: "Trollface",
      img: "imagenes/trollface ayo 8.jpg"
    },
    {
      name: "Trollface",
      img: "imagenes/trollface cure 7.png"
    },
    {
      name: "Trollface",
      img: "imagenes/trollFace imp 4.jpg"
    },
    {
      name: "Trollface",
      img: "imagenes/trollFace lol 6.jpg"
    }
  ];
});

const cuadricula = document.querySelector(".cuadricula");
const resultado = document.querySelector("#resultado");
var cartasEscogidas = [];
var cartasEscogidasId = [];
var cartaGanadas = [];

function crearTablero (){
  for (let i = 0; i < cardAdj.length; i++) { // Loop que inicia en i=0, se incrementa de 1 en 1 (i++) y finaliza
                                             // cuando i=cardAdj.length, es decir, 12.
    var carta = document.createElement('img'); // Crea elemento img cada vez que se ejecuta la función.
    carta.setAttribute('src', 'images/reverso.png'); //Asignar nuevo atributo a cada carta
                                                     //igual a la imagen 'reverso'.
    carta.setAttribute('data-id', i); //Asignar como atributo a cada carta creada, el id=i.
    carta.addEventListener('click', voltearCarta); //Detectar si la carta asignada recibe un click y ejecuta 
                                                   //la función voltearCarta.
    cuadricula.appendChild(carta); // Relaciona la carta creada con la variable cuadricula enlazada con la clase
                                   // cuadricula de html para que se imprima la carta creada en el div de html.
  }
} 
function voltearCarta() {
  var carId = this.getAttribute("data-id");
  cartasEscogidas.push(carAdj[cardId].name)
  cartasEscogidasId.push(cardId)
  this.setAttribute("src", cardAdj[cardId].img)
if (cartasEscogidas.length === 2) {
  setTimeout(verificarPareja, 1000);
  }
}
crearTablero();
}); 

