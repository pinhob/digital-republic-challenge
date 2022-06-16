const paintsService = require('../services/paints.service');

const getPaints = async (req, res, next) => {
  try {
    const data = req.body;

    const paintCans = await paintsService.getPaintCans(data);

    return res.status(200).json({ data: paintCans });
  } catch (error) {
    return res.json({ error });
  }
};

module.exports = {
  getPaints
};
