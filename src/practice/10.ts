/* Problem statement: Create Employee interface (name, id, salary, department). Write updateEmployee using Partial<Employee>. Build two new types with Pick<Employee, "name" | "id"> and Omit<Employee, "salary">.
Input: updateEmployee({ name: "Rafi" })
Output: logs { name: "Rafi" }; Pick type = { name, id }; Omit type = { name, id, department }
 */

interface Employee{
    name:string, 
    id:number, 
    salary:number, 
    department:string
}

function updateEmployee(input:Partial<Employee>){
    return(input)  
}
console.log(updateEmployee({ name: "Rafi" }))
type newType1 = Pick<Employee, "name" | "id">
type newType2 = Omit<Employee, "salary">
