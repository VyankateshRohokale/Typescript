
class arithmetic
{
    public no1 : number;
    public no2 : number;

    constructor(A : number, B : number)
    {
        this.no1 = A;
        this.no2 = B;
    }

    Addition() : number
    {
        var ans : number;
        ans = this.no1 + this.no2;
        return ans;
    }

    Substraction() : number
    {
        var ans : number;
        ans = this.no1 - this.no2;
        return ans;
    }

}

var obj1 = new arithmetic(11,10);
var obj2 = new arithmetic(25,21);

console.log(obj1.no1);
console.log(obj1.no2);

var result : number = 0;

result = obj1.Addition();
console.log(result);

result = obj2.Substraction();
console.log(result);
