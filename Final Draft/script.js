$("document").ready(function() {

    const mq = window.matchMedia('(max-width: 768px)');
    
    if(mq.matches) {
        $("h1").click(function() {
            $("nav").slideDown();
        });
    }
    
    
    });

//variables// 

// var $inner = $(".flexbox-item-client-container");
// var $grid = $(".flexbox-item-client-container");
// var wh = window.innerHeight;
// var ww = window.innerWidth;
// var inner_sw = $inner.scrollWidth;
// var topMax = $inner.scrollWidth - ww;
// var scrollwidth;


// console.log(inner_sw)
// console.log(topMax)
// console.log(wh)
// console.log(ww)


// var onscroll = (e) => {
//     var top = $grid[0].getBoundingClientRect().top;
//     var __top = top - window.innerHeight;
//     var contactTop = $("#flexbox-item-about")[0].getBoundingClientRect().top;
//     $inner[0].scrollLeft = -__top;
//     console.log(top);
//     };



$(document).ready(function(){
    // window.scroll(0,scrollable)
    $(".flexbox-item-client-container").hide();
    $(".flexbox-item-studio").show();
    var scroll =this.scrollY;
    const scrollable=document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo(0,.5*scrollable)
    // critical 39 slideshow
    $('.client-hero-images').on('click', function(){
        console.log('clicked')
        var currentImg= $('.current')
        var firstImg = $("#firstimage")
        var nextImg = currentImg.next();

        if(nextImg.length){

            setTimeout(function(){currentImg.addClass('notcurrent')},1000)
            setTimeout(function(){currentImg.removeClass('current')},1000)
            nextImg.addClass('current')
            nextImg.removeClass('notcurrent')
            currentImg.addClass('slideback')
            currentImg.removeClass('slidenext')
            nextImg.addClass('slidenext')
            nextImg.removeClass('slideback')

        }

        else{
            setTimeout(function(){currentImg.addClass('notcurrent')},1000)
            setTimeout(function(){currentImg.removeClass('current')},1000)
            currentImg.addClass('slideback')
            currentImg.removeClass('slidenext')
            firstImg.removeClass('notcurrent')
            firstImg.addClass('current')
            firstImg.addClass('slidenext')
            firstImg.removeClass('slideback')
            
            
            // firstImg.animate({width:'toggle'})
            


        }
    });
});


//load
// window.onload = function()
// {
//     document.getElementById("home").scrollIntoView();
// };



window.addEventListener("scroll", function(event){
    var scroll =this.scrollY;
    console.log(scroll)
    const scrollable=document.documentElement.scrollHeight - window.innerHeight
    // const scrolled = window.scrollY;
    console.log(scrollable);
    if(scroll < (.5*scrollable)){
        console.log('client container should be hidden')
        $(".flexbox-item-client-container").hide();
        $(".flexbox-item-studio").show();
    }
    else {
        console.log('client container should be ')
        $(".flexbox-item-client-container").show();
        $(".flexbox-item-studio").hide();
    }
});


