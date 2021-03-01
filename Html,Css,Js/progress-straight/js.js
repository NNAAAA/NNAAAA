const progressThumb=document.querySelectorAll('.progress-thumb')
const progressValue=document.querySelector('.progress-value')
let count=0;

progressing=setInterval(() => {
  progressThumb.forEach(i=>{
    i.style.width=count+"%"
  })
  progressValue.innerHTML=count+"%"
  count++;
  if (count>100)
    clearInterval(progressing)
}, 20);
