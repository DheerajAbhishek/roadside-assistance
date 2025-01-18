let x=document.querySelector("#x")
let p=document.querySelector("p")
x.addEventListener("input", function () { y = x.value; console.log("updated value of y", y);p.innerText=y });
let b=document.querySelector("button")
