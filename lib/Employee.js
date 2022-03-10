

class Employee {
    constructor(name = '', id = '', email = '', role = '') {
       this.name = name;
       this.id = id;
       this.email = email;
       this.role = role;
    }
    getId() {
        return { id: this.id};
    }
    getName() {
        return {name: this.name};
    }
    getEmail() {
        return {email: this.email}
    }
    getRole() {
        return {role: this.role}
    }

}

module.exports = Employee;