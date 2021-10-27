const { request, response } = require("express");

const login = async(req = request, res = response) => {
  const { email, password } = req.body;

  res.status(200).json({
    email,
    password
  });
}

const register = async(req = request, res = response) => {
  const { email, password } = req.body;

  res.status(200).json({
    email,
    password
  });

}


module.exports = { login, register }
