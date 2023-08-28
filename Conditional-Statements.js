var num=9;
(num%3==0)?console.log("multiple of 3"):null;


// Problem 2: If a person is allowed to drive in India print "Apply for a license" or "NA".
var AgeOfPerson=25;
var AgeForLicense=18;
(AgeOfPerson>=AgeForLicense)?console.log("Apply for a license"):console.log("NA");



// Problem 3: Given 2 numbers a and b print which is greater or "both equal".
var a=9;
var b=10;
(a>b)?console.log("a is greater"):(a<b)?console.log("b is greater"):console.log("both equal");


 // Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
 let username="murtaza";
 let password="mur123";
 var InputUsername="murtaza";
 var InputPassword="mur123";
 (username==InputUsername)&(password==InputPassword)?console.log("Can Login"):
 (username!==InputUsername)?console.log("Invalid Username"):
 (password!==InputPassword)?console.log("Incorrect Password"):null