
function addition(arr : number[]) : number
{

    console.log("elements of array are : ");
    
    var i : number = 0;
    var sum : number = 0;
    for(i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
        
    }
    return sum;
}


var marks : number[] = [67,89,77,90,88];
var result : number = 0;

result = addition(marks);
console.log("addition is : " +result);