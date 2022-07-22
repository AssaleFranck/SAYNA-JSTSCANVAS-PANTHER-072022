window.addEventListener("scroll", function () {

    var scrollPosition = $(window).scrollTop(),
        viewportHeight = $(window).height();

    $('.container').each(function(){

        if ($(this).offset().top > scrollPosition && $(this).offset().top < scrollPosition + viewportHeight) {
            $('.container').css('display', 'flex');
        }
        
    });
})
// 



// window.addEventListener("scroll", function () {  
//     var scrollPosition = $(window).scrollTop(),
//         viewportHeight = $(window).height();
//         long = document.body.scrollHeight;


//     var offset = $('#last').offset();
//     var top = offset.top;
//     var left = offset.left;
//     var offset2 = $('#t4').offset();
//     var top2 = offset2.top;
//     var left = offset.left;

//     var hauteur = $('#t1').height();
//     // document.body.scrollHeight
        
        
//     console.log(long, viewportHeight,hauteur);
//     // if (top < viewportHeight ) {
        
//     // }
  
//     // console.log(typeof(test));
// })





// $(document).ready(function(){
//     // alert('yes');

//     $('#lancer').click(function (e) { 
//         e.preventDefault();

//         function showPopUp () {  
//             $('.popup').css('display', 'flex');
//         }
        
//         window.setTimeout(showPopUp, 500);
//     });
    
    
//     $('#end').click(function (e) { 
//         e.preventDefault();
        
//         $('.popup').css('display', 'none');
//     });



    

//     console.log();
// });

