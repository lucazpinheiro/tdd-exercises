/**
 * TODO
 * 
 * - melhorar o algoritmo
 * - quebrar o código em funções menores seguindo o fluxo de TDD (red - green - refactoring)
 * - escreve o teste, falha, implementa a funcionalidade, passa no teste, refatora e repete
 */


const numeralsTable = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

/**
 * @param {string} romanNumeral 
 * @returns {number}
 */
module.exports = (romanNumeral) => {
  return Array.from(romanNumeral).reduce((total, numeral, position, numerals) => {
    let multiplier = 1
    const number = numeralsTable[numeral]
    
    const next = numeralsTable[numerals[position + 1]]
    if (number < next) multiplier = -1

    total += multiplier * number
    return total
  }, 0)
}