// let div=document.querySelector('div');
// console.dir(div);

// let h=document.querySelector('h1');
// console.dir(h);

// let h=document.querySelector('class');
// console.dir(h.innerText);
// h.innerText=h.innerText+'from me';
// console.dir(h.innerText);

let divs=document.querySelectorAll(".class");
let idx=1;
for(x of divs){
    divs.innerText=`new unique value ${idx}`;
    idx++;
}
