const images = ['../Images/pexels-photo-569163.png', '../Images/pexels-photo-862848.png', '../Images/pexels-photo-1065081.png', '../Images/pexels-photo-1436618.png'];

let currentImgIndex = 0
const mainImg = document.getElementById('mainImage'); 


mainImg.setAttribute('src', images[currentImgIndex]); 

const next = document.querySelector('.next-btn'); 
const prev = document.querySelector('.prev-btn'); 

next.addEventListener('click', ()=>{
    if(currentImgIndex >= images.length-1){
        currentImgIndex = 0
    }else{
        currentImgIndex++
    }
    mainImg.setAttribute('src', images[currentImgIndex]); 
})

prev.addEventListener('click', ()=>{
    if(currentImgIndex <=0){
        currentImgIndex = images.length-1
    }else{
        currentImgIndex--
    }
    mainImg.setAttribute('src', images[currentImgIndex]); 
})

