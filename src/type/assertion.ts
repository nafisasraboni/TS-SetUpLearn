let value : unknown;

// value.toUppercase();
// value.toFixed(2);

let myValue = value as string;
myValue.toUpperCase();

let yourValue = value as number;
yourValue.toFixed(2);


let data : unknown;
interface user {
    name:string,
    role:string
}

let datata = data as user;
console.log(datata.name)

let flower = {
    name : "Sunflower",
    color : "Yellow"
}as const;

flower.color="red"
console.log(flower.color)