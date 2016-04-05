// work list
;(function ($){
    var _box=$('.circle_slide'),
        _ul=$('.circle_slide>ul'),
        _lis=$('.circle_slide>ul>li'),
        _next=$('.circle_slide>ul>li>.next'),
        _prev=$('.circle_slide>ul>li>.prev'),
        jscroll=_box.children('.jscrollpane'),
        jsNav=jscroll.children('.jscroll_nav'),
        mouseHandler=jsNav.children('.mouse'),
        scrollBox=jscroll.children('.jscroll_content'),
        scrollText=scrollBox.children('div'),
        _bg=_box.children('.bg'),
        sildeBG=function (events){
            _ul.animate({'marginLeft':-events.data.page*100+'%'},800);
            _bg.addClass('activeBg');
            setTimeout(function (){
            _bg.removeClass('activeBg');
        },3000)
        }
        page=0,
        speed= 5;
    _next.on('click',{page:1},sildeBG)    
    _prev.on('click',{page:0},sildeBG)

    _lis.find('.main .circle').click(function (){
       jscroll.fadeIn(800);
// 获取滚动条的高度    || 元素显示才可以获取否则返回undefined   
       // mouseHandler.height((scrollBox.height()/scrollText.height())*jsNav.height());
    })
    jscroll.find('span').click(function (){
        jscroll.fadeOut(500)
    })
 
/*// 滚轮滚动事件
function mouseScroll(page){
    scrollText.css('marginTop',-speed*page*(scrollText.height()/scrollBox.height()));
    mouseHandler.css('top',speed*page)
}
   

// 滚动回调函数
    function scrollFunc(e){
        e=e || window.event;
        if(e.preventDefault){
            e.preventDefault()
        }else{
            e.returnValue=false;
        }
        if(e.detail>0 || e.wheelDelta<0){
            page=page===parseInt((jsNav.height()-mouseHandler.height())/speed)? parseInt((jsNav.height()-mouseHandler.height())/speed) : page+1;
            mouseScroll(page)
        }else{
            page=page===0 ? 0 : page-1;
            mouseScroll(page)
        }
    }
    if(document.addEventListener){
        scrollBox[0].addEventListener('DOMMouseScroll',scrollFunc,false)
    }
    scrollBox[0].onmousewheel=scrollFunc;

// 模拟滚动条拖拽功能    

        var y0=0,y1=0,moveable=false,funcStyle={
            'mousedown': startDrage,
            'mousemove': startMove,
            'mouseup': stopDrage,
            'mouseout': stopDrage
        };
        mouseHandler.on(funcStyle);

        function startDrage(e){
            e=e || window.event;
            y0=e.clientY;
            y1=mouseHandler.position().top;
            moveable=true;
        }
        function startMove(e) {
            if (moveable) {
              mouseHandler.css('top',y1+e.clientY-y0);
              if(parseInt(mouseHandler.css('top'))<=0){
                mouseHandler.css('top',0)
              }else if(parseInt(mouseHandler.css('top'))>=jsNav.height()-mouseHandler.height()){
                mouseHandler.css('top',jsNav.height()-mouseHandler.height());
              }
              page=parseInt(mouseHandler.css('top'))/speed;
              mouseScroll(page)
              console.log(page)
            }
        }
        function stopDrage(e){
            if(moveable){
                moveable=false;
            }
        }*/

}(window.jQuery));