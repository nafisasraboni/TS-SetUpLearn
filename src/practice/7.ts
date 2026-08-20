/* Problem statement: Create HasId interface (id: number). Write findById<T extends HasId> that searches an array for a matching id. Write a call that violates the constraint and comment on the error.
Input: [{ id: 1, name: "A" }, { id: 2, name: "B" }], search id: 2
Output: { id: 2, name: "B" }; commented line shows constraint-violation error (e.g. passing an object without id).
 */

interface HasId{
    id:number
    name:string
}

function findById<T extends HasId>(arr:T[],searchId:number):T|undefined{
      let search = arr.find(item=>{
        return item.id===searchId
      }) 
      return search
}
console.log(findById( [{ id: 1, name: "A" }, { id: 2, name: "B" }],1))