const landing = document.getElementById('landing')



$("document").ready(function() {

    const mq = window.matchMedia('(max-width: 768px)');
    
    if(mq.matches) {
        $("h1").click(function() {
            $("nav").slideDown();
        });
    }
    
    });

$(document).ready(function(){
    // window.scroll(0,scrollable)
    $(".flexbox-item-client-container").hide();
    $(".flexbox-item-studio").show();
    var scroll =this.scrollY;
    var scrollable=document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo(scrollable-window.innerHeight)
  
});


window.addEventListener("scroll", function(event){
    var studiosectionwidth = $(".flexbox-item-studio").width() + 921 + 7;
    var scroll =this.scrollY;
    console.log(scroll)
    var scrollable=document.documentElement.scrollHeight - window.innerHeight
    // const scrolled = window.scrollY;
    console.log(studiosectionwidth + "studio section width")
    console.log(scroll + "scroll");
    console.log(scrollable + "scrollable");
    console.log(studiosectionwidth + "studiosectionwidth")
    console.log(window.innerHeight + "vh")
    if(scroll < (scrollable-window.innerHeight)){
        console.log('client container should be hidden')
        $(".flexbox-item-client-container").hide();
        $(".flexbox-item-studio").show();
        const studiosectionwidth = $(".flexbox-item-studio").width() + 921 + 7;
        $(".flexbox-item-transparent").height(studiosectionwidth);
        console.log(scrollable-studiosectionwidth) 
        $(".flexbox-item-studio").css("left" , ( -(studiosectionwidth-12600) - (1*window.scrollY)) + "px");
        
    }
    else {
        console.log('client container should be ')
        $(".flexbox-item-client-container").show();
        $(".flexbox-item-studio").hide();
    }
    
});


// critical 39 slideshow

const carouselSlide = document.querySelector("#critical");
const carouselImages = document.querySelectorAll("#critical img");

console.log(carouselImages)

var countercritical = 1;
var size = carouselImages[0].clientWidth;


console.log(size)

carouselSlide.style.transform = 'translateX(' +(-size * countercritical) + 'px)';
 $(document).ready(function(){
    $("#critical").on('click', function(){
        if (countercritical >= carouselImages.length-1) return;
        console.log('clicked')
        console.log(size)
        carouselSlide.style.transition = "transform 1s ease-in-out";
        countercritical++;
        carouselSlide.style.transform= 'translateX(' +(-size * countercritical) + 'px)';
    });

});

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[countercritical].id === 'firstClone') {
            carouselSlide.style.transition = "none";
            countercritical = carouselImages.length - countercritical;
            carouselSlide.style.transform = 'translateX(' +(-size * countercritical) + 'px)';}

});

// Groji slideshow

const carouselSlideGroji = document.querySelector("#groji");
const carouselImagesGroji = document.querySelectorAll("#groji img");

var counter = 1;
var size = carouselImagesGroji[0].clientWidth;

carouselSlideGroji.style.transform = 'translateX(' +(-size * counter) + 'px)';
 $(document).ready(function(){
    $("#groji").on('click', function(){
        if (counter >= carouselImagesGroji.length-1) return;
        carouselSlideGroji.style.transition = "transform 1s ease-in-out";
        counter++;
        carouselSlideGroji.style.transform= 'translateX(' +(-size * counter) + 'px)';
    });

});

carouselSlideGroji.addEventListener('transitionend', ()=>{
    if (carouselImagesGroji[counter].id === 'firstClone') {
            carouselSlideGroji.style.transition = "none";
            counter = carouselImagesGroji.length - counter;
            carouselSlideGroji.style.transform = 'translateX(' +(-size * counter) + 'px)';}

});

// OG slideshow

const carouselSlideOG = document.querySelector("#OG");
const carouselImagesOG = document.querySelectorAll("#OG img");

var OGcounter = 1;
var size = carouselImagesOG[0].clientWidth;

carouselSlideOG.style.transform = 'translateX(' +(-size * OGcounter) + 'px)';
 $(document).ready(function(){
    $("#OG").on('click', function(){
        if (OGcounter >= carouselImagesOG.length-1) return;
        carouselSlideOG.style.transition = "transform 1s ease-in-out";
        OGcounter++;
        carouselSlideOG.style.transform= 'translateX(' +(-size * OGcounter) + 'px)';
    });

});

carouselSlideOG.addEventListener('transitionend', ()=>{
    if (carouselImagesOG[OGcounter].id === 'firstClone') {
            carouselSlideOG.style.transition = "none";
            OGcounter = carouselImagesOG.length - OGcounter;
            carouselSlideOG.style.transform = 'translateX(' +(-size * OGcounter) + 'px)';}

});

window.onresize = function(event) {
    size = carouselImagesGroji[counter].clientWidth;
    carouselSlideGroji.style.transition = "none";
    carouselSlideGroji.style.transform= 'translateX(' +(-size * counter) + 'px)';
    size = carouselImages[countercritical].clientWidth;
    carouselSlide.style.transition = "none";
    carouselSlide.style.transform= 'translateX(' +(-size * countercritical) + 'px)';
    size = carouselImagesOG[OGcounter].clientWidth;
    carouselSlideOG.style.transition = "none";
    carouselSlideOG.style.transform= 'translateX(' +(-size * countercritical) + 'px)';

};




