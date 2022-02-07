//左選單效果
$(function(){
    $('.leftNavBtn').click(function(){
        $('.leftNav').toggleClass('display');
        $(this).toggleClass('active');
    })
})

//header選單
$(function(){
    $('header .bigList li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.homeBtn').click(function() { 
        $('html,body').animate({
                scrollTop: $('.introBox').offset().top - 60
        }, 1000)
    });
    $('.artWorkBtn').click(function() {
        $('html,body').animate({
                scrollTop: $('.artWork').offset().top - 60
        }, 1000)
    });
    $('.cvBtn').click(function() {
        $('html,body').animate({
                scrollTop: $('.cv').offset().top - 60
        }, 1000)
    });
    $('.contactBtn').click(function() {
        $('html,body').animate({
                scrollTop: $('.contact').offset().top - 60
        }, 1000)
    });
})

//判斷手機裝置
function isMobile() {

    try{ document.createEvent("TouchEvent"); return true; }

    catch(e){ return false;}

}
$(function(){
    if(isMobile()){
        $('header,main').addClass('rwd');
    }
})

//插圖區
$(function(){
    $('.justified-gallery').justifiedGallery({
        rowHeight : 200,
        lastRow : 'nojustify',
        margins : 3
    });
})