const Employee = require('../lib/Employee.js')

test('creates a  new employee', () => {
    const employee = new employee();

    expect(employee.name)toEqual(expect.any(String));
    expect(employee.id)toEqual(expect.any(String));
    expect(employee.email)toEqual(expect.any(String));
    expect(employee.role)toEqual(expect.any(String));
});
test('Employees objecct properties', ( )=> {
    const employee = new employee();

    expect(employee.getName()).toHaveProperty('name');
    expect(employee.getId()).toHaveProperty('id');
    expect(employee.getEmail()).toHaveProperty('email');
    expect(employee.getRole()).toHaveProperty('role');
});