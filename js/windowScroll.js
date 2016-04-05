// contact us
;(function ($){
    var _box=$('.contact_us'),
        _left=$('.contact_us>.left'),
        _leftLis=$('.contact_us>.left>li'),
        _right=$('.contact_us>.right'),
        _rightLis=$('.contact_us>.right>li'),
        boxFiexed=function (){
            _left.css({
                top: $(window).scrollTop()>_box.parent().offset().top ? 0 : _box.parent().offset().top-$(this).scrollTop(),
                left: '50%',
                marginLeft: '-500px'
            }).find('li').eq(0).css({background:'#a3002b',color:'#fff'}).siblings('li').css({background: '#fff',color:'#000'})
            if($(window).scrollTop()>=_rightLis.eq(1).offset().top){
                _leftLis.eq(1).css({background:'#a3002b',color:'#fff'}).siblings('li').css({background: '#fff',color:'#000'})
            }
            if($(window).scrollTop()>=_rightLis.eq(2).offset().top){
                _leftLis.eq(2).css({background:'#a3002b',color:'#fff'}).siblings('li').css({background: '#fff',color:'#000'})
            }      
        };
    $('.nav_con>div').click(function (){
        $(window).scrollTop(0);
        boxFiexed()
    }); 
    $(window).on('scroll',boxFiexed);
    _leftLis.on('click',function (){      
        $('html,body').animate({scrollTop:_rightLis.eq($(this).index()).offset().top}, 800);
    })
         
}(window.jQuery));