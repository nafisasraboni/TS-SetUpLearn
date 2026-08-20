"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sraboni = {
    name: "Sraboni",
    id: 22,
    department: "Full-Stack Developer",
    salary: 175000
};
const payel = {
    name: "Payel",
    id: 23,
    department: "Architect",
    salary: 200000
};
const moon = {
    name: "Moon",
    id: 24,
    department: "App Developer",
    salary: 160000
};
const shanto = {
    name: "Shanto",
    id: 24,
    department: "Architect",
    salary: 190000
};
function printEmployeeDetails(employee) {
    console.log(`Name:${employee.name}`);
    console.log(`Name:${employee.id}`);
    console.log(`Name:${employee.department}`);
}
printEmployeeDetails({ name: "sraboni", id: 1, department: "CSE" });
function displayEmployeeDetails({ name, id }) {
    console.log(`Name:${name}`);
    console.log(`Name:${id}`);
}
displayEmployeeDetails(sraboni);
//# sourceMappingURL=interface.js.map