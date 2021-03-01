const progressLeft=document.querySelector('.left .progress')
const progressRight=document.querySelector('.right .progress')
const percent=document.querySelector('.percent')
let count=0;
percentProgress=setInterval(()=>{
  percent.textContent=++count+"%"
  if (count==100){
    clearInterval(percentProgress)
  }
},80)

