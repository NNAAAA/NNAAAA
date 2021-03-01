const progressThumb=document.querySelector('.progress-thumb')
let count=0,count_sup=10;


setInterval(()=>{
  progress=setInterval(() => {
    progressThumb.style.width=count+"%";
    count++;
    if (count>100) {
      count=0
      clearInterval(progress)
    }
  }, 40)
},5000)
  

