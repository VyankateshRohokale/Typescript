
class Demo
{
    // characteristics
    no1 : number;
    no2 : number;


    constructor(A : number, B : number)
    {
        console.log("inside parametrised constructor");
        this.no1 = A;
        this.no2 = B;
    }
    // behaviour
    display()
    {
        console.log("Inside Display Function of Demo class");
    }
}

var obj1 = new Demo(10,11);
var obj2 = new Demo(20,21);

console.log(obj1.no1);
console.log(obj1.no2);

console.log(obj2.no1);
console.log(obj2.no2);

