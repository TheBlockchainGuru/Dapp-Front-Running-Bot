const { BlackToken } = require("../models");

module.exports = {
  list(req, res) {
    BlackToken.findAll({})
      .then((tokens) =>
        res.status(201).json({
          error: false,
          data: tokens,
        })
      )
      .catch((error) =>
        res.json({
          error: true,
          message: error,
        })
      );
  },

  add(req, res) {
    const { name, symbol, address } = req.body;

    BlackToken.create({
      name: name,
      symbol: symbol,
      address: address,
    });
  },

  delete(req, res) {
      
    const { address } = req.body;

    console.log(req.body)

    BlackToken.destroy({
      where: {
        address: address,
      },
    })
      .then((status) =>
        res.status(201).json({
          error: false,
          message: "token has been deleted",
        })
      )
      .catch((error) =>
        res.json({
          error: true,
          error: error,
        })
      );
  },
};
