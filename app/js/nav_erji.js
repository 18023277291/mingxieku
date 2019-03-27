$(function () {
    $('.if_cat').on('mouseenter', function () {
        $('.suoyou_menu').css("display", "block")
    })
    $('.if_cat').on('mouseleave', function () {
        $('.suoyou_menu').css("display", "none")
    })
    $('.suoyou_menu').on('mouseenter', function () {
        $('.suoyou_menu').css("display", "block")
    })
    $('.suoyou_menu').on('mouseleave', function () {
        $('.suoyou_menu').css("display", "none")
    })
    $('.menu_nav li').on('mouseenter', function () {
        $('.category-sub').css("display", "block")
    })
    $('.menu_nav li').on('mouseleave', function () {
        $('.category-sub').css("display", "none")
    })
    $('.nanzi').on('mouseenter', function () {
        console.log(12346)
        $('.nanzi_nav').css("display", "block")
    })
    $('.nanzi').on('mouseleave', function () {
        $('.nanzi_nav').css("display", "none")
    }),
        $('.nanzi_nav').on('mouseenter', function () {
            $('.nanzi_nav').css("display", "block")
        })
    $('.nanzi_nav').on('mouseleave', function () {
        $('.nanzi_nav').css("display", "none")
    })
    $('.nvzi').on('mouseenter', function () {
        $('.nvzi_nav').css("display", "block")
    })
    $('.nvzi').on('mouseleave', function () {
        $('.nvzi_nav').css("display", "none")
    }),
        $('.nvzi_nav').on('mouseenter', function () {
            $('.nvzi_nav').css("display", "block")
        })
    $('.nvzi_nav').on('mouseleave', function () {
        $('.nvzi_nav').css("display", "none")
    })
    $('.ertong').on('mouseenter', function () {
        $('.ertong_nav').css("display", "block")
    })
    $('.ertong').on('mouseleave', function () {
        $('.ertong_nav').css("display", "none")
    }),
        $('.ertong_nav').on('mouseenter', function () {
            $('.ertong_nav').css("display", "block")
        })
    $('.ertong_nav').on('mouseleave', function () {
        $('.ertong_nav').css("display", "none")
    })
    $('.gouwu').on('mouseenter', function () {
        $('.gwc').css("display", "block")
    })
    $('.gouwu').on('mouseleave', function () {
        $('.gwc').css("display", "none")
    })
    $('.wodedingdan').on('mouseenter', function () {
        $('.dingdan_2').css("display", "block")
    })
    $('.wodedingdan').on('mouseleave', function () {
        $('.dingdan_2').css("display", "none")
    })
    $('.kefu').on('mouseenter', function () {
        $('.kf_2').css("display", "block")
    })
    $('.kefu').on('mouseleave', function () {
        $('.kf_2').css("display", "none")
    })
    $('.wodeshoucang').on('mouseenter', function () {
        $('.wdsc_2').css("display", "block")
    })
    $('.wodeshoucang').on('mouseleave', function () {
        $('.wdsc_2').css("display", "none")
    })
    $('.fenxiang').on('mouseenter', function () {
        $('.fx_2').css("display", "block")
    })
    $('.fenxiang').on('mouseleave', function () {
        $('.fx_2').css("display", "none")
    })
    $('.fanhuitop').on('mouseenter', function () {
        $('.fht_2').css("display", "block")
    })
    $('.fanhuitop').on('mouseleave', function () {
        $('.fht_2').css("display", "none")
    })
})
var backButton = $('.fanhuitop');
function backToTop() {
    $('html,body').animate({
        scrollTop: 0
    }, 800);
}
backButton.on('click', backToTop);

$(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
    if ($(window).scrollTop() > $(window).height())
        backButton.fadeIn();
    else
        backButton.fadeOut();
});
$(window).trigger('scroll');
// 移动；
$(document).ready(function(){
    $(".gouwuche").mouseenter(function(){
      var div=$(".gwc_2");
      div.stop().animate({right:"37px",},"slow");
    });
    $(".gouwuche").mouseleave(function(){
      var div=$(".gwc_2");
      div.css("right","47px")
    });
});
