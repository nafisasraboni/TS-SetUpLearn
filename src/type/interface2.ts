type userRole = "Admin"|"User"|"Guest"|"Moderator"; 

interface user{
    name:string,
    role:string,
    email:userRole,
}

interface Admin extends user{
    permissions:string[];
}
interface Moderator extends user{
    moderatedSections:string[];
}

let mitali : Admin = {
    name:"Mitali",
    role:"Frontend developer",
    email:"Admin",
    permissions:["user check","settings check"]
}

//diff of type and interface

type book={name:string}
//type book={role:string}

interface gift{
    name:string
}

interface gift{
    role:string
}

const bdGift : gift={
    name:"Doll",
    role:"Barbie"
}