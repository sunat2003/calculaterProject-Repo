btn=document.querySelectorAll(".btn");
screenInt=document.querySelector(".screen-int")

btn.forEach(function(ele){
    ele.addEventListener("click",
        ()=>{
            if(ele.value== '=')
            {
                screenInt.value=eval(screenInt.value)
            }
            else if(ele.value== 'AC'){
                screenInt.value=""
            }
            else if(ele.value== 'DC')
            {
                screenInt.value= screenInt.value.slice(0,-1);
            }
            else
            {
            screenInt.value+=ele.value
            }
        }
    )
})

console.log(btn);