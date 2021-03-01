const link=document.querySelectorAll(".nav-link");
link.map(i=>{
  i.addEventListener("click",e=>{
    console.log(e)
  })
})