const { validarPassword } = require('./authService');

describe('Pruebas de Seguridad en Contraseñas', () => {
  test('Debe rechazar contraseñas débiles', () => {
    expect(validarPassword('clave123')).toBe(false);
    expect(validarPassword('sin_numeros')).toBe(false);
  });

  test('Debe aceptar contraseñas seguras (Alta cobertura)', () => {
    expect(validarPassword('P@ssw0rdSegur0')).toBe(true);
  });
});