function scrollAppear(){
    var introText= document.querySelector('.container1');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/2; 

    if(introPosition < screenPosition){
        introText.classList.add('container1-appear'); 
    }

}

function scrollAppearAbout(){
    var introText= document.querySelector('#AboutMe');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/2; 

    if(introPosition < screenPosition){
        introText.classList.add('container-appear'); 
    }

}

function scrollAppear2(){
    var introText= document.querySelector('.container2');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/2; 

    if(introPosition < screenPosition){
        introText.classList.add('container2-appear'); 
    }

}

function scrollAppear3(){
    var introText= document.querySelector('.contactForm');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/2; 

    if(introPosition < screenPosition){
        introText.classList.add('contactForm-appear'); 
    }

}


function scrollAppear4(){

    var introText= document.querySelector('.cvprofile');

    introText.classList.add('cvprofile-appear'); 
   

}

window.addEventListener('scroll', scrollAppear);
window.addEventListener('scroll', scrollAppearAbout);
window.addEventListener('scroll', scrollAppear2);
window.addEventListener('scroll', scrollAppear3);
scrollAppear4();