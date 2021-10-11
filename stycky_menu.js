
//stycky menu js

let header = document.querySelector('header');
window.addEventListener('scroll', () =>{
header.classList.toggle('stycky',window.scrollY > 0);
})

// reade more button js

let red_more_btn = document.querySelectorAll('.read_more');
let red_more_txt = document.querySelectorAll('.more_text');

    for(let i = 0; i < red_more_btn.length ; i++){
        red_more_btn[i].addEventListener('click', () =>{
        red_more_txt[i].classList.toggle('show_more');

        if(red_more_btn[i].innerText == "Read more >>>"){
            red_more_btn[i].innerText = "<<< Read less";
        }
        else {red_more_btn[i].innerText = "Read more >>>";
             }
        //red_more_txt.classList.toggle('show_more');
    
    })
    }

//go to top button 

let to_top = document.querySelector('.to_top');

window.addEventListener('scroll',()=>{
    //to_top.classList.toggle('show_btn',window.scrollY > 500);
    if (window.pageYOffset > 500){
        to_top.classList.add('show_btn');
    }else{
        to_top.classList.remove('show_btn');
    }
})