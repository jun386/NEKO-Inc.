// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui/effect.all
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// ヘッダー

$(document).on('turbolinks:load', function() { 
    
var windowWidth = window.innerWidth;
if (windowWidth > 768) {
    
    var _headerlinks = $('.gronav_link'),
        topBottom,
        meowBottom;
    
    var gronav_change_color = location.pathname;
    if(gronav_change_color == "/") {
        $(window).scroll(function(){
            topBottom = $('.top_container').height() + 72;
            meowBottom = $('.meow_container').height() + topBottom + 320;
            if($(window).scrollTop() > topBottom && $(window).scrollTop() < meowBottom){
                _headerlinks.addClass('transform');
            }else{
                _headerlinks.removeClass('transform');
            }
        });
    }
    

    // gronavメニューの消滅処理
    var _window = $(window),
        _header = $('.gronav'),
        startPos,
        winScrollTop;
     
    _window.on('scroll',function(){
        winScrollTop = $(this).scrollTop();
        if (winScrollTop >= startPos) {
            _header.hide('slide', {direction: "up"}, 300);
        } else {
            _header.show('slide', {direction: "up"}, 300);
        }
        startPos = winScrollTop;
    });
    
    
    // ヘッダーナビactive
    
    $(document).ready(function() {
        if(location.pathname != "/") {
            $('.gronav li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
        } 
    });



    // トップ画像移動
    var ScrollTop;
    
    _window.on('scroll',function(){
        ScrollTop = $(this).scrollTop()/2;
        $(".top_img").css("transform", 'matrix(1, 0, 0, 1, 0,' + ScrollTop +')');
    });
     
     
    var MeowTop;
    
    _window.on('scroll',function(){
        MeowTop = ($(this).scrollTop()-800);
        if($(window).scrollTop() < 600){
            $(".meow_container h1").hide();
        }
        if($(window).scrollTop() >= 600){
            $(".meow_container h1").fadeIn();
        }
        if($(window).scrollTop() < 960){
            $(".meow_container h1").css("transform", 'matrix(1, 0, 0, 1, 0,' + MeowTop +')');
        }
    });
    
    var ProductsTop;
    
    _window.on('scroll',function(){
        ProductsTop = ($(this).scrollTop()-1700);
        if($(window).scrollTop() < 3100){
            $(".products_title").css("transform", 'matrix(1, 0, 0, 1, 0,' + ProductsTop +')');
        }
        });



    // フッター消去
    const ContactFooter = location.pathname;
    
    if(ContactFooter == "/contact") {
        $(".footer_wrapper").addClass("delete");
    }



    // ボタンホバー
    $('.meow_main_button_btn').hover(
        function() {
            $(".meow_main_button_btn").addClass("e");
        },
        function() {
            $(".meow_main_button_btn").addClass("o");
            $(".meow_main_button_btn").removeClass("e");
            setTimeout(function(){
                $(".meow_main_button_btn").removeClass("o");
            },300);
        }
    );
    
    $('.products_title_btn').hover(
        function() {
            $(".products_title_btn").addClass("e");
        },
        function() {
            $(".products_title_btn").addClass("o");
            $(".products_title_btn").removeClass("e");
            setTimeout(function(){
                $(".products_title_btn").removeClass("o");
            },300);
        }
    );
    
    $('.contact_submit_btn').hover(
        function() {
            $(".contact_submit_btn").addClass("e");
        },
        function() {
            $(".contact_submit_btn").addClass("o");
            $(".contact_submit_btn").removeClass("e");
            setTimeout(function(){
                $(".contact_submit_btn").removeClass("o");
            },300);
        }
    );
    
    $('.detail_products_NEKO > a').hover(
        function() {
            $(".detail_products_wrapper a").addClass("e");
        },
        function() {
            $(".detail_products_wrapper a").addClass("o");
            $(".detail_products_wrapper a").removeClass("e");
            setTimeout(function(){
                $(".detail_products_wrapper a").removeClass("o");
            },300);
        }
    );



// ロード画面

    
    $(function(){
        $("#wrap").addClass("delete");
        $("#loader_bg").addClass("appear");
      });
      
     
    $(window).load(function () {
        // $('#privacy-policy').attr('target' , '_blank');
        setTimeout(function(){
            $(".first_loader_bg").hide('slide', '', 500);
            $("#wrap").removeClass("delete");
        },1000);
    });
    
    setTimeout(function(){
        $(".top_side").show('slide', {direction: "right"}, 500);
        $(".top_side_latest").addClass("delete");
    },2000);
    
    setTimeout(function(){
        $(".top_side_latest").show('slide', {direction: "right"}, 500);
    },2500);
    
    $(document).on('click', '#wrap a', function(){
        // $('#privacy-policy').attr('target' , '_blank');
        setTimeout(function(){
            $(".loader_bg2").hide('slide', '', 500);
            $(".first_loader_bg").hide('slide', '', 500);
            $("#wrap").removeClass("delete");
        },1000);
    });



// 地図スクロール
    _window.on("scroll", function() {
        console.log(_window.scrollTop());
        var mapTop = $(window).scrollTop()-444;
        if($(window).scrollTop() >= 440 && $(window).scrollTop() <= 1450){
        $(".company_main_left iframe").css("transform", 'matrix(1, 0, 0, 1, 0,' + mapTop +')');
        }
    });



// products h1
    $(function(){
        _window.on('scroll',function(){
            if (_window.scrollTop() >= 350) {
                $(".products_container .products_title").removeClass("delete");
            } else {
                $(".products_container .products_title").addClass("delete");
            }
        });
    });


// journalスクロール
    $(function(){
        $(".journal_main").on('scroll',function(){
            if($(".journal_main").scrollLeft() == 0) {
                $("#journal_left").addClass("gray");
                $("#journal_left").removeClass("pointer");
            } else {
                $("#journal_left").removeClass("gray");
                $("#journal_left").addClass("pointer");
            }
            if($(".journal_main").scrollLeft() == 1409) {
                $("#journal_right").addClass("gray");
                $("#journal_right").removeClass("pointer");
            }else {
                $("#journal_right").removeClass("gray");
                $("#journal_right").addClass("pointer");
            }
        });
        $("#journal_left").on('click', function(){
            var _journal_position = $(".journal_main").scrollLeft();
            $(".journal_main").animate({scrollLeft: _journal_position - 448},"fast", "swing");
        });
        $("#journal_right").on('click', function(){
            var _journal_position = $(".journal_main").scrollLeft();
            $(".journal_main").animate({scrollLeft: _journal_position + 448},"fast", "swing");
        });
    });


} else if (windowWidth < 768 && windowWidth > 481) {
    
    // ロード画面
    $(function(){
        $("#wrap").addClass("delete");
        $("#loader_bg").addClass("appear");
      });
     
    $(window).load(function () {
        setTimeout(function(){
            $(".first_loader_bg").hide('slide', '', 500);
            $("#wrap").removeClass("delete");
        },1000);
    });
    
    setTimeout(function(){
        $(".top_side").show('slide', {direction: "right"}, 500);
        $(".top_side_latest").addClass("delete");

    },2000);
    
    setTimeout(function(){
        $(".top_side_latest").show('slide', {direction: "right"}, 500);
    },2500);
    
    $(document).on('click', '#wrap a', function(){
        setTimeout(function(){
            $(".loader_bg2").hide('slide', '', 500);
            $(".first_loader_bg").hide('slide', '', 500);
            $("#wrap").removeClass("delete");
        },1000);
    });
    
    
    // gronav 色変更
    
    var gronav_change_color = location.pathname;
    var _headerlinks = $('.gronav_link'),
        topBottom,
        meowBottom;
    
    if(gronav_change_color == "/") {
        $(window).scroll(function(){
            topBottom = $('.top_container').height() + 20;
            meowBottom = $('.meow_container').height() + topBottom + 50;
            if($(window).scrollTop() > topBottom && $(window).scrollTop() < meowBottom){
                _headerlinks.addClass('transform');
                $(".gronav_toggle_bar").addClass('transform_bg');
            }else{
                _headerlinks.removeClass('transform');
                $(".gronav_toggle_bar").removeClass('transform_bg');
            }
        });
    }
    
    // gronavメニューの消滅処理
    var _window = $(window),
        _header = $('.gronav'),
        startPos,
        winScrollTop;
     
    _window.on('scroll',function(){
        winScrollTop = $(this).scrollTop();
        if (winScrollTop >= startPos) {
            _header.hide('slide', {direction: "up"}, 300);
        } else {
            _header.show('slide', {direction: "up"}, 300);
        }
        startPos = winScrollTop;
    });
    
    // gronav_toggle_menu
    $(function(){
        $(".gronav_toggle").on("click", function() {
            $(".gronav_wrap, .gronav_wrap_contact, .gronav_bg").slideToggle();
            if ($(".gronav_toggle .inner").hasClass('active2')) {
                $('.gronav_toggle .inner').removeClass('active2');
            } else {
                $('.gronav_toggle .inner').addClass('active2');
            }
        });
    });
    
    // ヘッダーナビactive
    
    $(document).ready(function() {
        if(location.pathname != "/") {
            $('.gronav li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
        } 
    });
    
    
    // フッター消去
    const ContactFooter = location.pathname;
    
    if(ContactFooter == "/contact") {
        $(".footer_wrapper").addClass("delete");
    }
    
    // productsスクロール
    $(function(){
        $(".products_main").on('scroll',function(){
            if($(".products_main").scrollLeft() == 0) {
                $("#products_left").addClass("gray");
                $("#products_left").removeClass("pointer");
            } else {
                $("#products_left").removeClass("gray");
                $("#products_left").addClass("pointer");
            }
            if($(".products_main").scrollLeft() == 320) {
                $("#products_right").addClass("gray");
                $("#products_right").removeClass("pointer");
            }else {
                $("#products_right").removeClass("gray");
                $("#products_right").addClass("pointer");
            }
        });
        $("#products_left").on('click', function(){
            var _products_position = $(".products_main").scrollLeft();
            $(".products_main").animate({scrollLeft: _products_position - 330},"fast", "swing");
        });
        $("#products_right").on('click', function(){
            var _products_position = $(".products_main").scrollLeft();
            $(".products_main").animate({scrollLeft: _products_position + 330},"fast", "swing");
        });
    });
    
    // journalスクロール
    $(function(){
        $(".journal_main").on('scroll',function(){
            if($(".journal_main").scrollLeft() == 0) {
                $("#journal_left").addClass("gray");
                $("#journal_left").removeClass("pointer");
            } else {
                $("#journal_left").removeClass("gray");
                $("#journal_left").addClass("pointer");
            }
            if($(".journal_main").scrollLeft() == 1244) {
                $("#journal_right").addClass("gray");
                $("#journal_right").removeClass("pointer");
            }else {
                $("#journal_right").removeClass("gray");
                $("#journal_right").addClass("pointer");
            }
        });
        $("#journal_left").on('click', function(){
            var _journal_position = $(".journal_main").scrollLeft();
            $(".journal_main").animate({scrollLeft: _journal_position - 330},"fast", "swing");
        });
        $("#journal_right").on('click', function(){
            var _journal_position = $(".journal_main").scrollLeft();
            $(".journal_main").animate({scrollLeft: _journal_position + 330},"fast", "swing");
        });
    });
    
    
} else {
    
    // ロード画面
    $(function(){
        $("#wrap").addClass("delete");
        $("#loader_bg").addClass("appear");
      });
     
    $(window).load(function () {
        setTimeout(function(){
            $(".first_loader_bg").hide('slide', '', 500);
            $("#wrap").removeClass("delete");
        },1000);
    });
    
    setTimeout(function(){
        $(".top_side").show('slide', {direction: "right"}, 500);
        $(".top_side_latest").addClass("delete");

    },2000);
    
    setTimeout(function(){
        $(".top_side_latest").show('slide', {direction: "right"}, 500);
    },2500);
    
    $(document).on('click', '#wrap a', function(){
        setTimeout(function(){
            $(".loader_bg2").hide('slide', '', 500);
            $(".first_loader_bg").hide('slide', '', 500);
            $("#wrap").removeClass("delete");
        },1000);
    });
    
    
    // gronav 色変更
    
    var gronav_change_color = location.pathname;
    var _headerlinks = $('.gronav_link'),
        topBottom,
        meowBottom;
    
    if(gronav_change_color == "/") {
        $(window).scroll(function(){
            topBottom = $('.top_container').height() + 20;
            meowBottom = $('.meow_container').height() + topBottom + 50;
            if($(window).scrollTop() > topBottom && $(window).scrollTop() < meowBottom){
                _headerlinks.addClass('transform');
                $(".gronav_toggle_bar").addClass('transform_bg');
            }else{
                _headerlinks.removeClass('transform');
                $(".gronav_toggle_bar").removeClass('transform_bg');
            }
        });
    }
    
    // gronavメニューの消滅処理
    var _window = $(window),
        _header = $('.gronav'),
        startPos,
        winScrollTop;
     
    _window.on('scroll',function(){
        winScrollTop = $(this).scrollTop();
        if (winScrollTop >= startPos) {
            _header.hide('slide', {direction: "up"}, 300);
        } else {
            _header.show('slide', {direction: "up"}, 300);
        }
        startPos = winScrollTop;
    });
    
    // gronav_toggle_menu
    $(function(){
        $(".gronav_toggle").on("click", function() {
            $(".gronav_wrap, .gronav_wrap_contact, .gronav_bg").slideToggle();
            if ($(".gronav_toggle .inner").hasClass('active2')) {
                $('.gronav_toggle .inner').removeClass('active2');
            } else {
                $('.gronav_toggle .inner').addClass('active2');
            }
        });
    });
    
    // ヘッダーナビactive
    
    $(document).ready(function() {
        if(location.pathname != "/") {
            $('.gronav li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
        } 
    });
    
    
    // フッター消去
    const ContactFooter = location.pathname;
    
    if(ContactFooter == "/contact") {
        $(".footer_wrapper").addClass("delete");
    }
    
    // productsスクロール
    $(function(){
        $(".products_main").on('scroll',function(){
            if($(".products_main").scrollLeft() == 0) {
                $("#products_left").addClass("gray");
                $("#products_left").removeClass("pointer");
            } else {
                $("#products_left").removeClass("gray");
                $("#products_left").addClass("pointer");
            }
            if($(".products_main").scrollLeft() == 160) {
                $("#products_right").addClass("gray");
                $("#products_right").removeClass("pointer");
            }else {
                $("#products_right").removeClass("gray");
                $("#products_right").addClass("pointer");
            }
        });
        $("#products_left").on('click', function(){
            var _products_position = $(".products_main").scrollLeft();
            $(".products_main").animate({scrollLeft: _products_position - 160},"fast", "swing");
        });
        $("#products_right").on('click', function(){
            var _products_position = $(".products_main").scrollLeft();
            $(".products_main").animate({scrollLeft: _products_position + 160},"fast", "swing");
        });
    });
    
    // journalスクロール
    $(function(){
        $(".journal_main").on('scroll',function(){
            if($(".journal_main").scrollLeft() == 0) {
                $("#journal_left").addClass("gray");
                $("#journal_left").removeClass("pointer");
            } else {
                $("#journal_left").removeClass("gray");
                $("#journal_left").addClass("pointer");
            }
            if($(".journal_main").scrollLeft() == 703) {
                $("#journal_right").addClass("gray");
                $("#journal_right").removeClass("pointer");
            }else {
                $("#journal_right").removeClass("gray");
                $("#journal_right").addClass("pointer");
            }
        });
        $("#journal_left").on('click', function(){
            var _journal_position = $(".journal_main").scrollLeft();
            $(".journal_main").animate({scrollLeft: _journal_position - 170},"fast", "swing");
        });
        $("#journal_right").on('click', function(){
            var _journal_position = $(".journal_main").scrollLeft();
            $(".journal_main").animate({scrollLeft: _journal_position + 170},"fast", "swing");
        });
    });
    
    
    
}


});
