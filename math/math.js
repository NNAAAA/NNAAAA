var level=document.getElementById("level")
var wpr=document.getElementById("wrapper")
var ques=document.getElementById('question')
var timer=document.getElementById("time")
var sec=20,point=0
document.querySelector("#random p").addEventListener('click',e=>{
  level.style.display='none'
  start('rand')
})
document.querySelector("#ascending p").addEventListener('click',e=>{
  level.style.display='none'
  start('nor')
})

function start(x){
  wpr.style.display='block'
  var btnClick=document.querySelectorAll('.answer_items')
  
  

  if (x=='nor'){

  }
  else {

    let a=100000,b=1
    var arr=[]
    var answer=random(a,b)
    let i=0
    arr.forEach(x=>{
      x === '*' ? i++ : i+=0
    })
    sec+=30*i
    setime=setInterval(()=>{
      if (sec==0) {
        end()
        clearInterval(setime)
      }
      timer.innerHTML=`${sec}s`
      sec--
    },1000)
    render_ans(answer,btnClick)
    btnClick.forEach(item=>{
      item.addEventListener('click',e=>{
        if(e.target.innerText==answer){
          point+=1000
          xuatdiem(point)
          answer=random(a,b)
          render_ans(answer,btnClick)
          sec=20
        }
        else {
          clearInterval(setime)
          end()
        }
      })
    })
  }
  
}

function random(a,b){
  do{
    arrLength=Math.floor(Math.random()*(8-2+1))+2
  }while(arrLength%2!=0)

  var arrNumber=[]
  for (let i=0;i<=arrLength;i++){
    if (i%2!==0){
      let x=Math.floor(Math.random()*(3-1+1))+1
      switch (x){
        case 1:
          arrNumber.push('+')
          break;
        case 2:
          arrNumber.push('-')
          break;
        case 3:
          arrNumber.push('*')
          break;
      }
    }
    else {
      let x=Math.floor(Math.random()*(a-b+1))+b
      arrNumber.push(x) 
    }
  }
  arr=arrNumber.splice()
  render_ques(arrNumber)

  let sum=0;
  for (let i=0;i<arrLength;++i){
    if (i===0)
      sum+=arrNumber[i]
    else{
      if (arrNumber[i]==='+'){
        sum+=arrNumber[i+1]
        console.log('+',sum)
        ++i
      }
      if (arrNumber[i]==='-'){
        sum-=arrNumber[i+1]
        console.log('-',sum)
        ++i
      }
      if (arrNumber[i]==='*'){
        sum*=arrNumber[i+1]
        console.log('*',sum)
        ++i
      }
    }
  }
  console.log(sum)
  return sum 
}

function render_ans(dapan,tracnghiem){
  let x=Math.floor(Math.random()*(3-1+0))+0
  tracnghiem[x].innerHTML=`<h1>${dapan}</h1>`

  tracnghiem.forEach((i,index)=>{
    if (index!=x){
      var dapansai
      do{
        dapansai=Math.floor(Math.random()*(1000000-1+1))+1
      }while (dapansai==dapan)
      i.innerHTML=`<h1>${dapansai}</h1>`
    }
  })
}

function render_ques(arr){
  let html=arr.map(i=>`<h3>${i}</h3>`).join('')

  console.log(html)
  html+='<h3>=</h3>'
  question.innerHTML=html
}

function xuatdiem(a){
  document.querySelector("#present-point p").innerHTML=a
}

function end(){
  level.style.display='block'
  wpr.style.display='none'
  sec=20
  point=0
}
