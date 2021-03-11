const landing = document.getElementById('landing')



$("document").ready(function() {

    var studiosectionwidth = $(".flexbox-item-studio").width() + 921 + 7;
    window.scrollTo(0, studiosectionwidth)

    // critical button

    var criticalbuttoncounter = 1
    $("#buttoncritical").on('click', function(){
        console.log("critical")
        if (criticalbuttoncounter % 2==0) {
        $(".project-information-critical").removeClass("opacity-off-start");
        $(".project-information-critical").removeClass("opacity-on");
        $(".project-information-critical").addClass("opacity-off");
        $("#criticalbutton").addClass("buttonminus")
        $("#criticalbutton").removeClass("buttonplus")
        console.log('minus')
        criticalbuttoncounter = criticalbuttoncounter + 1
        console.log(criticalbuttoncounter)
        function moveback(){
            $(".project-information-critical").removeClass("move-up")
            $(".project-information-critical").addClass("move-back")
        }
        setTimeout(moveback,500);
        }
        else {
        $(".project-information-critical").addClass("opacity-on");
        $(".project-information-critical").removeClass("opacity-off");
        $("#criticalbutton").addClass("buttonplus")
        $("#criticalbutton").removeClass("buttonminus")
        console.log('plus')
        criticalbuttoncounter = criticalbuttoncounter + 1
        console.log(criticalbuttoncounter)
        
        function moveup(){
            $(".project-information-critical").removeClass("move-back")
            $(".project-information-critical").addClass("move-up")
        }
        moveup(); 
        } 
        });

        // groji button // 

         // critical button

    var grojibuttoncounter = 1
    $("#buttongroji").on('click', function(){
        console.log("groji")
        if (grojibuttoncounter % 2==0) {
        $(".project-information-groji").removeClass("opacity-off-start");
        $(".project-information-groji").removeClass("opacity-on");
        $(".project-information-groji").addClass("opacity-off");
        $("#grojibutton").addClass("buttonminus")
        $("#grojibutton").removeClass("buttonplus")
        console.log('minus')
        grojibuttoncounter = grojibuttoncounter + 1
        console.log(criticalbuttoncounter)
        function moveback(){
            $(".project-information-groji").removeClass("move-up")
            $(".project-information-groji").addClass("move-back")
        }
        setTimeout(moveback,500);
        }
        else {
        $(".project-information-groji").addClass("opacity-on");
        $(".project-information-groji").removeClass("opacity-off");
        $("#grojibutton").addClass("buttonplus")
        $("#grojibutton").removeClass("buttonminus")
        console.log('plus')
        grojibuttoncounter = grojibuttoncounter + 1
        console.log(grojibuttoncounter)
        
        function moveup(){
            $(".project-information-groji").removeClass("move-back")
            $(".project-information-groji").addClass("move-up")
        }
        moveup(); 
        } 
        });

    

    // slideshows

    // critical 39 slideshow

    const carouselSlide = document.querySelector("#critical");
    const carouselImages = document.querySelectorAll("#critical img");
    var countercritical = 1;
    var size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' +(-size * countercritical) + 'px)';
    $("#critical").on('click', function(){
        if (countercritical >= carouselImages.length-1) return;
        console.log('clicked')
        carouselSlide.style.transition = "transform 1s ease-in-out";
        countercritical++;
        carouselSlide.style.transform= 'translateX(' +(-size * countercritical) + 'px)';
    });

    carouselSlide.addEventListener('transitionend', ()=>{
        if (carouselImages[countercritical].id === 'firstClonecritical') {
                carouselSlide.style.transition = "none";
                countercritical = carouselImages.length - countercritical;
                carouselSlide.style.transform = 'translateX(' +(-size * countercritical) + 'px)';}
    
    });

    // Groji slideshow

    const carouselSlideGroji = document.querySelector("#groji");
    const carouselImagesGroji = document.querySelectorAll("#groji img");
    var grojicounter = 1;
    // var size = carouselImagesGroji[0].clientWidth;

    carouselSlideGroji.style.transform = 'translateX(' +(-size * grojicounter) + 'px)';
    $("#groji").on('click', function(){
        if (grojicounter >= carouselImagesGroji.length-1) return;
        carouselSlideGroji.style.transition = "transform 1s ease-in-out";
        grojicounter++;
        carouselSlideGroji.style.transform= 'translateX(' +(-size * grojicounter) + 'px)';
    });

    carouselSlideGroji.addEventListener('transitionend', ()=>{
        if (carouselImagesGroji[grojicounter].id === 'firstClonegroji') {
                carouselSlideGroji.style.transition = "none";
                grojicounter = carouselImagesGroji.length - grojicounter;
                carouselSlideGroji.style.transform = 'translateX(' +(-size * grojicounter) + 'px)';
            }
    
    });

    // OG slideshow

    const carouselSlideOG = document.querySelector("#OG");
    // const carouselImagesOG = document.querySelectorAll("#OG img  video");
    const carouselImagesOG = document.getElementsByClassName("OG-Slides");
    var OGcounter = 1;

    const OGvideos = document.getElementsByClassName("isOGvideo");

    carouselSlideOG.style.transform = 'translateX(' +(-size * OGcounter) + 'px)';

    $("#OG").on('click', function(){
      
        if (OGcounter >= carouselImagesOG.length-1) return;
            carouselSlideOG.style.transition = "transform 1s ease-in-out";
            OGcounter++;
            carouselSlideOG.style.transform= 'translateX(' +(-size * OGcounter) + 'px)';

    //    if (OGcounter = 1)
    //         console.log(OGvideos)
        

        // if (OGcounter !== 1); 
        //     // OGvideos.pause()
        //     // OGvideos.currentTime=0;
        //     // OGvideos.load();
        //     console.log("pause")
         
    });


        carouselSlideOG.addEventListener('transitionend', ()=>{
        if (carouselImagesOG[OGcounter].id === 'firstCloneog') {
            carouselSlideOG.style.transition = "none";
            OGcounter = carouselImagesOG.length - OGcounter;
            carouselSlideOG.style.transform = 'translateX(' +(-size * OGcounter) + 'px)';}

    

    });

    // Information Button 

    





    

    //  // covid slideshow

    //  const carouselSlidecovid = document.querySelector("#covid");
    //  const carouselImagescovid = document.querySelectorAll("#covid img");
    //  var covidcounter = 1;
 
    //  carouselSlidecovid.style.transform = 'translateX(' +(-size * covidcounter) + 'px)';
 
    //  $("#covid").on('click', function(){
    //      if (covidcounter >= carouselImagescovid.length-1) return;
    //          carouselSlidecovid.style.transition = "transform 1s ease-in-out";
    //          covidcounter++;
    //          carouselSlidecovid.style.transform= 'translateX(' +(-size * covidcounter) + 'px)';
    //  });
 
    //  carouselSlidecovid.addEventListener('transitionend', ()=>{
    //      if (carouselImagescovid[covidcounter].id === 'firstClonecovid') {
    //          carouselSlidecovid.style.transition = "none";
    //          covidcounter = carouselImagescovid.length - covidcounter;
    //          carouselSlidecovid.style.transform = 'translateX(' +(-size * covidcounter) + 'px)';}
 
    //  });

    // resize

    window.onresize = function(event) {
        size = carouselImages[countercritical].clientWidth;
        // size = carouselImagesGroji[counter].clientWidth;
        carouselSlideGroji.style.transition = "none";
        carouselSlideGroji.style.transform= 'translateX(' +(-size * grojicounter) + 'px)';
        // size = carouselImages[countercritical].clientWidth;
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform= 'translateX(' +(-size * countercritical) + 'px)';
        // size = carouselImagesOG[OGcounter].clientWidth;
        carouselSlideOG.style.transition = "none";
        carouselSlideOG.style.transform= 'translateX(' +(-size * countercritical) + 'px)';
    
    };

});


// scroll 

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

// 3D


let scene, camera, renderer;

function init() {
                

                scene = new THREE.Scene();
                scene.background = new THREE.Color(0x000000);

                camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
                camera.position.x= - .28*window.innerHeight
                camera.position.y=0;
                camera.position.z=2000;

                
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
                        let fileAnimations = gltf.animations;
                        console.log(fileAnimations)
                        console.log(fileAnimations[0])
                        console.log(gltf)
                        object.scale.set(.5,.5,.5,.5)
                        scene.add(gltf.scene);
                        renderer.render(scene,camera);
                        animate();
                    

                        // mixer = new THREE.AnimationMixer(object);
                        // var open = mixer.clipAction(fileAnimations[0]);
                        // open.play();

                    
                    
                });

                

            function animate(){
                
                requestAnimationFrame(animate);
                object.rotation.y += 0.02;
                renderer.render(scene,camera);

            }
                
        }

            init();



   