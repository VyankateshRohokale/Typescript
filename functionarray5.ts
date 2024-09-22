
function demo() : number[]
{
    var marks : string[] = ["cc", "gerg"];
    return marks;
}

var arr : number[];
arr = demo();

console.log("elements of array are : ");
var i : number = 0;

for(i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}
