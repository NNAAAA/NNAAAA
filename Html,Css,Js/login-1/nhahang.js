var signUp=document.getElementById('signup');
var signIn=document.getElementById('signin');
var container=document.getElementById('container');
signUp.addEventListener('click',()=>{
  container.classList.add('active');
})
signIn.addEventListener('click',()=>{
  container.classList.remove('active');
})

