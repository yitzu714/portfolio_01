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

//滑動到特定class時觸發
$(document).scroll(function(e) {
    var detectrange = 70;
    var scrolltop = $(window).scrollTop() + detectrange;
    $('.introBox').each(function(i, el){
        if (scrolltop > $(el).offset().top) {
            $('.homeBtn'+el.id).addClass('active');
            $('.homeBtn'+el.id).siblings().removeClass('active');
        }
    });

    $('.cv').each(function(i, el){
        if (scrolltop > $(el).offset().top) {
            $('.cvBtn'+el.id).addClass('active');
            $('.cvBtn'+el.id).siblings().removeClass('active');
        }
    });

    $('.autobiography').each(function(i, el){
        if (scrolltop > $(el).offset().top) {
            $('.autobiographyBtn'+el.id).addClass('active');
            $('.autobiographyBtn'+el.id).siblings().removeClass('active');
        }
    });

    $('.artWork').each(function(i, el){
        if (scrolltop > $(el).offset().top) {
            $('.artWorkBtn'+el.id).addClass('active');
            $('.artWorkBtn'+el.id).siblings().removeClass('active');
        }
    });
});

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