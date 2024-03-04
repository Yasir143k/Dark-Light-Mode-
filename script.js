let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click",()=>{
    if (currmode === "light") {
        modebtn.innerText = "Light";
        modebtn.style.color = "#fff";
        modebtn.style.border = "2px solid #fff"
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");

    } else {
        modebtn.innerText = "Dark";
        modebtn.style.color = "#000";
        modebtn.style.border = "2px solid #000"
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
})
