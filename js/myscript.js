/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    $(".fancybox").fancybox(); 
    
    
    
    $('.up .link-1').click(function(){
        
        $(".paragraph-1").show();
        
    });
    
   
    
    
    
    //starting the carousel
    
    $('.autoplay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 300000,
      dots: false,
      infinite: true, 
       responsive: [
           
    {
      breakpoint: 992,
      settings: {
        
        slidesToShow: 1
          
      }
    },       
    {
      breakpoint: 768,
      settings: {
        
        slidesToShow: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1
      }
    }
  ] 
               
    }); 
    
        // On swipe event
    $('.a1').on('swipe', function(event, slick, direction){
      console.log(direction);
      // left
    });

    // On edge hit
    $('a1').on('edge', function(event, slick, direction){
      console.log('edge was hit')
    });

    // On before slide change
    $('.a1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
    });
    
    $(document).ready(function(){
    $('.autoplay').slick({
    
    });
    });
    
    
    
        //starting the carousel2222222222222222
    $('.autoplay2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      infinite: true, 
       responsive: [
           
    {
      breakpoint: 992,
      settings: {
        
        slidesToShow: 3
          
      }
    },       
    {
      breakpoint: 768,
      settings: {
        
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1
      }
    }
           
  ] 
               
    }); 
    
        
        // On swipe event
    $('.a1').on('swipe', function(event, slick, direction){
      console.log(direction);
      // left
    });

    // On edge hit
    $('a1').on('edge', function(event, slick, direction){
      console.log('edge was hit')
    });

    // On before slide change
    $('.a1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
    });
    
    $(document).ready(function(){
    $('.autoplay2').slick({
    
    });
    });

    
    
});



