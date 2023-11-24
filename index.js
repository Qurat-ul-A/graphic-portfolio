const testimonials=document.querySelectorAll('.client_box')
const prevBtn=document.querySelector('.prev')
const nextBtn=document.querySelector('.next')

let currentIndex=0;

function showTestimonial(index){
    testimonials.forEach((testimonial,i)=>{
        if(i===index){
            testimonial.style.display='block'
        }else{
            testimonial.style.display='none'
        }
    })
}

function nextTestimonial(){
    currentIndex=(currentIndex+1) % testimonials.length;
    showTestimonial(currentIndex)
}

function prevTestimonial(){
    currentIndex=(currentIndex-1+testimonials.length) % testimonials.length;
    showTestimonial(currentIndex)
}

showTestimonial(currentIndex);

nextBtn.addEventListener('click',nextTestimonial)
prevBtn.addEventListener('click',prevTestimonial)

// ______navbar____

const burger=document.querySelector('.burger')
const navbarItems=document.querySelector('.navbar')
const nav=document.querySelector('.items')

burger.addEventListener('click',()=>{
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})