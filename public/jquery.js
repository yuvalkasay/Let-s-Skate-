$(document).ready(function()
{
    $('.btn').on(function (evant) {
        $('html, body').animate({scrollTop: $('.second-div').offset().top}, 1000, function() {
            // window.location.second-div = second-div;
        }); /* speed on 1 sec */
    });
})

    // $(document).ready(function(){
    //     $(".btn").click('click', function() {
    
    //         $('html, body').animate({
    //           scrollTop: $(".second-div").offset().top
    //         }, 1000, function(){
    
    //         });
    //     });
    //   });