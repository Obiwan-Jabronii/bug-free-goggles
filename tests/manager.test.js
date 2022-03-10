const Manager = require('../lib/Manager.js');

test('creates a  new Manager', () => {
    const manager = new Manager();

    expect(manager.name)toEqual(expect.any(String));
    expect(manager.id)toEqual(expect.any(String));
    expect(manager.email)toEqual(expect.any(String));
    expect(manager.role)toEqual(expect.any(String));
    expect(manager.officeNumber)toEqual(expect.any(String));
});
test('Engineers object properties', ( )=> {
    const manager = new Manager();

    expect(manager.getName()).toHaveProperty('name');
    expect(manager.getId()).toHaveProperty('id');
    expect(manager.getEmail()).toHaveProperty('email');
    expect(manager.getRole()).toHaveProperty('role');
    expect(manager.officeNumber()).toHaveProperty('officeNumber');
});