const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot")
const maxindex = 3;//maximum no of image - 1
const minindex = 0;
let next = null;

//Align all the images in one horizontal line
var counter = 0;
slides.forEach((slide,index)=>{
    slide.style.left = `
    ${index * 100}%
    `
})

//Accessing the clicked dot
dots.forEach((dot,index)=>{
    console.log(dot,index)
    dots[index].addEventListener("click",()=>{
        counter = index;
        getSlide();
    })
})

const slidePrev = ()=>{
    next = false;
    if(counter <= 3 && counter >=1){
        counter --;
        getSlide();
    }
    else{
        counter = 3;
        getSlide();
    }
    console.log(counter)
}
const slideNext = ()=>{
    next = true;
    if(counter >= 0 && counter <= 2){
        counter ++;
        getSlide();
    }
    else{
        counter = 0;
        getSlide();
    }
    console.log(counter)
}

//Accessing required slide of image
const getSlide = ()=>{
    slides.forEach((slide)=>{
            slide.style.transform = `translateX(-${counter*100}%)`
    })
    if(next){
        if(counter == minindex){
            dots[maxindex].classList.remove("dot--specific")
            dots[counter].classList.add("dot--specific")
        }
        else{
            dots[counter-1].classList.remove("dot--specific")
            dots[counter].classList.add("dot--specific")
        }
    }
    if(!next){
        if(counter == maxindex){
            dots[minindex].classList.remove("dot--specific")
            dots[counter].classList.add("dot--specific")
        }
        else{
            dots[counter+1].classList.remove("dot--specific")
            dots[counter].classList.add("dot--specific")
            
        }
    }
}