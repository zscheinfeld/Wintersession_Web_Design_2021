$("document").ready(function() {

    const mq = window.matchMedia('(max-width: 768px)');
    
    if(mq.matches) {
        $("h1").click(function() {
            $("nav").slideDown();
        });
    }
    
    
    });

//variables// 

var $inner = $(".flexbox-item-client-container");
var $grid = $(".flexbox-item-client-container");
var wh = window.innerHeight;
var ww = window.innerWidth;
var inner_sw = $inner.scrollWidth;
var topMax = $inner.scrollWidth - ww;
var scrollwidth;


console.log(inner_sw)
console.log(topMax)
console.log(wh)
console.log(ww)


// var onscroll = (e) => {
//     var top = $grid[0].getBoundingClientRect().top;
//     var __top = top - window.innerHeight;
//     var contactTop = $("#flexbox-item-about")[0].getBoundingClientRect().top;
//     $inner[0].scrollLeft = -__top;
//     console.log(top);
//     };