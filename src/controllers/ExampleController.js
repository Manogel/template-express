const axios = require("axios");
const Example = require("../models/Example");

module.exports = {
  store(req, res) {
    try {
      return res.json({ ok: true });
    } catch (e) {
      return res
        .status(500)
        .json({ error: "Erro na conexão com o banco de dados!" });
    }
  },

  async index(req, res) {
    try {
      return res.json({ ok: true });
    } catch (e) {
      return res
        .status(500)
        .json({ error: "Erro na conexão com o banco de dados!" });
    }
  }
};
