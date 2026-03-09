const bcrypt = require('bcrypt');

function validarPassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(password);
}

async function hashearPassword(passwordPlain) {
  const saltRounds = 12; // Factor de costo alto para seguridad
  return await bcrypt.hash(passwordPlain, saltRounds);
}

module.exports = { validarPassword, hashearPassword };