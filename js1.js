var dichuyen={
    x:10,
    y:10
}
var check_dichuyen=1;
var point=0;
var maxpoint=0;
//setup khung hinh
var screenOfuser=Math.floor(screen.width/100)*100
document.getElementById('background').style.width=`${screenOfuser}px`
document.getElementById('background').style.height=`${screenOfuser}px`
document.getElementById('footer').setAttribute('style',`width:${screenOfuser}`)
document.querySelector('.wrapper').style.width=`${screenOfuser}px`
var rob=screenOfuser-10
    
console.log(screenOfuser)
document.getElementById("start").addEventListener("click",startgame);
document.getElementById("end").addEventListener("click",choilai);
maxpoint=localStorage.getItem("maxpoint")
luudiemtoida(maxpoint,point)

function startgame(){
    document.getElementById("start").style.display="none";
    var body=document.querySelector("#background");
    let toadovatthe={
        x:0,y:0
    }
    let toadovatcan=[]
    let toado=[
        {
            x:0,
            y:0
        },
        {
            x:0,
            y:0
        },
        {
            x:0,
            y:0
        }
    ]
    let stop=0;
    // for (let i=0;i<80;++i){
    //     toadovatcan.push({
    //         x:0,y:0
    //     })
    // }
    taovatcan(toadovatcan,body)

    //taovatthe
    taovatthe(toadovatthe,toadovatcan)
    themvatthe(toadovatthe,body)
    
    //taoran
    taoran(toado,body)
    hinhanhran(toado)

    batdaudichuyen=setInterval(function(){ 
        for (let i=toado.length-1;i>0;--i){
            toado[i].x=toado[i-1].x
            toado[i].y=toado[i-1].y
        }
        if (check_dichuyen==1)
            toado[0].y-=dichuyen.y;
        else if (check_dichuyen==2)
            toado[0].y+=dichuyen.y;
        else if (check_dichuyen==3)
            toado[0].x+=dichuyen.x;
        else if (check_dichuyen==4)
            toado[0].x-=dichuyen.x;

        if (toado[0].x==toadovatthe.x&&toado[0].y==toadovatthe.y){
            // tang diem
            point++
            xuatdiem(point)
            luudiemtoida(maxpoint,point)
            toado.push({
                x:0,
                y:0
            });
            randaithem(toado,body);
            hinhanhran(toado);

            xoavatthecu();
            xoavatcancu(toadovatcan)
            taovatcan(toadovatcan,body);
            taovatthe(toadovatthe,toadovatcan);
            themvatthe(toadovatthe,body);
            
        }
        
        //thua
        for (let i=1;i<toado.length;++i){
            if (toado[0].x==toado[i].x&&toado[0].y==toado[i].y){
                document.getElementById("end").style.display="block"
                xoarancu(toado)
                xoavatthecu()
                xoavatcancu(toadovatcan)
                point=0
                xuatdiem(point)
                clearInterval(batdaudichuyen)  
                stop=1 
                break;
            }
        }

        for (let i=0;i<toadovatcan.length;++i){
            if (toadovatcan[i].x==toado[0].x&&toadovatcan[i].y==toado[0].y){
                document.getElementById("end").style.display="block"
                xoarancu(toado)
                xoavatthecu()
                xoavatcancu(toadovatcan)
                point=0
                xuatdiem(point)
                clearInterval(batdaudichuyen)  
                stop=1 
                break;
            }
        }

        if (toado[0].x==-10||toado[0].x==500||toado[0].y==-10||toado[0].y==500){
            document.getElementById("end").style.display="block"
            xoarancu(toado)
            xoavatthecu()
            xoavatcancu(toadovatcan)
            point=0
            xuatdiem(point)
            clearInterval(batdaudichuyen) 
            stop=1
        }
        
        if (stop==0)
            hinhanhran(toado)
            
    },200)
}


document.addEventListener("keydown",keycode=>{
    switch (keycode.keyCode){
        case 38:  //len
            if (check_dichuyen!=2)
                check_dichuyen=1;
            break;
        case 87:  //len
            if (check_dichuyen!=2)
                check_dichuyen=1;
            break;
        case 40:   //xuong
            if (check_dichuyen!=1)
                check_dichuyen=2;
            break;
        case 83:   //xuong
            if (check_dichuyen!=1)
                check_dichuyen=2;
            break;
        case 39:  //phai
            if (check_dichuyen!=4)
                check_dichuyen=3;
            break;
        case 68:  //phai
            if (check_dichuyen!=4)
                check_dichuyen=3;
            break;
        case 37:  //trai
            if (check_dichuyen!=3)
                check_dichuyen=4;
            break;
        case 65:  //trai
            if (check_dichuyen!=3)
                check_dichuyen=4;
            break;
    }
});



function taovatthe(toadovatthe,vatcan) {  
    toadovatthe.x=Math.round(Math.random()*100)*10;
    toadovatthe.y=Math.round(Math.random()*100)*10;
    while (toadovatthe.x>rob||toadovatthe.y>rob){
        toadovatthe.x=Math.round(Math.random()*100)*10;
        toadovatthe.y=Math.round(Math.random()*100)*10;
    }
    for (let i=0;i<vatcan.length;++i){
        if (toadovatthe.x==vatcan[i].x&&toadovatthe.y==vatcan[i].y)
            return taovatthe(toadovatthe,vatcan)
    }
}

function xoavatthecu(){
    var xoavatthecu=document.querySelector(".vatthe");
    if (xoavatthecu!=undefined)
        xoavatthecu.remove();
}

function themvatthe(a,body){
    let vatthe=document.createElement("div");
    vatthe.className="vatthe";
    body.appendChild(vatthe);
    vatthe.style.top=`${a.y}px`
    vatthe.style.left=`${a.x}px`
}


function taoran(toado,body){
    let thanran=document.createElement("div")
    thanran.className="ran"
    thanran.id=`ran0`
    body.appendChild(thanran)
    toado[0].x=Math.round(Math.random()*100)*10;
    toado[0].y=Math.round(Math.random()*100)*10;
    while (toado[0].x>rob||toado[0].y>rob){
        toado[0].x=Math.round(Math.random()*100)*10;
        toado[0].y=Math.round(Math.random()*100)*10;
    }
    for (let i=1;i<toado.length;++i){
        toado[i].x=toado[i-1].x-10
        toado[i].y=toado[i-1].y
        let thanran=document.createElement("div")
        thanran.className="ran"
        thanran.id=`ran${i}`
        body.appendChild(thanran)
    }  
}


function hinhanhran(toado){
    for (let i=0;i<toado.length;++i){
        document.getElementById(`ran${i}`).style.top=`${toado[i].y}px`;
        document.getElementById(`ran${i}`).style.left=`${toado[i].x}px`;
    }
}

function xoarancu(toado){
    for (let i=0;i<toado.length;++i){
        let xoaran=document.getElementById(`ran${i}`)
        xoaran.remove()
    }
}
function randaithem(toado,body){
    let n=toado.length;
    if (toado[n-2].x==toado[n-3].x){
        toado[n-1].x=toado[n-2].x
        if (toado[n-2].y>toado[n-3].y)
            toado[n-1].y=toado[n-2].y+10
        else 
            toado[n-1].y=toado[n-2].y-10
    }
    else if (toado[n-2].y==toado[n-3].y){
        toado[n-1].y=toado[n-2].y
        if (toado[n-2].x>toado[n-3].x)
            toado[n-1].x=toado[n-2].x+10
        else 
            toado[n-1].x=toado[n-2].x-10
    }

    let thanran=document.createElement("div")
    thanran.className="ran"
    thanran.id=`ran${toado.length-1}`
    body.appendChild(thanran)
}

function taovatcan(toado,body){
    for (let i=0;i<toado.length;++i){
        toado[i].x=Math.round(Math.random()*100)*10;
        toado[i].y=Math.round(Math.random()*100)*10;
        while (toado[i].x>rob||toado[i].y>rob){
            toado[i].x=Math.round(Math.random()*100)*10;
            toado[i].y=Math.round(Math.random()*100)*10;
        }
        let vatcan=document.createElement("div")
        vatcan.className="vatcan"
        vatcan.id=`vatcan${i}`
        body.appendChild(vatcan)
        document.getElementById(`vatcan${i}`).style.top=`${toado[i].y}px`;
        document.getElementById(`vatcan${i}`).style.left=`${toado[i].x}px`;
    }
    
}

function xoavatcancu(toado){
    for (let i=0;i<toado.length;++i){
        let xoavatcan=document.getElementById(`vatcan${i}`)
        xoavatcan.remove()
    }
}

function choilai(){
    document.getElementById("start").style.display="block";
    document.getElementById("end").style.display="none";
}

function xuatdiem(a){
    document.querySelector("#present-point p").innerHTML=a
}

function luudiemtoida(maxpoint,point){
    if (maxpoint<point)
        maxpoint=point
    //document.querySelector("#max-point p").innerHTML=maxpoint
    //localStorage.setItem("maxpoint",maxpoint)
}

