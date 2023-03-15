document.addEventListener("DOMContentLoaded", () => {
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
