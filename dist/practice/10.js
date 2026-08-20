"use strict";
/* Problem statement: Create Employee interface (name, id, salary, department). Write updateEmployee using Partial<Employee>. Build two new types with Pick<Employee, "name" | "id"> and Omit<Employee, "salary">.
Input: updateEmployee({ name: "Rafi" })
Output: logs { name: "Rafi" }; Pick type = { name, id }; Omit type = { name, id, department }
 */
Object.defineProperty(exports, "__esModule", { value: true });
function updateEmployee(input) {
    return (input);
}
console.log(updateEmployee({ name: "Rafi" }));
//# sourceMappingURL=10.js.map