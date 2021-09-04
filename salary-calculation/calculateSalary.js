const { Role } = require('./employee')

const DEV_BASE_SALARY = 3000
const DBA_AND_TESTER_BASE_SALARY = 2500

const DEV_HIGHER_DISCOUNT = 0.9
const DEV_LOWER_DISCOUNT = 0.8
const DBA_AND_TESTER_HIGHER_DISCOUNT = 0.85
const DBA_AND_TESTER_LOWER_DISCOUNT = 0.75

/**
 * @param {number} salary 
 * @param {number} discount 
 * @returns {number}
 */
function applyDiscount(salary, discount) {
  return salary * discount
}

module.exports = (employee) => {
  if (!Role[employee.role]) {
    return new Error('This employee\'s role does not exist')
  }

  if (employee.role === Role.DEV) {
    const discount = employee.salary <= DEV_BASE_SALARY ? DEV_HIGHER_DISCOUNT : DEV_LOWER_DISCOUNT
    return applyDiscount(employee.salary, discount)
  }

  if (employee.role === Role.DBA || employee.role === Role.TESTER) {
    const discount = employee.salary <= DBA_AND_TESTER_BASE_SALARY
      ? DBA_AND_TESTER_HIGHER_DISCOUNT : DBA_AND_TESTER_LOWER_DISCOUNT
    return applyDiscount(employee.salary, discount)
  }
}