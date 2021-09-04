
const Role = {
  DEV: 'DEV',
  DBA: 'DBA',
  TESTER: 'TESTER'
}

class Employee {
  #name
  #salary
  #role
  /**
   * @param {string} name 
   * @param {number} salary 
   * @param {string} role 
   */
  constructor(name, salary, role) {
    this.#name = name
    this.#salary = salary
    this.#role = role
  }

  get salary() {
    return this.#salary
  }

  get role() {
    return this.#role
  }
}

module.exports = {
  Role,
  Employee
}