//1) 1 ci cofee_container_right daki butun elementleri tutmaliyiq

// const 
// cofee_container_right=document.querySelector('.cofee_container_right'),
// container_menu=document.querySelector('.container_menu'),
// btn=document.getElementById('btn'),
// btn1=document.getElementById('btn1'),
// btn2=document.getElementById('btn2');

// btn.addEventListener('click',salamla)


const btns = document.querySelectorAll(".cofee1");
const menu__items = document.querySelectorAll(".menu__price__container");

// btns.forEach(function(item) {
  
// })

for(let i = 0 ; i < btns.length ; i++){
    for(let y = 0 ; y < menu__items.length ; y++){
        btns[i].addEventListener("click" , function(e) {
            if(btns[i].innerHTML.includes(menu__items[y].id)){
                setTimeout(function(){
                    menu__items[y].classList.add("menu__price__container__active")
                }  , 500)
            }
            else{
                menu__items[y].classList.remove("menu__price__container__active")
            }
        })
    }
}