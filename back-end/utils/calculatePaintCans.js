const getPaintLitersByArea = (area) => area / 5;

const getPaintCansQuantities = (totalAreaToPaint) => {
  /*
  Tenho um número, que é o totalAreaToPaint, e preciso saber quantas latas de tinta preciso para pintar esse número.
  Cada litro de tinta pinta uma área de 5m².
  Converter área total para quantidade de litros que o usuário precisa, dividindo a área por 5.
  Devolver a quantidade de latas necessárias, priorizando as maiores.
  Iterar sobre cada quantidade de tinta e ver se ela cabe em quantos litros o usuário precisa.

  Ex: se o usuário precisa de 19 litros, ele deve sugerir 1 lata de 18L + 2 latas de 0,5L.
  */
  // console.log("totalAreaToPAint", totalAreaToPaint);

  const paintCans = [18, 3.6, 2.5, 0.5];
  let paintCansQuantities = paintCans.reduce((acc, val) => ({ ...acc, [val]: 0 }), {});

  const neededPaintLiters = getPaintLitersByArea(totalAreaToPaint);

  // console.log("🚀 ~ file: calculatePaintCans.js ~ line 21 ~ getPaintCansQuantities ~ neededPaintLiters", neededPaintLiters)

  let neededLitersRemained = neededPaintLiters;

  // TODO: enviar restante que sobrou como aviso para o usuário e opção de compra de mais uma lata de 0.5L?

  while (neededLitersRemained > 0.5) {
    const paintCan = paintCans.find((paintCan) => paintCan <= neededLitersRemained);

    paintCansQuantities = {
      ...paintCansQuantities,
      [paintCan]: paintCansQuantities[paintCan] + 1,
    };

    neededLitersRemained = neededLitersRemained - paintCan;
  }

  return paintCansQuantities;
};

module.exports = {
  getPaintCansQuantities,
}