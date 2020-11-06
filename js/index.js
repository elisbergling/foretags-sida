class Pizza {
  constructor(bild, namn, pris, ingredienser, fakta, ärJätteGod) {
    this.bild = bild;
    this.namn = namn;
    this.pris = pris;
    this.ingredienser = ingredienser;
    this.fakta = fakta;
    this.ärJätteGod = ärJätteGod;
  }
}

let pizzas = [
  Pizza("", "Hawaii", 23, ["fisk, bratfurst", "surkål"], "den är cool", true),
  Pizza("", "Hawaii", 23, ["fisk, bratfurst", "surkål"], "den är cool", true),
  Pizza("", "Hawaii", 23, ["fisk, bratfurst", "surkål"], "den är cool", true),
  Pizza("", "Hawaii", 23, ["fisk, bratfurst", "surkål"], "den är cool", true),
  Pizza("", "Hawaii", 23, ["fisk, bratfurst", "surkål"], "den är cool", true),
  Pizza("", "Hawaii", 23, ["fisk, bratfurst", "surkål"], "den är cool", true),
  Pizza("", "Hawaii", 23, ["fisk, bratfurst", "surkål"], "den är cool", true),
  Pizza("", "Hawaii", 23, ["fisk, bratfurst", "surkål"], "den är cool", true),
  Pizza("", "Hawaii", 23, ["fisk, bratfurst", "surkål"], "den är cool", true),
];

function genaratePizzas() {
  let htmlPizzas = [];
  for (i = 0; i < pizzas.length; i++) {
    pizza = (
      <div>
        {" "}
        <p> `{pizzas[i].namn}` </p>{" "}
      </div>
    );
    htmlPizzas.push(pizza);
  }
  return htmlPizzas;
}
