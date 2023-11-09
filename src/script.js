const input = document.querySelector("#input")
const error = document.querySelector("#erro")
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/


input.addEventListener("input", () => {
    if(emailRegex.test(input.value)){
       error.classList.add("hidden") 
    
    }else {
        error.classList.remove("hidden")        
    }

})
