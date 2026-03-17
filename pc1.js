const userJSON = '{"name": "Ilhan", "age": 22, "city": "Punjab"}';

const userObj = JSON.parse(userJSON);


console.log("Name:", userObj.name);
console.log("Age:", userObj.age);
console.log("City:", userObj.city);


userObj.age = 25;


const newJSON = JSON.stringify(userObj);

console.log("JSON String:", newJSON);