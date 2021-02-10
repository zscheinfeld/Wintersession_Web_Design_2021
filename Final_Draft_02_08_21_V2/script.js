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
    var studiosectionwidth = $(".flexbox-item-studio").width() + 921 + 7;
    // $(".flexbox-item-client-container").hide();
    // $(".flexbox-item-studio").show();
    // var scroll =this.scrollY;
    // var scrollable=document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo(0, studiosectionwidth)
  
});


window.addEventListener("scroll", function(event){
    var studiosectionwidth = $(".flexbox-item-studio").width() + 921 + 7;
    var clientsectionwidth = $(".flexbox-item-client-container").width() + 921;
    $(".flexbox-item-transparent-client").height(clientsectionwidth);
    $(".flexbox-item-transparent").height(studiosectionwidth);
    var scroll =this.scrollY;
    console.log(scroll)
    console.log(studiosectionwidth + "sectionstudiowidth")
    var scrollable = document.documentElement.scrollHeight - window.innerHeight
    // const scrolled = window.scrollY;
    // 11823

    if(scroll < (studiosectionwidth)){
        scrollable = scrollable + window.innerHeight
        console.log('when client container is hidden' + 'scrollable is' + scrollable)
        var left = $(".flexbox-item-studio").css("left")
        console.log(left + "left")
        console.log(scroll)
        $(".flexbox-item-client-container").hide();
        $(".flexbox-item-studio").show();
        $(".flexbox-item-studio").css("left" , (- (1*window.scrollY)) + "px");
    
    }
    else {
        console.log('when client container is shown' + 'scrollable is' + scrollable)
        $(".flexbox-item-client-container").show();
        $(".flexbox-item-studio").css("visibilty" , "hidden");
        $(".flexbox-item-studio").css("left" , (studiosectionwidth));
        $(".flexbox-item-client-container").css("left" , (- (1*(window.scrollY-(studiosectionwidth + (window.innerHeight/2)))) + "px"));
        
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

// 3D

let scene, camera, renderer, controls;

            function init() {
                scene = new THREE.Scene();
                scene.background = new THREE.Color(0x000000);

                camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
                camera.position.x= - .28*window.innerHeight
                camera.position.y=0;
                camera.position.z=2000;

            


                window.addEventListener("scroll", function(e) {
                    // camera.position.z= (this.scrollY-1);
                    // console.log(this.scrolly + 'this.scrolly')
                }, true);
                
                hlight = new THREE.AmbientLight (0x404040,8);
                scene.add(hlight);

                const light = new THREE.DirectionalLight(0xffffff,3);
                light.position.set(20, 20, 20);
                scene.add(light);

                renderer = new THREE.WebGLRenderer({antialias:true});
                renderer.setSize(window.innerWidth,window.innerHeight);
                // document.body.appendChild(renderer.domElement);
                
                landing.append(renderer.domElement);

                let loader= new THREE.GLTFLoader();
                loader.load('./3D/Window.gltf', function(gltf){
                    object = gltf.scene.children[0]
                    object.scale.set(.5,.5,.5,.5)
                    scene.add(gltf.scene);
                    renderer.render(scene,camera);
                    animate();
                });

            function animate(){
                renderer.render(scene,camera);
                requestAnimationFrame(animate);
                object.rotation.y += 0.02;

                
                

            }
                
        }

            init();

//             window.addEventListener("wheel", function(e) {
//             console.log("scrolled")
//             // code to increment object.position.z 
//             }, true);


