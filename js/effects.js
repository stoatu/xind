//首页banner轮播
;(function ($) {
	var _box=$('.Id_banner_w'),
        _ul=$('.Id_banner_w>.banner_w_silde'),
        _lis=$('.Id_banner_w>.banner_w_silde>li'),
        page=0,
        timer,
        sildePage= function (page) {
        	_lis.eq(page).show().animate({opacity:1},600).siblings('li').animate({opacity:0},500).hide();
            $('.silde_nav li').eq(page).css('background','#a3002b').siblings('li').css('background','#fff')
        };
    if ($(window).width()<_lis.find('img').width()) {
        _lis.find('img').css('marginLeft',-(_lis.find('img').width()-$(window).width())/2+'px')
    };      
    if (_lis.length>0) {
        _box.append('<ul class="silde_nav"></ul>');
        for(var i=0; i<_lis.length; i+=1){
            $('.silde_nav').append('<li></li>')
        }
        $('.silde_nav').width(($('.silde_nav').find('li').width()+20)*_lis.length).css('marginLeft',-$('.silde_nav').width()/2)
    };
    _lis.hide().css('opacity',0);
    sildePage(page);
    timer=setInterval(function (){
    	page=page===_lis.length-1?0:page+1;
    	sildePage(page)
    },5000);
    _box.hover(function (){
    	clearInterval(timer)
    },function (){
    	timer=setInterval(function (){
    	page=page===_lis.length-1?0:page+1;
    	sildePage(page)
    },5000)
    })
    $('.silde_nav li').on('click',function (){
        page=$(this).index();
        sildePage(page);
    })


 //banner_w_botNav   
    $('.banner_w_botNav li').hover(function (){
        $(this).find('.main').css('marginTop',-$(this).find('.main').height())
    },function (){
        $(this).find('.main').css('marginTop',0)
    }) 
}(window.jQuery));


//新闻和视频切换
;(function ($) {
    var _nav=$('.nav_con>div'),
        _add=$('.news_add_video>div'),
        page=0,
        _toggle=function (page) {
        	_add.eq(page).fadeIn().siblings('div').fadeOut();
        	_nav.eq(page).addClass('active').siblings('div').removeClass('active');
        }
    _add.hide();    
    _toggle(page);
    _nav.on('click',function (){
         page=$(this).index();
         _toggle(page)
    })    
}(window.jQuery));



// product list
;(function ($){
        var _list=$('.right_list>.list>ul li'),
            _pop=$('.pop_prodetail'),
            _popBox=_pop.children('.pop'),
            _marTop;
        _list.each(function (){
            $(this).append('<div class="pop"></div>').find('.pop').append($(this).find('.text').children().clone()).append('<div class="detail">查看详情</div>')
        })

        var _nav=$('.product_mai .nav ul li'),
            _door=$('.right_list>.list'),
            page=0,
            pop=function (page) {
                _nav.eq(page).addClass('active').find('span').text('-').parent().siblings('li').removeClass('active').find('span').text('+')
                _door.eq(page).show().siblings('.list').hide()
            };
        _door.hide();    
        pop(0);    
        _nav.on('click',function (){
            page=$(this).index();
            pop(page)
        })
        $('.produtc_detail .check_mor').click(function (){
            $(this).next().slideToggle()
        })
//pop
        _pop.height($(document).height());
        popTop=function (){
            if($(window).height()<=_popBox.height()+20){
                _marTop=20
            }else{
                _marTop=($(window).height()-_popBox.height())/2
            }
            return _marTop;
        }
        _pop.find('tr').each(function (){
            $(this).find('td').eq(0).css({
                background: '#f3f3f3',
                fontWeight: 'bold',
                width: '170px'
            })
        })
        showDetail=function (){
            _pop.fadeIn();
             _popBox.css('marginTop',popTop());
        }
       
        _pop.find('span').click(function (){
            $(this).parent().parent().fadeOut('slow')
        })
        _list.on('click',showDetail);
        $('.hot_products>li').on('click',showDetail)

    }(window.jQuery));



// info detail
;(function (){
    var InfoSlide=function (a){
        a= a || {};
        var b= {
            slideCall: a.slideCall || '#slideBox',
            speed: a.speed || '3000',
        },
        c=$(b.slideCall),
        d=c.children('ul'),
        e=d.children('li'),
        f= function () {
           d.append(e.eq(0).clone());
           return e=d.children('li')
        },
        k=function (){
           f();
           d.width(e.length*100+'%');
           e.width(100/e.length+'%')
        };
        k();
        var f=0,
        g=function (f){
            d.stop().animate({marginLeft: -f*100+'%'},{easing: 'swing',duration: 800})
        };
        g(f);
        var h=c.children('.prev'),
            i=c.children('.next'),
            j;
         h.click(function (){
            if(f>e.length-2) {
                d.css('marginLeft',0);
                f=1;
            }else{ f+=1}
            g(f)
         })
         i.click(function (){
            if(f<1){
                d.css('marginLeft',-(e.length-1)*100+'%');
                f=e.length-2
            }else { f-=1}
            g(f)
         })   
        j=setInterval(function (){
            h.trigger('click')
        },b.speed)
        c.hover(function (){
            clearInterval(j)
        },function (){
            j=setInterval(function (){
                h.trigger('click')
            },b.speed)
        })
        


    }
    InfoSlide({slideCall : '#info_silde',speed : ''})
}(window.jQuery));


//school object
;(function ($){
    var _ols=$('.school_service>ol>li'),
        _lis=$('.school_service>ul>li'),
        pageSilde=function (){
          $(this).addClass('active').siblings('li').removeClass('active');
          _lis.eq($(this).index()).fadeIn().siblings('li').hide()
        };
        _lis.hide().eq(0).show();
        _ols.on('click',pageSilde)   
}(window.jQuery));

//school list
;(function ($){
    $('.door_object').find('dd').on('click',function (){
        $(this).addClass('active').siblings('dd').removeClass('active')
    })
}(window.jQuery));



//goIn  silde

// num_0
;(function ($){
   var _box=$('.silde_pageGo'),
       _dl=$('.silde_pageGo dl'),
       _dd=$('.silde_pageGo dl dd'),
       page=0,
       imgPage=0;
    function ISlide(z){
        var a,b,c,d,e,f,g,h;
        a=$('#'+z.box);
        b=a.children('.img');
        c=b.children('img');
        d=function (){
            if(c.length>1){
                a.append('<div class="img_nav"></div>');
                for(var i=0; i<c.length; i+=1){
                    a.find('.img_nav').append('<div></div>')
                } 
            }
           
        }
        d();
        e=0;
        f=function (e){
            c.eq(e).show().siblings('img').hide();
            a.find('.img_nav div').eq(e).addClass('active').siblings('div').removeClass('active');
        }
        f(0);
        g=function (){
            e=e==c.length-1?0:e+1;
            f(e);
        }
        h=setInterval(g,z.speed);
        a.hover(function (){
            clearInterval(h)
        },function (){
            h=setInterval(g,z.speed);
        });
        i=a.find('.img_nav div').click(function (){
            e=$(this).index();
            f(e);
        })       
    }
    ISlide({box:'imgslide',speed:'3000'});
    ISlide({box:'imgslidefirst',speed:'3000'});


//第一屏内容轮播    
    _dd.eq(0).clone().appendTo(_dl);
    _dd=$('.silde_pageGo>dl>dd');
    _dl.width(_dd.length*100+'%');
    _dd.width(100/_dd.length+'%');
    if(_dd.length>1){
        $('.wheel_silde01').append('<div class="silde_nav"></div>');
        for(var i=0;i<_dd.length-1;i+=1){
            $('.wheel_silde01 .silde_nav').append('<div></div>')
        }
        var navWidth=($('.wheel_silde01 .silde_nav div').width()+10)*$('.wheel_silde01 .silde_nav div').length
        $('.wheel_silde01 .silde_nav').css({
            width: navWidth,
            marginLeft: -navWidth/2 
        })
    }
    function goInSilde(page){
        _dl.animate({
            marginLeft: -page*100+'%'
        },800)
        function navGo(){
            page=page===_dd.length-1?0:page;
            $('.wheel_silde01 .silde_nav div').eq(page).addClass('active').siblings('div').removeClass('active')
        }
        navGo()
    }
    goInSilde(page);
    timer=setInterval(function (){
        if(page>_dd.length-2){
            _dl.css('marginLeft',0);
            page=1;
        }else{
            page+=1
        }
        goInSilde(page)
    },4000)  
    $('.wheel_silde01 .silde_nav div').on('click',function (){
        page=$(this).index();
        goInSilde(page);
    })
    _box.hover(function (){
        clearInterval(timer)
    },function (){
        timer=setInterval(function (){
            if(page>_dd.length-2){
                _dl.css('marginLeft',0);
                page=1;
            }else{
                page+=1
            }
        goInSilde(page)
        },4000) 
    })
    $('.wheel_silde01 .silde_nav').hover(function (){
        clearInterval(timer)
    },function (){
        timer=setInterval(function (){
            if(page>_dd.length-2){
                _dl.css('marginLeft',0);
                page=1;
            }else{
                page+=1
            }
        goInSilde(page)
        },4000) 
    })
    $('.num_box .num>div').css('paddingTop',($(window).height()-$('.wheel_silde01').height())/2)
}(window.jQuery));


//num_1
;(function ($){
    var _box=$('.silde_years'),
        _navDl=$('.silde_years>.silde_nav'),
        _navDds=$('.silde_years>.silde_nav>dd'),
        _dl=$('.silde_years>.silde_main'),
        _dds=$('.silde_years>.silde_main>dd'),
        _prev=$('.silde_years>.prev'),
        _next=$('.silde_years>.next'),
        page=0,
        timer;
    _navDl.width(_navDds.length*100/3+'%');
    _navDds.width(100/_navDds.length+'%')
    _dds.hide();
    function pageAddClass(page){        
        _navDds.eq(page).addClass('active').siblings('dd').removeClass('active');
        _dds.eq(page-1).slideDown('slow').siblings('dd').hide();      
        _navDl.animate({marginLeft: -(page-1)*_navDds.width()},800);
    }
    pageAddClass(1);
    _navDds.click(function (){
        page=$(this).index();
        if(page>_navDds.length-3){
                page=_navDds.length-2
            }
            if(page<2){
                page=1;
            }
        pageAddClass(page)
    })
    _next.click(function (){
        page=page>_navDds.length-3?_navDds.length-2:page+1;
        pageAddClass(page)
    })
    _prev.click(function (){
        page=page<2?1:page-1;
        pageAddClass(page)
    })
    


 }(window.jQuery));


// num_2
;(function ($){
     var _box=$('.honor_slide'),
         _dl=$('.honor_slide>dl'),
         _dds=$('.honor_slide>dl>dd'),
         page=0,
         _prev=$('.honor_slide>.prev'),
         _next=$('.honor_slide>.next'),
         honorSlide=function (page){
            _dds.eq(page).show().siblings('dd').hide();
            for(var i=0; i<_dds.eq(page).find('img').length; i+=1){
                
                if(i>2){
                   _dds.eq(page).find('img').eq(i).stop().delay(200*i).animate({
                    top: 208,
                    left: (32+_dds.eq(page).find('img').width())*(i-3)
                   },200).parent().siblings('dd').find('img').css({marginLeft:0}) 
                }else{
                    _dds.eq(page).find('img').eq(i).stop().delay(200*i).animate({
                    top: 15,
                    left: (32+_dds.eq(page).find('img').width())*i
                },200).parent().siblings('dd').find('img').css({marginLeft:0})
                }
                _dds.eq(page).siblings('dd').find('img').css({left: '100%',top:180})
            }
         }   
  
    _next.click(function (){
        page=page==_dds.length-1?0:page+1;
        honorSlide(page)
    })
    _prev.click(function (){
        page=page==0?_dds.length-1:page-1;
        honorSlide(page)
    })
    $('#num_2').mouseenter(function (){

          honorSlide(page);
    })
    


}(window.jQuery));

