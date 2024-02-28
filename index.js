let cross = document.querySelector("#cross")
cross.style.visibility="hidden";
document.querySelector("#btn").addEventListener("click",  eve=>{
eve.target;
cross.style.visibility="visible";
document.querySelector("nav").style.visibility="visible";
document.querySelector("#div").classList.add("main");
cross.addEventListener("click",  eve=>{
    eve.target;
cross.style.visibility="hidden";
document.querySelector("nav").style.visibility="hidden";
document.querySelector("#div").classList.remove("main");
});    
});
const chart =document.querySelector("#img"); 
const chartBtn =document.querySelector(".checkout"); 
let notification =document.querySelector("#figcaption"); 
let chartDisplay =document.querySelector(".countainer__section"); 
chartDisplay.style.visibility="hidden";
chartBtn.onclick = (event)=>{
    event.target;
    const removeContents =document.querySelectorAll(".displayNone");
    removeContents.forEach((removeContent)=>{
        removeContent.style.visibility="hidden";
    })
    chartDisplay.style.visibility="hidden";
}
chart.onclick = (event)=>{
    event.target;
    const removeContents =document.querySelectorAll(".displayNone");
    removeContents.forEach((removeContent)=>{
        removeContent.style.visibility="hidden";
    })
    chartDisplay.style.visibility="hidden";
}
document.querySelector("#delete").addEventListener("click",  eve=>{
    eve.target;
    const removeContents =document.querySelectorAll(".displayNone");
    removeContents.forEach((removeContent)=>{
        removeContent.style.visibility="hidden";
    })
    document.querySelector("#empty").textContent="Your cart is empty";
    notification.style.visibility="hidden";
    document.querySelector("#num").textContent="";
});
function chartContent(){
    chartDisplay.style.visibility="visible";
    const chartNum = document.querySelector("#p");
    const chartNumAns = document.querySelector("#p1");
    if(num.innerHTML ==0){
        notification.textContent =outputs[x];
        notification.style.background ="none";
        const removeContents =document.querySelectorAll(".displayNone");
        removeContents.forEach((removeContent)=>{
            removeContent.style.visibility="hidden";
        })
        document.querySelector("#empty").textContent="Your cart is empty";       
    }
    if(outputs[x] ==1){
        notification.textContent =outputs[x];
        notification.style.background ="hsl(26, 100%, 55%)";
        chartNum.textContent=outputs[x];    
        chartNumAns.textContent="$"+[125 * outputs[x]+ ".00"];    
    }
    if(outputs[x] ==2){
        notification.textContent =outputs[x];
        notification.style.background ="hsl(26, 100%, 55%)";
        chartNum.textContent=outputs[x];    
        chartNumAns.textContent="$"+[125 * outputs[x]+ ".00"];    
    }
    if(outputs[x] ==3){
        notification.textContent =outputs[x];
        notification.style.background ="hsl(26, 100%, 55%)";
        chartNum.textContent=outputs[x];    
        chartNumAns.textContent="$"+[125 * outputs[x]+ ".00"];    
    }   
}
// Desktop hover
let desktopNavs =document.querySelectorAll(".hover");
let navsLine =document.querySelectorAll(".line");
navsLine.forEach(navs => {
    navs.style.visibility="hidden";
});
desktopNavs[0].addEventListener("mousemove", (eve)=>{
    eve.target;
    navsLine[0].style.visibility="visible";
});
desktopNavs[0].addEventListener("mouseout", (eve)=>{
    eve.target;
    navsLine[0].style.visibility="hidden";
});
desktopNavs[1].addEventListener("mousemove", (eve)=>{
    eve.target;
    navsLine[1].style.visibility="visible";
});
desktopNavs[1].addEventListener("mouseout", (eve)=>{
    eve.target;
    navsLine[1].style.visibility="hidden";
});
desktopNavs[2].addEventListener("mousemove", (eve)=>{
    eve.target;
    navsLine[2].style.visibility="visible";
});
desktopNavs[2].addEventListener("mouseout", (eve)=>{
    eve.target;
    navsLine[2].style.visibility="hidden";
});
desktopNavs[3].addEventListener("mousemove", (eve)=>{
    eve.target;
    navsLine[3].style.visibility="visible";
});
desktopNavs[3].addEventListener("mouseout", (eve)=>{
    eve.target;
    navsLine[3].style.visibility="hidden";
});
desktopNavs[4].addEventListener("mousemove", (eve)=>{
    eve.target;
    navsLine[4].style.visibility="visible";
});
desktopNavs[4].addEventListener("mouseout", (eve)=>{
    eve.target;
    navsLine[4].style.visibility="hidden";
});
let img = document.querySelector(".slide_image");
let imgOverlay = document.querySelector(".slide_imageOverlay");
let imgs = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
]
let thumbnails= document.querySelectorAll(".slide");
let thumbnailsOverlay= document.querySelectorAll(".slide_img");
let currentImg = 0;
let currentThumbnail = 0;
function displayImg (){
    img.src =imgs[currentImg];
}
function displayImgOverlay (){
    imgOverlay.src =imgs[currentImg];
}
const nextArrow =document.querySelector(".next"); 
const nextArrowOverlay =document.querySelector("#next"); 
const previousArrow =document.querySelector(".previous"); 
const previousArrowOverlay =document.querySelector("#previous"); 
let minus =document.querySelector(".btn"); 
const num =document.querySelector("#num"); 
const plus =document.querySelector(".article__btn"); 
thumbnails[0].style.border ="3px solid hsl(26, 100%, 55%)";
nextArrow.addEventListener("click", (eve)=>{
    eve.target;
    if(currentThumbnail > 0){
        thumbnails.forEach((thumbnail)=>{
            thumbnail.style.border ="none";
            })
    }
            currentImg++
    if(currentImg > imgs.length - 1){
        currentImg = 0;
        
    }displayImg(currentImg)
    ;
}
);
nextArrowOverlay.addEventListener("click", (eve)=>{
    eve.target;
    if(currentThumbnail > 0){
        thumbnailsOverlay.forEach((thumbnailOverlay)=>{
            thumbnailOverlay.style.border ="none";
            })
    }
        if(currentThumbnail <thumbnailsOverlay.length){
            thumbnailsOverlay[0].style.border ="none";
            currentThumbnail++;
            thumbnailsOverlay[currentThumbnail].style.border ="2.6px solid hsl(26, 100%, 55%)";
        }
    currentImg++;
    if(currentImg > imgs.length -1){
currentImg = 0;
    }
    displayImgOverlay(currentImg);
}
);
previousArrow.addEventListener("click", (eve)=>{
        eve.target;
        if(currentThumbnail > 0){
            thumbnails.forEach((thumbnail)=>{
                thumbnail.style.border ="none";
                })
            }
        if(currentThumbnail <thumbnails.length +1){
            currentThumbnail--;
        }
        currentImg--;
        if(currentImg < 0 ){
        }else{
        displayImg(currentImg);}
    });
previousArrowOverlay.addEventListener("click", (eve)=>{
        eve.target;
        if(currentThumbnail > 0){
            thumbnailsOverlay.forEach((thumbnailOverlay)=>{
                thumbnailOverlay.style.border ="none";
                })
            }
        if(currentThumbnail <thumbnailsOverlay.length +1){
            currentThumbnail--   
            thumbnailsOverlay[currentThumbnail].style.border ="2.6px solid hsl(26, 100%, 55%";
        } 
        currentImg--;
        if(currentImg < 0 ){
        }else{
        displayImgOverlay(currentImg);}
    });
let outputs =["0","1","2","3"];
    let x= 0;
    outputs[x];
    function displayNumPlus (){
        num.innerHTML =outputs[x];
    }
document.querySelector(".article__btn").addEventListener("click", (eve)=>{
    eve.target;
    x++;
    if(x > outputs.length){
x = 0;
    }else{
    displayNumPlus(x);
}
if(num.innerHTML==="undefined"){
    num.innerHTML =1;
}        
});
document.querySelector(".btn").addEventListener("click", (eve)=>{
    eve.target;
    x--;
    if(x<0){
        x=0
    }else{
    displayNumPlus(x);
    }
});
notification.textContent ="";
notification.style.background ="none";
document.querySelector(".article__btn1").addEventListener("click",  eve=>{
    eve.target;
    const removeContents =document.querySelectorAll(".displayNone");
    removeContents.forEach((removeContent)=>{
        removeContent.style.visibility="visible";
         
    });
    document.querySelector("#empty").textContent="";
    const chartNum = document.querySelector("#p");
    const chartNumAns = document.querySelector("#p1");
    
    if(outputs[x] ==0){
        notification.textContent =outputs[x];
        notification.style.background ="none";
        const removeContents =document.querySelectorAll(".displayNone");
        removeContents.forEach((removeContent)=>{
            removeContent.style.visibility="hidden";
        })
        document.querySelector("#empty").textContent="Your cart is empty";
    }
    if(outputs[x] ==1){
        notification.textContent =outputs[x];
        notification.style.background ="hsl(26, 100%, 55%)";
        chartNum.textContent=outputs[x];    
        chartNumAns.textContent="$"+[125 * outputs[x]];    
    }
    if(outputs[x] ==2){
        notification.textContent =outputs[x];
        notification.style.background ="hsl(26, 100%, 55%)";
        chartNum.textContent=outputs[x];    
        chartNumAns.textContent="$"+[125 * outputs[x]];    
    }
    if(num.innerHTML ==3){
        notification.textContent =outputs[x];
        notification.style.background ="hsl(26, 100%, 55%)";
        chartNum.textContent=outputs[x];    
        chartNumAns.textContent="$"+[125 * outputs[x]];    
    }
    chartDisplay.style.visibility="visible";    
    
    
});

document.querySelector(".footer_div").style.visibility="hidden";
document.querySelectorAll(".slide").forEach((thumbnailOverlay)=>{
    thumbnailOverlay.addEventListener("click",  eve=>{
        eve.target;
        document.querySelector(".footer_div").style.visibility="visible";
        document.querySelector(".overlay").style.visibility="visible";
    });        
});
// countainer__divImg
document.querySelector(".countainer__divImg").addEventListener("click",  eve=>{
    eve.target;
    document.querySelector(".overlay").style.visibility="hidden";
    document.querySelector(".footer_div").style.visibility="hidden";
});
