var arr=[]
let currentIndex
let queryNumb
let currentNumb
let check
const btn=document.querySelector('.btn')
const form=document.querySelector('.form-control')
const arrDiv=document.querySelector('.arr')
btn.addEventListener("click",()=>{
  queryNumb=parseInt(form.value)
  currentIndex=1
  currentNumb=3
  check=true
  createArr()
  arr=[]
})

function createArr(){
  // let n=3;
  // while (n<=queryNumb){
    while (check&&currentNumb<=queryNumb){ 
        let check_Require=checkRequire(currentNumb)
        if(check_Require.length!=0){
          // clone=[...check_Require]
          // if (currentIndex<701){
          //   const newDiv=document.createElement('div')
          //   newDiv.innerHTML=`index ${currentIndex}:${check_Require}`
          //   arrDiv.appendChild(newDiv)
          // }
          // else check=false
          if (currentNumb==queryNumb){
            const newDiv=document.createElement('div')
            newDiv.innerHTML=`${currentIndex%2==0 ? 'R' : 'L'}:${check_Require}`
            arrDiv.appendChild(newDiv)

            check=false
          }

          currentIndex++
          currentNumb+=2    
        }
        else
          currentNumb+=2
    }

    if (check){
      const newDiv=document.createElement('div')
      newDiv.innerHTML=`No:${queryNumb}`
      arrDiv.appendChild(newDiv)
    }
  //   currentNumb=3
  //   arr.push(clone)
  //   n++
  // }
  // const html=arr.map((item,i)=>`
  //   <div>
  //     <span>Index ${i+1}:</span>
  //     <span>${item.join('x')}</span>
  //   </div>
  // `).join('')

  //document.querySelector('.arr').innerHTML=html
}

function checkRequire(a){

  let i=3,arrPrime=[]
  while(i<=7){  
    if (a%i==0){  
      a/=i
      arrPrime.push(i)
    }
    else
      i+=2
  }

  if (a!=1)
    return []
  else
    return arrPrime
}