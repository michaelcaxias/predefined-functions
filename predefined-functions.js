const assert = require('assert')

const isEmpty = (value) => {
  if (value === undefined)
  return true;

if (typeof (value) === 'function' || typeof (value) === 'number'
 || typeof (value) === 'boolean' || Object.prototype.toString.call(value) === '[object Date]')
  return false;

if (value === null || value.length === 0) 
  return true;

if (typeof (value) === "object") {
  let result = true;

  for (let f in value) result = false;

  return result;
}
return false;
}

assert.deepStrictEqual(isEmpty(''), true, 'String vazia deve retornar: true')
assert.deepStrictEqual(isEmpty([]), true, 'Array vazio deve retornar: true')
assert.deepStrictEqual(isEmpty({}), true, 'Objeto vazio deve retornar: true')
assert.deepStrictEqual(isEmpty(null), true, 'Nulo deve retornar: true')
assert.deepStrictEqual(isEmpty(undefined), true, 'Indefinido deve retornar: true')
assert.deepStrictEqual(isEmpty('teste'), false, 'String com conteúdo deve retornar: false')
assert.deepStrictEqual(isEmpty(['teste']), false, 'Array com conteúdo deve retornar: false')
assert.deepStrictEqual(isEmpty({teste: 'teste'}), false, 'Objeto com conteúdo deve retornar: false')
assert.deepStrictEqual(isEmpty(0), false, 'Número deve retornar: false')
assert.deepStrictEqual(isEmpty(true), false, 'Boolean deve retornar: false')
assert.deepStrictEqual(isEmpty(false), false, 'Boolean deve retornar: false')