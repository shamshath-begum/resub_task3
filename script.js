// / For loop in Array :
let array = [1,2,3,4,5]
console.log("For Method in Array");

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

// For in Method in Object:
let employee = {
    Name: "shama",
    Age: 26,
    Company_name: "XYZ Technologies",
    Address: "Coimbagore"
}
console.log("For in Method in Object");

for (let n in employee) {
    console.log(n + ": " + employee[n]);
}

// For in Method in Array:
let staff =["shama", "sheereen", "rifa"]
console.log("For in Method in Array");

for (let z in staff){
    console.log(staff[z]);
}

// For of Method in Array:
const colour =["Black", "White", "Red"]
console.log("For of Method in Array");

for (let m of colour){
    console.log(m);
}

// For Each Method in Array:
let district =["Coimbatore", "Tirupur", "Dindugal"]
console.log("For Each Method in Array");

district.forEach(y => {
    console.log(y);
});

 