interface Employee {
    name: string;
    id: number;
    department: string;
    salary?: number
}

const sraboni: Employee = {
    name: "Sraboni",
    id: 22,
    department: "Full-Stack Developer",
    salary: 175000
}
const payel: Employee = {
    name: "Payel",
    id: 23,
    department: "Architect",
    salary: 200000
}
const moon: Employee = {
    name: "Moon",
    id: 24,
    department: "App Developer",
    salary: 160000
}
const shanto: Employee = {
    name: "Shanto",
    id: 24,
    department: "Architect",
    salary: 190000
}

function printEmployeeDetails(employee: Employee): void {
    console.log(`Name:${employee.name}`);
    console.log(`Name:${employee.id}`);
    console.log(`Name:${employee.department}`);
}
printEmployeeDetails({name:"sraboni",id:1,department:"CSE"})

function displayEmployeeDetails({name,id}:Employee):void{
    console.log(`Name:${name}`);
    console.log(`Name:${id}`);
}
displayEmployeeDetails(sraboni)