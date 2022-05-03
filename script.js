let btn = document.getElementById("btn")
let essential = document.getElementById("essential")
let investmets = document.getElementById("investments")
let noEssential = document.getElementById("noEssential")
let leisure = document.getElementById("leisure")

btn.addEventListener("click", ()=>{
    let salary = document.getElementById("salary").value    
    if(salary == ""){
        alert("put your salary")
    }
    else{
    let result = document.getElementById("result")
    result.style.display = "flex"
    
    essential.innerHTML = "Essential = " + 50/100 * salary 
    investmets.innerHTML = "Investment = " + 30/100 * salary
    noEssential.innerHTML = "No essential = " + 10/100 * salary
    leisure.innerHTML = "Leisure = " + 10/100 * salary
    }

})