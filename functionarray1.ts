
function Display(arr : number[]) : void
{

    console.log("elements of array are : ");
    
    var i : number = 0;
    for(i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
    }

}


var marks : number[] = [67,89,77,90,88];

Display(marks);