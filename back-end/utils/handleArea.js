const getWallArea = (wall) => {
  const { width, height } = wall;
  return width * height;
}

const getWindowsAndDoorsArea = (wall) => {
  const { windows, doors } = wall;

  // TODO: criar arquivo separado para armazenar esses valores?
  const windowHeight = 2.00;
  const windowWidth = 1.20;
  const doorHeight = 2.00;
  const doorWidth = 2.00;

  const windowsArea = (windowHeight * windowWidth) * windows;
  const doorsArea = (doorHeight * doorWidth) * doors;

  return windowsArea + doorsArea;
}

const getTotalArea = (wallsArea) => {
  return Object.values(wallsArea).reduce((acc, curr) => acc + curr, 0);
};

module.exports = {
  getWallArea,
  getWindowsAndDoorsArea,
  getTotalArea
};
