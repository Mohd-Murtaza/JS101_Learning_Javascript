// Problem 1: Print the numbers from the given starting point till ending point (including both start and end)
var start = 1;
var limit = 100;
while (start <= limit) 
{
  console.log(start);
  start++;
};



// Problem 2: Print the odd numbers from 0 till the given limit
var limit=100;
var start=1;
while(start<=limit)
  {
    if(start%2 != 0)
    {
      console.log(start);
    }
    start++;
  };



  // Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit
var start=1; 
var limit=100;
var sum=0;
while(start<=limit)
  {
    if(start%3==0)
    {
      sum=sum+start;
    }
    start++;
  }
console.log(sum);




// Problem 4: Print the average of even numbers from 1 to 100 (both included)
var start=1;
var end=100;
var count=0;
var sum=0;
while(start<=end)
  {
    if(start%2==0)
    {
      sum=sum+start;
      count++;
    }
    start++;
  };
var average=sum/count;
console.log(average);
