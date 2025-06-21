// class vehicle{
//     constructor(type, color )
//     {
//         this.type=type
//         this.color=color
//     }
//     showdetails()
//     {
//         console.log(this.type,this.color)
//     }
// }

// let vehicle1= new vehicle("car","red")
// vehicle1.showdetails()

// Inheritance

// class Person{
//     constructor(name,age)
//     {
//         this.name=name
//         this.age= age
//     }
//     welcome()
//     {
//         console.log("Hello This is super class")
//     }
// }

// class student extends Person{
//     constructor(name,age,cgpa)
//     {
//         super(name,age)
//         this.cgpa=cgpa
//     }
//      a=()=>
//     {
//         console.log(`His name is ${this.name}
//             His age is ${this.age}
//             His CGPA is ${this.cgpa}`)
//     }
//     test()
//     {
//         super.welcome()
//     }
// }

// let student1 = new student("Hari",18,4)
// student1.a()
// student1.test() // We can also inherit the methods from one class to another class


// Prototype

// let a ={
//     name: "hari",
//     age: 6
// }
// console.log(a)


// function person(name,age){

//     this.name=name
//     this.age=age
// }
// let person1 = new person("hari",6)
// console.log(person)


const shape = {
 radius: 10,
 diameter: function(){
    return this.radius*2
 },
 perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());