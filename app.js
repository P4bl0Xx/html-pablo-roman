document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: "Trollface",
      imagenes: "imagenes/1.jpg"
    },
    {
      name: "Trollface",
      imagenes: "imagenes/2.jpg"
    },
    {
      name: "Trollface",
      imag: "imagenes/3.jpg"
    },
    {
      name: "Trollface",
      img: "imagenes/4.jpg"
    },
    {
      name: "Trollface",
      img: "imagenes/5.png"
    },
    {
      name: "Trollface",
      img: "imagenes/6.jpg"
    },
    {
      name: "Trollface",
      img: "imagenes/7.jpg"
    },
    {
      name: "Trollface",
      imagenes: "imagenes/8.jpg"
    },
    {
      name: "Trollface",
      imag: "imagenes/1.jpg"
    },
    {
      name: "Trollface",
      img: "imagenes/2.jpg"
    },
    {
      name: "Trollface",
      img: "imagenes/3.png"
    },
    {
      name: "Trollface",
      img: "imagenes/4.jpg"
    },
    {
      name: "Trollface",
      img: "imagenes/5.jpg"
    },
    {
      name: "Trollface",
      imagenes: "imagenes/6.jpg"
    },
    {
      name: "Trollface",
      imagenes: "imagenes/7.jpg"
    },
    {
      name: "Trollface",
      imagenes: "imagenes/8.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartaGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
function verificarPareja() {
  var cards = document.querySelectorAll("img")
  const opcionUnoId = cartasEscogidas[0];
  const opcionDosId = cartasEscogidasId[1];

  if (opcionUnoId === opcionDosId) {
    cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png")
    cards[opcionDosId].setAttribute("src", "imagenes/reverso.png")
    alert("¡Diste click a la misma imagen!");
  } else if (cartasEscogidas[0] === cartasEscogidas[1])
     alert("¡Correcto!");
     cards[opcionUnoId].setAttribute("src", "iamges/blank.png")
     cards[opcionUnoId].setAttribute("src", "iamges/blank.png")
     cards[opcionUnoId].removeEventListener("click", voltearCarta);
     cards[opcionUnoId].removeEventListener("click", voltearCarta);
     cartasGanadas.push(cartasEscogidas);
} else {
  cards[]


  }
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardsAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1500);
    }
  }
  crearTablero();
});
