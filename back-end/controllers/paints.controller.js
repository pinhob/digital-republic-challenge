const paintsService = require('../services/paints.service');

const getPaints = async (req, res, next) => {
  try {
    const walls = req.body;

    const data = await paintsService.getPaintCans(walls);

    return res.status(200).json({ data });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

module.exports = {
  getPaints
};
