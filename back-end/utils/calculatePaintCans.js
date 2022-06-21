const getPaintLitersByArea = (area) => area / 5;

const getPaintCansQuantities = (totalAreaToPaint) => {
  const paintCans = [18, 3.6, 2.5, 0.5];
  let paintCansQuantities = paintCans.reduce((acc, val) => ({ ...acc, [val]: 0 }), {});

  const neededPaintLiters = getPaintLitersByArea(totalAreaToPaint);

  let neededLitersRemained = neededPaintLiters;

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