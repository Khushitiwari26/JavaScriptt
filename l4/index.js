

// let heroes=['ironman','thor','spiderman','captain america','hulk','antman','black widow'];
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }

// for(let item of heroes){
//     console.log(item.toUpperCase());
// }

// let marks=[85,97,44,37,60];
// let sum=0;
// for(let i of marks){
//     sum=sum+i;
// }
// let avg=sum/marks.length;
// console.log(`avg marks of the class=${avg}`);

let items=[250,645,300,900,50];
let idx=0;
// for(let val of items){
//     let offer=val/10;
//     items[idx]=items[idx]-offer;
//     console.log(`values after offer=${items[idx]}`)
//     idx++;
// }

// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]-=offer;
// }
// console.log(items);

// let eatables=['potato','tomato','litchi','apple'];
// console.log(eatables);
// console.log(eatables.toString());
// console.log(eatables);

// let marks=[85,97,44,37,60];
// console.log(marks);
// console.log(marks.toString());

// let marvel=['thor','spiderman','ironman','antman','hulk','dr. strange'];
// console.log(marvel.slice(1,3));


//marvel.shift("antman");
//console.log(marvel);


// let dc=['superman','batman'];
// let indian=['shaktiman','krish','balveer'];
// console.log(marvel.concat(dc,indian));

// let arr=[1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);

//element add
// arr.splice(2,0,101);

//delete element
// arr.splice(3,1);

//replace element
// arr.splice(3,1,101);


let companies=['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
console.log(companies.shift());
companies.splice(1,1,'Ola')
console.log(companies);
console.log(companies.push('Amazon'));

