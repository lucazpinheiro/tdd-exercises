const assert = require('assert')
const { Role, Employee } = require('./employee')
const calculateSalary = require('./calculateSalary')

describe('Salary calculation', () => {
  it('Should apply a 10% discount for devs with salary equal to or lower than R$ 3000,00', () => {
    const employee = new Employee('test', 1500, Role.DEV)

    const finalSalary = calculateSalary(employee)
    assert.strictEqual(finalSalary, 1500 * 0.9)
  })

  it('Should apply a 20% discount for devs with salary higher than R$ 3000,00', () => {
    const employee = new Employee('test', 4000, Role.DEV)

    const finalSalary = calculateSalary(employee)
    assert.strictEqual(finalSalary, 4000 * 0.8)
  })

  it('Should apply a 15% discount for dbas/testers with salary equal or lower than R$ 1500,00', () => {
    const employee = new Employee('test', 1500, Role.DBA)

    const finalSalary = calculateSalary(employee)
    assert.strictEqual(finalSalary, 1500 * 0.85)
  })
})