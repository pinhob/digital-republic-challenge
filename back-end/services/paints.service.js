const Joi = require('joi');
const { getWallArea,
  getWindowsAndDoorsArea,
  getTotalArea,
  validateArea,
  validateAreaWithWindowsAndDoors } = require('../utils/handleArea');
const { getPaintCansQuantities } = require('../utils/calculatePaintCans');
const errorMessageConstructor = require('../utils/errorMessageConstructor');

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

    throw errorMessageConstructor(400, `${key} in wall ${wallNumber} is required`);
  };

  const wallsArea = {};
  walls.forEach((wall, index) => {
    // TODO: Componetizar de forma melhor esta lógica. Colocar todas as validações em um único aruqivo. 
    if (wall.height < 2.20 && wall.doors > 0) {
      throw errorMessageConstructor(400, `Wall height must be at least 30 centimeters bigger than door height`);
    }

    const area = getWallArea(wall);

    const areaIsValid = validateArea(area);

    if (!areaIsValid) throw errorMessageConstructor(400, 'Area is invalid. Wall area must be between 1 and 50');

    const windowsAndDoorsArea = getWindowsAndDoorsArea(wall);

    const areaWithWindowsAndDoorsIsValid = validateAreaWithWindowsAndDoors(windowsAndDoorsArea, area);

    if (!areaWithWindowsAndDoorsIsValid) throw errorMessageConstructor(400, 'Doors and windows area is invalid. Doors and windows area must be less than 50% of wall area');

    wallsArea[index] = area - windowsAndDoorsArea;
  });

  const totalAreaToPaint = getTotalArea(wallsArea);

  const paintCans = getPaintCansQuantities(totalAreaToPaint);


  return paintCans;
}

module.exports = {
  getPaintCans
};
