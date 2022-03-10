const Engineer = require('../lib/Engineer.js')

test('creates a  new Engineer', () => {
    const engineer = new Engineer();

    expect(engineer.name)toEqual(expect.any(String));
    expect(engineer.id)toEqual(expect.any(String));
    expect(engineer.email)toEqual(expect.any(String));
    expect(engineer.role)toEqual(expect.any(String));
    expect(engineer.github)toEqual(expect.any(String));
});
test('Engineers object properties', ( )=> {
    const engineer = new Engineer();

    expect(engineer.getName()).toHaveProperty('name');
    expect(engineer.getId()).toHaveProperty('id');
    expect(engineer.getEmail()).toHaveProperty('email');
    expect(engineer.getRole()).toHaveProperty('role');
    expect(engineer.getGithub()).toHaveProperty('github');
});