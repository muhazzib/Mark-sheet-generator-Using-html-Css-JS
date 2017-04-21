// var a=["a","b","c"];
// for(var i=0;i<a.length;i++){
    
// // }

// var a=+prompt("Enter password");
// var num=[0,1,2,3,4,5,6,7,8,9];
// for(var i=0;i<num.length;i++){
// if(a[0]===num[i]){
//     document.write("Error");
// }
// else{
//     document.write(a);
//     break;
// }
// }


// var password = prompt('enter password');
// var err = false;

// var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// var smallLeters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var capitalLetter = [];
// for (var i = 0; i < smallLeters.length; i++) {
//     var current = smallLeters[i].toUpperCase();
//     capitalLetter.push(current);
// }


// var firstChar = password[0];


// if (num.indexOf(firstChar) != -1 || password.length < 6) {
//     console.log(num.indexOf(firstChar));
//     err = true;
// }



// for (var i = 0; i < password.length; i++) {
//     if (num.indexOf(password[i]) == -1 && smallLeters.indexOf(password[i]) == -1 && capitalLetter.indexOf(password[i]) == -1) {
//         err = true;
//     }
// }
// if(err == true){
//     alert('invalid password');
// }


// var a=document.getElementById('one');
// a.innerHTML= "Muhazzib UD-din Farooqui";
// console.log(a);

// var a=prompt("Enter Name");
// var b=document.getElementById("one");
// b.innerHTML="Welcome"+a;
// console.log(b);

var name=prompt("Enter your name");
var rollno=+prompt("Enter Roll No");
var age=+prompt("Enter Age");
var institute=prompt("Enter Institute Name");
var marks1=+prompt("Enter Marks of English");
var marks2=+prompt("Enter Marks of Maths");
var marks3=+prompt("Enter Marks of Physics");
var marks4=+prompt("Enter Marks of Computer");
var marks5=+prompt("Enter Marks of Chemistry");


var a=document.getElementById("name");
a.innerHTML=name;

var b=document.getElementById("rollno");
b.innerHTML="Roll No: "+rollno;

var c=document.getElementById("age");
c.innerHTML="Age: "+age;

var d=document.getElementById("institute");
d.innerHTML=institute;

console.log(a);
console.log(b);
console.log(c);
console.log(d);


var e=document.getElementById("marksenglish");
e.innerHTML=marks1;

var f=document.getElementById("marksmaths");
f.innerHTML=marks2;

var g=document.getElementById("marksphysics");
g.innerHTML=marks3;

var h=document.getElementById("markscomputer");
h.innerHTML=marks4;


var i=document.getElementById("markschemistry");
i.innerHTML=marks5;



var j=document.getElementById("percentage");
j.innerHTML="Percentage: "+(((marks1+marks2+marks3+marks4+marks5)/500)*100)+"%";


var x=(((marks1+marks2+marks3+marks4+marks5)/500)*100);

if(x>=80 && x<=100){
    var k=document.getElementById("grade")
    k.innerHTML="Grade: A+"; 
}

else if(x>=70 && x<=79){
      var k=document.getElementById("grade")
    k.innerHTML="Grade: A"; 
}

else if(x>=60 && x<=69){
      var k=document.getElementById("grade")
    k.innerHTML="Grade: B"; 
}

else if(x>=50 && x<=59){
      var k=document.getElementById("grade")
    k.innerHTML="Grade: C"; 
}

else if(x>=0 && x<=59){
      var k=document.getElementById("grade")
    k.innerHTML="Grade: F"; 
}




