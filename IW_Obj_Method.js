//  Problem
// Create an object with the following functionality

// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.
var student=["Murtaza", "Waqar", "Rahul"];
var eng=[85,80,60];
var math=[90,85,72];
var sci=[95,90,70]

const obj={
  students:[],
  addStudents:function(student,eng,math,sci)
    {
      let obj={};
      obj.Student=student;
      obj.English=eng;
      obj.Math=math;
      obj.Science=sci;
      this.students.push(obj)
    },
  PrintStundents:function()
    {
      console.log(this.students);
    },
  FindLeastTotal:function()
    {
      var name="";
      var leastmarks=null;
      for(let i=0; i<this.students.length; i++)
        {
          var sum=this.students[i].English+this.students[i].Math+this.students[i].Science;
          
          if(leastmarks==null)
          {
            name=this.students[i].Student;
            leastmarks=sum;
          }
          else if(leastmarks>sum)
          {
            name=this.students[i].Student;
            leastmarks=sum;
          }
        }
      console.log("Student with Least Marks -",name, leastmarks);
    },
  FindHighestTotal:function()
    {
      var name="";
      var leastmarks=null;
      for(let i=0; i<this.students.length; i++)
        {
          var sum=this.students[i].English+this.students[i].Math+this.students[i].Science;
          
          if(leastmarks==null)
          {
            name=this.students[i].Student;
            leastmarks=sum;
          }
          else if(leastmarks<sum)
          {
            name=this.students[i].Student;
            leastmarks=sum;
          }
        }
      console.log("Student with Highest Marks -",name, leastmarks);
    },
};
for(let i=0; i<student.length; i++)
  {
    obj.addStudents(student[i],eng[i],math[i],sci[i])
  };
// console.log(obj)
obj.PrintStundents()
obj.FindLeastTotal()
obj.FindHighestTotal()
