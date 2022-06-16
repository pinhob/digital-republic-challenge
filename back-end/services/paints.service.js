const Joi = require('joi');
const { getWallArea, getWindowsAndDoorsArea, getTotalArea } = require('../utils/handleArea');
const { getPaintCansQuantities } = require('../utils/calculatePaintCans');


const getPaintCans = ({ walls }) => {
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

  return { paintCans };

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
