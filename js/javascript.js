//header選單
$(function(){
    $('header .bigList li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.homeBtn').click(function() { 
        $('html,body').animate({
                scrollTop: $('.introBox').offset().top - 0
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
    $('.autobiographyBtn').click(function() {
        $('html,body').animate({
                scrollTop: $('.autobiography').offset().top - 60
        }, 1000)
    });

    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 300){
                $("header").addClass("scroll");
        } else{
                $("header").removeClass("scroll");
        };
    })
})

//插圖區
$(function(){
    $('.justified-gallery').justifiedGallery({
        rowHeight : 200,
        lastRow : 'nojustify',
        margins : 3
    });
})

//判斷手機裝置
function isMobile() {

    try{ document.createEvent("TouchEvent"); return true; }

    catch(e){ return false;}

}
$(function(){
    if(isMobile()){
        $('header,main,footer').addClass('rwd');

        $('.justified-gallery').justifiedGallery({
            rowHeight : 600,
            lastRow : 'nojustify',
            margins : 30
        });
    }
})

//回到頂端
$(function(){
	$(".goTop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.animate({
                scrollTop:0
        },1000);
    })
})

//forMobile
//點擊閱讀完整內容
$(function(){
    $(".autobiography .innerBtn").click(function(){
        $(".autobiography .innerWrap").removeClass("display");
        $(".autobiography .innerBox").addClass("display");
    })

    $(".autobiography .innerWrap.close").click(function(){
        $(".autobiography .innerBox").removeClass("display");
        $(".autobiography .innerWrap.open").addClass("display");
    })
})