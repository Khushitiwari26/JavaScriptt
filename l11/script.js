const Url="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getFacts = async () => { 
    console.log("getting data....");
    let response=await fetch(Url);
    console.log(response);//json format
    let data=await response.json();
    factPara.innerText=data[2].text;
}

// function getFacts(){
//     fetch(Url)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerText=data[2].text;
//     });
// }

btn.addEventListener("click",getFacts);