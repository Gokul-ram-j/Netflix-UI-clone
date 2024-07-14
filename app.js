let getquestion= document.querySelector(".qcollection")
getquestion.addEventListener("click",(e)=>{
    let question_number=e.target.getAttribute("class")[1]
    let elem;
    for(i=1;i<=6;i++)
    {
       if(i==question_number ){
            elem=document.querySelector(`.a${i}`)
            elem.style.display="block"
            opened=true
        }
        else{
            elem=document.querySelector(`.a${i}`)
            elem.style.display="none"
        }
    }
})