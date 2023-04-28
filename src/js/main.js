
const btn1=document.querySelector('#btn1');
const btn2 =document.querySelector('#btn2');
const btn3 =document.querySelector('#btn3');


const Iced=document.querySelector('#Iced');
const Hot =document.querySelector('#Hot');
const Fruit =document.querySelector('#Fruit');


btn1.addEventListener('click',()=>{
  Iced.style.display = 'block'
  Hot.style.display = 'none'
  Fruit.style.display = 'none'

})

btn2.addEventListener('click',()=>{
    Iced.style.display= 'none'
    Hot.style.display = 'block'
    Fruit.style.display = 'none'
  
  })
  
  btn3.addEventListener('click',()=>{
    Iced.style.display= 'none'
    Hot.style.display = 'none'
    Fruit.style.display = 'block'
  
  })

  const about=document.querySelector('#about');
  const about1=document.querySelector('#about1');
  const cofeead =document.querySelector('#cofeead');
 const drinkf = document.querySelector('#drinkf');
 const container=document.querySelector('#container');
 const specialadd=document.querySelector('#specialadd');
 const menuconnet=document.querySelector('#menuconnet');
 const boxcontact =document.querySelector('#boxcontact');
 const cons =document.querySelector('#cons');
 const cofeevideo=document.querySelector('#cofeevideo');
 const vid = document.querySelector('#vid')
 const button1 =document.querySelector('.button1');
 const button2 =document.querySelector('.button2')

 function playVid(){
  vid.play();
  



 }

 function pauseVid (){
  vid.pause();
 }
 button2.addEventListener('click',function pauseVid(){
  button1.style.display='block'
 
  
 
})
 
 button1.addEventListener('click',function playVid(){
   button1.style.display='none'
   button2.style.display='block'
 })


  about.addEventListener('click',()=>{
     about1.style.display='block'
     cofeead.style.display='none'
     container.style.display='none'
     specialadd.style.display='none'
     cons.style.display='none'
     about.style.backgroundColor="rgb(0,153,153)"
     about.style.color="rgb(255,255,255)"
     menuconnet.style.color='rgb(0,153,153)'
     menuconnet.style.backgroundColor='rgb(255,255,255)'
     boxcontact.style.backgroundColor="rgb(255,255,255)"
     boxcontact.style.color="rgb(0,153,153)"
     drinkf.style.backgroundColor="rgb(255,255,255)"
     drinkf.style.color="rgb(0,153,153)"
  
     
     
  
     


     
    
     
    
    

  })

  drinkf.addEventListener('click',()=>{
    about1.style.display='none'
    container.style.display='block'
    cofeead.style.display='flex'
    specialadd.style.display = 'none'
    cons.style.display='none'
    drinkf.style.backgroundColor="rgb(0,153,153)"
    drinkf.style.color="rgb(255,255,255)"
    menuconnet.style.backgroundColor="rgb(255,255,255)"
    menuconnet.style.color="rgb(0,153,153,153)"
    about.style.backgroundColor="rgb(255,255,255)"
    about.style.color="rgb(0,153,153)"
    

  
    
   
  })
 
  menuconnet.addEventListener('click',()=>{
  about1.style.display ='none'
  container.style.display='none'
  specialadd.style.display='block'
  cons.style.display='none'
  menuconnet.style.backgroundColor='rgb(0,153,153)'
  menuconnet.style.color="rgb(255,255,255)"
  about.style.backgroundColor="rgb(255,255,255)"
  about.style.color="rgb(0,153,153)"
  boxcontact.style.backgroundColor="rgb(255,255,255)"
  boxcontact.style.color="rgb(0,153,153)"
  drinkf.style.backgroundColor="rgb(255,255,255)"
  drinkf.style.color="rgb(0,153,153)"
  
  
 
 
  
  
})


boxcontact.addEventListener('click',function(){
  cons.style.display='block'
  about1.style.display ='none'
  container.style.display='none'
  specialadd.style.display='none'
  boxcontact.style.backgroundColor="rgb(0,153,153)"
  boxcontact.style.color="rgb(255,255,255)"
  menuconnet.style.backgroundColor="rgb(255,255,255)"
  menuconnet.style.color="rgb(0,153,153)"
  about.style.backgroundColor="rgb(255,255,255)"
  about.style.color="rgb(0,153,153)"
 
})
 





