const Joi = require('joi');
const { getWallArea, getWindowsAndDoorsArea, getTotalArea } = require('../utils/handleArea');
const { getPaintCansQuantities } = require('../utils/calculatePaintCans');

// TODO: Tratar erros e configurar o Joi. Criar middleware de erro. Criar testes unitários e de integração.

const wallsSchema = Joi.array()
  .items({
    height: Joi.number().required(),
    width: Joi.number().required(),
    doors: Joi.number().required(),
    windows: Joi.number().required(),
  });

const getPaintCans = ({ walls }) => {
  const { error } = wallsSchema.validate(walls);

  if (error) {
    wallNumber = error.details[0].path[0];
    key = error.details[0].context.key;

    throw new Error(`${key} in wall ${wallNumber} is required`);
  };

  const wallsArea = {};
  walls.forEach((wall, index) => {
    const area = getWallArea(wall);

    // const areaIsValid = validateArea(area);

    // if (!areaIsValid) throw errorConstructor(status, message);

    const windowsAndDoorsArea = getWindowsAndDoorsArea(wall);

    // const areaWithWindowsAndDoorsIsValid = validateArea(windowsAndDoorsArea);

    // if (!areaWithWindowsAndDoorsIsValid) throw errorConstructor(status, message);

    wallsArea[index] = area - windowsAndDoorsArea;
  });

  const totalAreaToPaint = getTotalArea(wallsArea);

  const paintCans = getPaintCansQuantities(totalAreaToPaint);


  return paintCans;

  /*
  const wallsArea = {};
  walls.forEach((wall, index) => {
    const area = getWallArea(wall);
    
    const areaIsValid = validateArea(area);

    if (!areaIsValid) throw errorConstructor(status, message);

    const windowsAndDoorsArea = getWindowsAndDoorsArea(wall);

    const areaWithWindowsAndDoorsIsValid = validateArea(windowsAndDoorsArea);

    if (!areaWithWindowsAndDoorsIsValid) throw errorConstructor(status, message);

    wallsArea[index] = area - windowsAndDoorsArea;
  });

  const totalAreaToPaint = getTotalArea(wallsArea);

  depois de conseguir o totalArea, vamos conseguir a quantidade de latas de tinta necessária para pintar a área total

  const paintCans = getPaintCans(totalAreaToPaint);

  return { paintCans };
  */
}

module.exports = {
  getPaintCans
};
