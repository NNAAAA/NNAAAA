const card=document.querySelector('.card')

const maxX=20,maxY=25

card.addEventListener('mousemove',(e)=>{
  let px=e.offsetX/card.offsetWidth;
  let py=e.offsetY/card.offsetHeight;
  card.style.transform=`
    rotateX(${(py>0.5 ? py*maxY : '-'+(1-py)*maxY)}deg) 
    rotateY(${(px>0.5 ? '-'+px*maxX : (1-px)*maxX)}deg)
  `;
  card.style.willChange="transform"
  console.log(card.getAttribute('style'))
})

  card.addEventListener('mousedown',()=>{
    card.style.transform=`
      rotateX(0deg) 
      rotateY(0deg)
    `
  })