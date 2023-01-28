// - - - - - - - - HEADER / NAV - - - - - - - - //

// - - - - - - - - EFECTO HEADER SCROLL - - - - - - - - //

const header = document.querySelector(".header");

let mainPosition = window.pageYOffset;

window.onscroll = function(){
    let currentOffSe = window.pageYOffset;
    if(mainPosition >= currentOffSe){
        header.style.transition = "250ms";
        header.style.top = "0";
    }
    else{
        header.style.top = "-100px";
        header.style.transition = "0s";
    }
    mainPosition = currentOffSe;
}

// - - - - - - - - MENÚ DESPLEGABLE - - - - - - - - //

const product = document.querySelector(".products");
const productButton = document.querySelector(".products-button");

productButton.addEventListener("mouseover",()=>{
    product.style.display= `flex`
})

productButton.addEventListener("mouseout",()=>{
    product.style.display= `none`
})

product.addEventListener("mouseover",()=>{
    product.style.display= `flex`
})

product.addEventListener("mouseout",()=>{
    product.style.display= `none`
})

// - - - - - - - - CARROUSEL - - - - - - - - //

const carrousel = document.querySelector(".carrousel");
const buttonLeft = document.querySelector(".button-arrow-left");
const buttonRight = document.querySelector(".button-arrow-right");

const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
const card4 = document.querySelector(".card-4");
const card5 = document.querySelector(".card-5");
const card6 = document.querySelector(".card-6");

let move = 0;

buttonRight.addEventListener("click",()=>{
    moveRight();
});

buttonLeft.addEventListener("click",()=>{
    moveLeft();
});

moveRight = () => {

    if(move < 3){
        card1.style.transform += "translate(-194px)";
        card2.style.transform += "translate(-194px)";
        card3.style.transform += "translate(-194px)";
        card4.style.transform += "translate(-194px)";
        card5.style.transform += "translate(-194px)";
        card6.style.transform += "translate(-194px)";
        
        move++;
    }
};

moveLeft =() => {

    if(move > 0){
        card1.style.transform += "translate(194px)";
        card2.style.transform += "translate(194px)";
        card3.style.transform += "translate(194px)";
        card4.style.transform += "translate(194px)";
        card5.style.transform += "translate(194px)";
        card6.style.transform += "translate(194px)";
        
        move--;
    }
};

IntervalRight = setInterval(()=>{
    moveRight();
    if(move==3){
        setTimeout(()=>{
            card1.style.transform = "translate(0px)";
            card2.style.transform = "translate(0px)";
            card3.style.transform = "translate(0px)";
            card4.style.transform = "translate(0px)";
            card5.style.transform = "translate(0px)";
            card6.style.transform = "translate(0px)";
            move=0;
        },5000)
    }
},5000);



