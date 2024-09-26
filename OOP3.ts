
class Demo
{
    // characteristics
    no1 : number;
    no2 : number;


    constructor()
    {
        console.log("inside default constructor");
        this.no1 = 0;
        this.no2 = 0;
    }
    // behaviour
    display()
    {
        console.log("Inside Display Function of Demo class");
    }
}

var obj = new Demo();

obj.display();
console.log(obj.no1);
console.log(obj.no2);

