jQuery( function ($) {
    // Slide

    var index = 0;

    $('.left').on('click', function (e) {
        e.preventDefault();
        index--;
        if (index < 0) {
            index = 2;
        }
        $('.main .slide').stop().animate({"margin-left":"-"+index+"00%"},function () {
            if (index < 0) {
                index = 2;
                $('.main .slide').css("margin-left","-"+index+"00%");
            }
        })
    })

    $('.right').on('click', function (e) {
        e.preventDefault();
        index++;
        if (index > 2) {
            index = 0;
        }
        $('.main .slide').stop().animate({"margin-left":"-"+index+"00%"},function () {
            if (index > 2 ) {
                index = 0;
                $('.main .slide').css("margin-left","-"+index+"00%");
            }
        })
    })

    setInterval( function() {
        index++;
        if (index >= 2) {
            index = 0;
        }
        $('.main .slide').animate({'margin-left':'-'+ index +'00%'},function () {
            if (index >= 2) {
                index = 0;
                $('.main .slide').css("margin-left","-"+index+"00%");
            }
        })
    }, 3000);

    // Menu

    if ($(window).width() > 800) {
        $('header li').on('mouseover', function () {
            $('header').stop().animate({'height': '200px'})
        })

        $('header li').on('mouseleave', function () {
            $('header').stop().animate({'height': '80px'})
        })
    }
    
    // FAQ
    $('.faq').on('click', function () {
        $(this).children().slideDown()
    })

    $('.faq_close').on('click', function (e) {
        e.stopPropagation()
        $(this).parent().parent().slideUp()
    })

    $('.content > .layout > .member_wrap > ul >li').on('click', function (e) {
        e.preventDefault();
        var index = $(this).index();
        position = ['#TourTeam', '#PRTeam', '#ContentTeam', '#CRMTeam'];
        switch (index) {
            case 0 :
                $("html, body").animate({
                    'scrollTop' : $(position[index]).offset().top
                }, 1000);

                break;
            case 1 :
                $("html, body").animate({
                    'scrollTop' : $(position[index]).offset().top
                }, 1000);

                break;
            case 2 :
                $("html, body").animate({
                    'scrollTop' : $(position[index]).offset().top
                }, 1000);

                break;
            case 3 :
                $("html, body").animate({
                    'scrollTop' : $(position[index]).offset().top
                }, 1000);

                break;
        }
    })

    // moblie tablet menu

    $('.menu').on('click', function (e) {
        e.preventDefault();
        $('.wrap_bg').animate({'top':'0'},500)
        $('.wrap_bg').html('<span style="width: 100%; height: 50px; background: #fff; display: block; line-height: 50px; text-align: center;" class="menu_close">닫기</span>')
        $('header .layout > ul').animate({
            'z-index':'9999',
            'top':'100px'
        },500)
    })

    $(document).on('click', '.menu_close' ,function (e) {
        e.preventDefault();
        $('.wrap_bg').animate({'top':'-100%'},500)
        $('header .layout > ul').animate({'top':'-500px'},500)
    })

    //menu eventDef
    if ($(window).width() < 800) {
        $('header .layout > ul > li > a').on('click', function (e) {
            e.preventDefault()
        });
    }

    // menu hideen

    $('header .layout > ul > li').on('click', function (e) {
        var self = $(this);

        $('header .active_arrow').removeClass('active');

        var activeElement = self;
        activeElement.children('ul').stop().slideToggle(200, function () {
            var toggleFlag = activeElement.children('ul').is(':visible');
            if (toggleFlag) {
                // show toggle callback
                activeElement.find('.active_arrow').addClass('active');
            } else {
                // hide toggle callback
                activeElement.find('.active_arrow').removeClass('active');
            }
        });

        var diffElements = self.siblings()
        diffElements.children('ul').slideUp(200);
    })

    $('header .layout li').on('click', function (e) {
        e.stopPropagation();
    })

    // Tour Schedule

    $('.schedule').on('click', function (e) {
        var self = $(this);
        self.children('ul').stop().slideToggle(200);
        self.siblings().children('ul').slideUp(200);
    })

    // Tour Gallery

    $('.gallery').on('click', function (e) {
        var self = $(this);
        self.children('ul').stop().slideToggle(200);
        self.siblings().children('ul').slideUp(200);
    })
})