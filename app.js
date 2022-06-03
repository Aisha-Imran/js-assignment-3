// Chapter 21 - 25

// Question#1
// var firstName=prompt("Enter first name");
// var lastName=prompt("Enter last name");
// var fullName=firstName+lastName
// alert("Hello"+" "+fullName)

// Question#2

// var phoneModel=prompt("Enter your favourite phone model");
// alert("My favourite phone is" +" "+phoneModel+"\n"+"Length of string is"+phoneModel.length)

//Question#3

//  var text = "Pakistani";
//  var result = text.indexOf("n");
// document.write("String:"+text+"<br/>"+"index of 'n'"+result)



// //Question#4
// var text="Hello World"
// var result=text.lastIndexOf("l")
// document.write("String:"+text+"<br/>"+"Last index of 'l'"+" "+result)

//Question#5

// let text = "Pakistani";
// let letter = text.charAt(3);
// // document.write(letter)
// document.write("String:"+text+'<br/>'+ 'Character at index 3:'+letter)

//Question#6
// var firstName=prompt("Enter first name");
// var lastName=prompt("Enter last name");
// var fullName=firstName+lastName
// alert("Hello"+" "+fullName)

//Question#7
// var city="Hyderabad"
// var newcity=city.replace("Hyder","Islam")
// document.write(newcity)

//Question#8
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var replacetext=message.replaceAll("and","&")
// document.write(replacetext)


//Question#9
// var value="472";
// console.log(typeof(value))
// var newVal=parseInt(value)
// console.log(typeof(newVal))

// var value="472";
// console.log(typeof(value))
// var newval=parseInt(value)
// console.log(typeof(newVal))

//Question#10

// var input=prompt("Enter input");
// let result = input.toUpperCase();
// console.log(result)

//Question#11
// var input=prompt("Enter input");
// var result=input.toUpperCase();
// console.log(result)

// var input=prompt("Enter input");
// var result=input[0].charAt();
// console.log(result)

//Question#12
// var num = 35.36;
// var without = num.toString().replace(".", "")
// console.log(without)


//Q13






//Q14
// var arr=['cake','apple pie' ,'cookie','chips','patties']
// var input=prompt('enter your item here').toLocaleLowerCase()
// for(var i=0;i<=arr.length;i++){
//     if(input==arr[i]){
//         document.write(arr[i]+ " "+ "is found at "+  " "+i)
//     }
// }






//File 2 (Chapter# 26-30)


//Question#1
// var num=Number(prompt("enter no"))
// var round=Math.round(num)
// console.log(round)
// var floor=Math.floor(num)
// console.log(floor)
// var ceil=Math.ceil(num)
// console.log(ceil)


//Question#2
// var num=-Number(prompt("Enter number"))
// var round=Math.floor(num)
// console.log(round)
// var ceil=Math.ceil(num)
// console.log(ceil)
// var floor=Math.floor(num)
// console.log(floor)


//Question#3
//  var num=-4
//  var result=Math.abs(num)
//  console.log(result)
//  var num1=-5
//  var result1=Math.abs(num1)
//  console.log(result1)

//Question#4
//  var a=Math.random()
//  console.log(a)
//  var result=Math.floor(a*7)

//  console.log(result)


//Question#5

// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("0 <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     document.write("1 <br> Random Coin Value: Tails")
// }


//Question#6
var  random=(Math.random()*100)+1
console.log(Math.floor(random))

//Question # 7


//Question#8

// var secretNumber = 7
// var userInput = prompt("Enter the secret number")
// if (userInput == secretNumber) {
//     console.log(' "Bingo!Correct answer." ')
// }
// else {
//     console.log("try again")
// }
