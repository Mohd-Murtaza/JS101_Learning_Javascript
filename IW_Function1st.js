// Problem 1: Create a function to check if a number is Prime or Not
function check_prime(num)
{
  var count=0
  for(var i=1; i<=num; i++)
    {
      if(num%i==0)
      {
        count++
      }
    }
  (count==2)?console.log("prime number"):console.log("not prime")
}
check_prime(5);




// Problem 2: Use the above function to print the Primes from 2 to a given limit
function check_prime(num)
{
  for(var i=2; i<=num; i++)
    {
      var count=0
      for(let j=1; j<=i; j++)
        {
          if(i%j==0)
            {
              count++
            }
        }
      (count==2)?console.log(i):null;
    }
}
check_prime(100);



// Problem 3: Use the same function to print Non-Primes from 2 to a given limit
function check_prime(num)
{
  for(var i=2; i<=num; i++)
    {
      var count=0
      for(let j=1; j<=i; j++)
        {
          if(i%j==0)
            {
              count++
            }
        }
      (count>2)?console.log(i):null;;
    }
}
check_prime(100);



// Problem 4: Write a function to check if the char is a small case or not.
function check_case(char)
{
  var lower_case="abcdefghijklmnopqrstuvwxyz";
  for(var i=0; i<lower_case.length; i++)
    {
      if(lower_case[i]==char)
      {
        console.log(char,"- is Small Case")
        break;
      }
      else
      {
        console.log(char,"- in Not Small Case")
        break;
      }
    }
}
check_case("a");
check_case("B")



// Problem 5: Write a function to replace spaces in a given string with - .
function Replace_spaces(str)
{
  var output="";
  for(let i=0; i<str.length; i++)
    {
      (str[i]==" ")?output+="_":output+=str[i]
    }
  console.log(output)
}
Replace_spaces("Masai School is a very good coding learning plateform")