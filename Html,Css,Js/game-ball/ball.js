const canvas=document.getElementById("background")
const ctx=canvas.getContext("2d")

const screenOfuser=Math.floor(
  (window.innerWidth<window.innerHeight ? window.innerWidth : window.innerHeight)
  /100
)*100

canvas.width=`${screenOfuser/2*3}`
canvas.height=`${screenOfuser}`
canvas.style.backgroundColor="rgb(211, 207, 189)"

let isPlaying=false
let isPausing=false

const ball={
  radius:10,
  cdn:{
    x:canvas.width/2,
    y:canvas.width/2
  },
  moveX:5,
  moveY:7,
  isMoving:false
}

const NguyenAnh={
  width:10,
  height:50,
  cdn:{
    x:canvas.width/8,
    y:canvas.height/2-50/2
  },
  speed:5,
  dir:"up",
  isMoving:false,
  point:0
}

const KimY={
  width:10,
  height:50,
  cdn:{
    x:canvas.width*7/8-10,
    y:canvas.height/2-50/2
  },
  speed:5,
  dir:"up",
  isMoving:false,
  point:0
}

function drawScene(){
  ctx.beginPath()
  ctx.moveTo(canvas.width/2,canvas.height/4)
  ctx.lineTo(canvas.width/2,canvas.height*3/4)
  ctx.strokeStyle="blue"
  ctx.stroke()
  ctx.closePath()
}

function drawBall(){
  ctx.beginPath()
  ctx.arc(ball.cdn.x,ball.cdn.y,ball.radius,0,Math.PI*2)
  ctx.fillStyle="red"
  ctx.fill()
  ctx.closePath()
}

function ballMoving(){
  //random direction of ball at first
  if (!ball.isMoving){
    let randomDir=Math.floor(Math.random*4)+1  //random so tu 1 den 4
    switch (randomDir){
      case 2:
        ball.moveX=-ball.moveX
        break;
      case 3:
        ball.moveY=-ball.moveY
        break;
      case 4:
        ball.moveX=-ball.moveX
        ball.moveY=-ball.moveY
        break;
    }
  }

  //pause game after 1 turn
  
  if (NguyenAnh.point!==0&&KimY.point!==0){
    ball.isMoving=true
  }
  
  //if one in two moving the game is continue
  if (NguyenAnh.isMoving||KimY.isMoving){
    ball.isMoving=true
  }

  if (ball.isMoving){
    

    //ball impact with vertical left and right
    //left
    if (ball.cdn.x<=ball.radius){
      KimY.point++
      ball.cdn={
        x:canvas.width/2,
        y:canvas.width/2
      }
      isMoving=false
      NguyenAnh.isMoving=false
      KimY.isMoving=false
    }
    //right
    if(ball.cdn.x>=canvas.width-ball.radius){
      NguyenAnh.point++  
      ball.cdn={
        x:canvas.width/2,
        y:canvas.width/2
      }
      isMoving=false
      NguyenAnh.isMoving=false
      KimY.isMoving=false
    }
      
    //ball impact with horizontal
    if (ball.cdn.y<=ball.radius||ball.cdn.y>=canvas.height-ball.radius)
      ball.moveY=-ball.moveY

    //ball impact with NguyenAnh
    if (
      (NguyenAnh.cdn.x+NguyenAnh.width+ball.radius)>=ball.cdn.x&&
      (NguyenAnh.cdn.y<=ball.cdn.y-ball.radius&&(NguyenAnh.cdn.y+NguyenAnh.height)>=ball.cdn.y-ball.radius)
    ){
      ball.moveX=-ball.moveX
      ball.moveY=-ball.moveY
    }

    //ball impact with KimY
    if (
      (ball.cdn.x+ball.radius )>=(KimY.cdn.x)&&
      (KimY.cdn.y<=ball.cdn.y-ball.radius&&(KimY.cdn.y+KimY.height)>=ball.cdn.y-ball.radius)
    ){
      ball.moveX=-ball.moveX
      ball.moveY=-ball.moveY
    }

    ball.cdn.x+=ball.moveX
    ball.cdn.y+=ball.moveY
  }
}

function drawNA(){
  ctx.beginPath()
  ctx.rect(NguyenAnh.cdn.x,NguyenAnh.cdn.y,NguyenAnh.width,NguyenAnh.height)
  let gradient=ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop("0", 'red')
  gradient.addColorStop("1", 'blue')
  ctx.fillStyle = gradient
  ctx.fill()
  ctx.closePath()

  
}

function NA_Moving(){
  if (NguyenAnh.isMoving){
    if (NguyenAnh.cdn.y!==0&&NguyenAnh.dir==="up")
      NguyenAnh.cdn.y-=NguyenAnh.speed
    else if (NguyenAnh.cdn.y!==canvas.height-NguyenAnh.height&&NguyenAnh.dir==="down")
    NguyenAnh.cdn.y+=NguyenAnh.speed
  }
}

function drawKY(){
  ctx.beginPath()
  ctx.rect(KimY.cdn.x,KimY.cdn.y,KimY.width,KimY.height)
  let gradient=ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop("0", 'red')
  gradient.addColorStop("1", 'blue')
  ctx.fillStyle = gradient
  ctx.fill()
  ctx.closePath()

}

function KY_Moving(){
  if (KimY.isMoving){
    if (KimY.cdn.y!==0&&KimY.dir==="up")
      KimY.cdn.y-=KimY.speed
    else if (KimY.cdn.y!==canvas.height-KimY.height&&KimY.dir==="down")
    KimY.cdn.y+=KimY.speed
  }
}

function point(){
  ctx.beginPath()
  ctx.font='2rem Arial'
  ctx.textAlign='center'
  let gradient=ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop("0", 'red')
  gradient.addColorStop("1", 'blue')
  ctx.fillStyle = gradient
  ctx.fillText(`${NguyenAnh.point}`,canvas.width/8,canvas.height/6)
  ctx.closePath()

  ctx.beginPath()
  ctx.font='2rem Arial'
  ctx.textAlign='center'
  gradient=ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop("0", 'red')
  gradient.addColorStop("1", 'blue')
  ctx.fillStyle = gradient
  ctx.fillText(`${KimY.point}`,canvas.width/8*7,canvas.height/6)
  ctx.closePath()

  if (NguyenAnh.point==3){
    isPlaying=false
    winner("Nguyên Anh")
    NguyenAnh.point=0
    KimY.point=0
    ball.cdn={
      x:canvas.width/2,
      y:canvas.width/2
    }
  }
  if (KimY.point==3){
    isPlaying=false
    winner("Nguyên Anh")
    NguyenAnh.point=0
    KimY.point=0
    ball.cdn={
      x:canvas.width/2,
      y:canvas.width/2
    }
  }

}

function drawWelcome(){
  ctx.beginPath()
  ctx.font='3rem Arial'
  ctx.textAlign='center'
  let gradient=ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop("0", 'red')
  gradient.addColorStop("1", 'blue')
  ctx.fillStyle = gradient
  ctx.fillText("Chào mừng đến với trò chơi 😀",canvas.width/2,canvas.height/6)
  ctx.closePath()
}

function winner(w){
  ctx.beginPath()
  ctx.font='2rem Arial'
  ctx.textAlign='center'
  let gradient=ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop("0", 'red')
  gradient.addColorStop("1", 'blue')
  ctx.fillStyle = gradient
  ctx.fillText(`Người thắng là ${w}`,canvas.width/2,canvas.height/6)
  ctx.closePath()
}

function continues(){
  ctx.beginPath()
  ctx.font='3rem Arial'
  ctx.textAlign='center'
  let gradient=ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop("0", 'red')
  gradient.addColorStop("1", 'blue')
  ctx.fillStyle = gradient
  ctx.fillText("Chơi tiếp thui ! 🤩",canvas.width/2,canvas.height/6)
  ctx.closePath()
}

function play(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  point()
  if (isPlaying==true){
    drawScene()
    drawBall()
    drawNA()
    drawKY()
    
    NA_Moving()
    KY_Moving()
    ballMoving()

    requestAnimationFrame(play)
  }
  else {
    setTimeout(()=>{
      ctx.clearRect(0,0,canvas.width,canvas.height)
      continues()
    },3000)
  }
  
}

function home(){
  drawWelcome()
  drawNA()
  drawKY()
}

document.addEventListener("keydown",e=>{
  console.log(e)
  switch (e.keyCode){
    case 87:
      NguyenAnh.isMoving=true
      NguyenAnh.dir="up"
      break;
    case 83:
      NguyenAnh.isMoving=true
      NguyenAnh.dir="down"
      break;
    case 38:
      KimY.isMoving=true
      KimY.dir="up"
      break;
    case 40:
      KimY.isMoving=true
      KimY.dir="down"
      break;

    case 13:
      isPlaying=true
      play()
      break;
  }
})

document.addEventListener("keyup",e=>{
  switch (e.keyCode){
    case 87:
    case 83:
      NguyenAnh.isMoving=false
      break;
    case 38:
    case 40:
      KimY.isMoving=false
      break;
  }
  
})

home()


