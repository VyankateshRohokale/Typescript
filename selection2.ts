function checkeven(no : number) : boolean
{
    if((no % 2) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var value : number = 11;

var result : boolean = false;
result = checkeven(value);


if(result == true)
{
    console.log("it is even");
}
else
{
    console.log("it is odd");
}