const showMenu =(toggleId,navId)=>{
    const toggle =document.getElementById(toggleId);
    const nav =document.getElementById(navId);
    
    if(toggle && nav){
        toggle.addEventListener('click',() =>{
            nav.classList.toggle('show');

        });
    }
};
showMenu("nav-toggle","nav-menu");

// Remove menu mobile
const navLink =document.querySelectorAll('.nav__link');
function LinkAction(){
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show');  //when we click on each nav__link remove the show class selector
}
navLink.forEach((n)=>n.addEventListener('click',LinkAction));


// /slider
const imageCarousel =document.querySelector('.img-carousel');
const imagesDetails  =document.querySelectorAll('.img-carousel .image__detail');

// button
const prevBtn =document.querySelector('#prevBtn');
const nextBtn =document.querySelector('#nextBtn');

let counter =1;
const size =imagesDetails[0].clientWidth;    //return original width of image 
console.log(size); 
imageCarousel.style.transform ='translateX(' + -size * counter +'px)';  //it will move one picture forward

// button listener
nextBtn.addEventListener('click', () =>{
    if(counter >= imagesDetails.length -1)return ;   //its remove the empty slide when you click on the next button fast
    imageCarousel.style.transition = 'transform 0.4s ease-in-out';  //adding animation to the slider 
    counter++;
    console.log(counter);
    imageCarousel.style.transform = 'translateX(' + -size * counter +'px)';
});

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0)return ;   //its remove the empty slide when you click on the next button fast
    imageCarousel.style.transition = 'transform 0.4s ease-in-out';  //adding animation to the slider 
    counter--;
    console.log(counter);
    imageCarousel.style.transform = 'translateX(' + -size * counter +'px)';
});

// infinit looping
// this block of code fire anytime the animation stopped
imageCarousel.addEventListener('transitionend', () => {
    if(imagesDetails[counter].id === 'lastClone') {
        imageCarousel.style.transition = 'none';
        counter =imagesDetails.length - 2;  
        imageCarousel.style.transform = 'translateX(' + -size * counter +'px)';
    }
    if(imagesDetails[counter].id === 'firstClone') {
        imageCarousel.style.transition = 'none';
        counter = imagesDetails.length - counter;  
        imageCarousel.style.transform = 'translateX(' + -size * counter +'px)';
    }
})
