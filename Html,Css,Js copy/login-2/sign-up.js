var dskhachhang=[];
var javascript=localStorage.getItem('danh sách khách hàng');
dskhachhang=JSON.parse(javascript);


function validate(x){
  if (x.trim()==='')
    return true;
}
function signup(){
  var loi=0;
  var user=document.getElementById('user').value;
  var password=document.getElementById('password').value;
  var email=document.getElementById('email').value;
  var phone=document.getElementById('phone').value;
  if (validate(user)) {
    document.getElementById('user').setAttribute('style','border-bottom:2px solid red');
    loi++;
  }
  if (validate(password)) {
    document.getElementById('password').setAttribute('style','border-bottom:2px solid red');
    loi++;
  }
  if (validate(email)) {
    document.getElementById('email').setAttribute('style','border-bottom:2px solid red');
    loi++;
  }
  if (validate(phone)) {
    document.getElementById('phone').setAttribute('style','border-bottom:2px solid red');
    loi++;
  }

  // if (dskhachhang.length!=0){
  //   for (var i=0;i<dskhachhang.length;++i){
  //     if (user==dskhachhang[i].user) loi++;
  //   } 
  // }

  // if (dskhachhang.length!=0){
  //   for (var i=0;i<dskhachhang.length;++i){
  //     if (email==dskhachhang[i].email) loi++;
  //   }  
  // }
  if (loi!=0) return  
  dskhachhang.push({
    user:user,
    password:password,
    email:email,
    phone:phone
  })
  var json=JSON.stringify(dskhachhang);
  localStorage.setItem('danh sách khách hàng',json);
  
}
  