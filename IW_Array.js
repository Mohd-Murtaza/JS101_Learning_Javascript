// Problem 1 : Given an array print the position (starting with 1) and the element in a single line.
var arr=[1,5,9,4,1];
for(var i=0; i<arr.length; i++)
  {
    console.log("Position/Index",i,"Element of Array", arr[i]);
  };


  // Problem 2 : Given a character in lower case print the upper case character
var input="hihiui";
var output="";
var LowerChar="abcdefghijklmnopqrstuvwxyz";
var UpperChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(var j=0; j<input.length; j++)
  {
    for(var i=0; i<LowerChar.length; i++)
      {
        (input[j]==LowerChar[i])?output+=UpperChar[i]:null;
      }
  }
console.log(output);



// Problem 3 : Given an array of numbers find the average of all the even numbers.
var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var sum=0;
var count=0;
for(var i=0; i<arr.length; i++)
  {
    if(arr[i]%2==0)
    {
      sum+=arr[i]
      count++
    }
  }
console.log(sum/count)