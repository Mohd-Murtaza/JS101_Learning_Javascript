let products = [
    { name: 'Apple', price: 13, inStock: true },
    { name: 'Banana', price: 1, inStock: false },
    { name: 'Cherry', price: 12, inStock: true },
    { name: 'Grape', price: 5, inStock: true }
  ];
  
  let ans = products.filter(ele => ele.inStock == true && ele.price > 10 ).map(ele => ele.price).reduce((acc,curr)=> acc + curr,0)
  
  console.log(ans)



  // Problem 1: Find the average of elements present at odd index of the following array.
let arr1 = [10, 24, 56, 72, -10, -88, 100, 564];
var sum=0;
var count=0;
let findOddIndex=arr1.forEach((ele, index) => 
  {
      if(index%2!=0)
      {
        sum+=ele
        count++
      }
      return sum 
  });
var avg=sum/count;
console.log(avg)



// // Problem 2: Create a new array from the given array such that each element of the new array is raised to a power of 5.
let Input = [2, 3, 4, 6, 7]
// // Output = [32, 243, 1024, 7776, 16807]
let ans3=Input.map(ele => 
  {
      return ele**5 
  })
console.log(ans3);




// Problem 3: Taking the following array into consideration get the output as given below:
var arr2 = [3,4,5,6,7]
// Output ==> 3 - 5 - 7
// Hint: You have to use forEach and conditional statement over here.
arr2.forEach(function(arr2)
            {
              if(arr2%2!=0)
              console.log(arr2)
            });