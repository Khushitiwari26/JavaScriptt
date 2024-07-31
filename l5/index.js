// function myFun(a,b){
//     s=a+b;
//     return s;
// }
// let val=myFun(8,100);
// console.log(val);

//sum function
// function sum(a,b){
//     return a+b;
// }

// const arrowsum=(a,b)=>{
//     return a+b;
// }

//multiply function
// function multiply(a,b){
//     return a*b;
// }

// const arrowmul=(a,b)=>{
//     return (a*b);
// }

// const printHello=()=>console.log('Hii');



// function countVowels(str){
//     let a=0;
//     for(let i of str){
//         if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
//             a=a+1;
//         }
//     }
//     return a;
// }
// console.log(countVowels('aeiouaeiou'));

// let a=(str)=>{
//     let a=0;
//     for(let i of str){
//         if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
//             a=a+1;
//        }
//     } 
//     return a;
// }
// console.log(a('abcd'));

// let a=[1,2,3,4,5];
// a.forEach(function printVal(val){
//     console.log(val);
// });


// let a=['pune','delhi','mumbai'];
// a.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// });


// let num=[1,2,3,4,5,6,7,8,9,10];
// let calcSquare=(val)=>{
//     console.log(val*val);
// };
//     num.forEach(calcSquare);


// let num=[1,2,3,4,5,6,7,8,9,10];
// let newArray=num.map((val)=>{
//     return val*val;
// });

// console.log(newArray);


// let num=[1,2,3,4,5,6,7,8,9,10];
// let evenArr=num.filter((val)=>{
//     return val>3;
// });
// console.log(evenArr);


// let num=[1,2,3,4];
// const output=num.reduce((res,curr)=>{
//     return res+curr;
// })
// console.log(output);


// let arr=[5,6,2,1,101,3];
// const op=arr.reduce((prev,curr)=>{
//     return prev<curr?prev:curr;
// });
// console.log(op);


// let marks=[97,63,32,49,99,86];
// let res=marks.filter((marks)=>{
//     return marks>=90;
// });
// console.log(res);

let n=prompt("Enter a number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
// let sum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// console.log(sum);
let fact=arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(fact);
