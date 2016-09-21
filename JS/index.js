/**
 * Created by Administrator on 2016/9/6.
 */

$(function(){
    $('#work_position_new').click(function(){
        $("#newcon").css("display","block");
        $("#hotcon").css("display","none");
       this.style.backgroundColor="white";
        this.style.borderTop="3px solid darkseagreen";
        $("#work_position_hot").css("background","rgba(0,0,0,0)");
         $("#work_position_hot").css("borderTop","none");
       });//控制Tab页的切换
     work_position_hot.onclick=function(){
            $("#newcon").css("display","none");
            $("#hotcon").css("display","block");
             this.style.backgroundColor="white";
             this.style.borderTop="3px solid darkseagreen";
             $("#work_position_new").css("background","rgba(0,0,0,0)");
             $("#work_position_new").css("borderTop","none");
     }

    $(".link_open").click(function(){
        debugger
        if($("#hide_link").css("display","none")){
            $("#hide_link").css("display","block")
        }
        else{
            $("#hide_link").css("display","none")
        }
    })   //控制展开友情链接


    function wrap(){
        //$(".wife_pk img").css("border","4px solid mediumseagreen");
        var marg=$(".wrap_top_left>ul").css("top");
       var timer1= setInterval(function(){
            var marg=parseInt($(".wrap_top_left>ul").css("top"));
            marg=(marg-2)+"px";
            $(".wrap_top_left>ul").css("top",marg);
            if(parseInt(marg)==-162){
                clearInterval(timer1);
                $(".wife_pk img").css("border","4px solid lightgray");
                $(".wife_app img").css("border","4px solid mediumseagreen");
                setTimeout(wrap2,2000);
            }
        },20)
    }     //控制自动轮播
    function wrap2(){
        var timer2=setInterval(function(){
            var marg2=parseInt($(".wrap_top_left>ul").css("top"));
            marg2=(marg2-2)+"px";
            $(".wrap_top_left>ul").css("top",marg2);
            if(parseInt(marg2)==-324){
                clearInterval(timer2);
                $(".wife_app img").css("border","4px solid lightgray");
                $(".wife_tshirt img").css("border","4px solid mediumseagreen");
                setTimeout(wrap3,3000);
            }
        },20)
    }
    function wrap3(){
        var timer3=setInterval(function(){
            var marg3=parseInt($(".wrap_top_left>ul").css("top"));
            marg3=(marg3+4)+"px";
            $(".wrap_top_left>ul").css("top",marg3);
            if(parseInt(marg3)==0){
                clearInterval(timer3);
                $(".wife_pk img").css("border","4px solid mediumseagreen");
                $(".wife_tshirt img").css("border","4px solid lightgray");
            }
        },10)
    }
    setTimeout(wrap,2000);

    function mouses(){
        $(".bot_lis").bind("mouseenter mouseleave",   //控制判断鼠标进入还是进出
            function(e) {
                var w = $(this).width();
                var h = $(this).height();
                var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
                var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
                var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
                var eventType = e.type;
                //var dirName = new Array('上方','右侧','下方','左侧');
                //
                //if(e.type == 'mouseenter'){
                //    $(".updiv").html(dirName[direction]+'进入');
                //}else{
                //    $(".updiv").html(dirName[direction]+'离开');
                //}
                //var dirName = new Array('1','2','3','4');
                //switch (direction) {
                //    case 0:
                //        $("updiv").html('top');
                //        break;
                //    case 1:
                //        $("updiv").html('right');
                //        break;
                //    case 2:
                //        $("updiv").html('bot');
                //        break;
                //    case 3:
                //        $("updiv").html('left');
                //        break;
                //}
                if(e.type == 'mouseenter'){
                    //$(this).html(direction+'Enter');
                    $(".updiv").css("display","block");
                    $(".updiv").css("top","-105px");
                    var timer=setInterval(function(){
                        var tops=parseInt($(".updiv").css("top"));
                        tops=(tops+1)+"px";
                        $(".updiv").css("top",tops);
                        if(parseInt(tops)==0){
                            clearInterval(timer);
                        }
                    },2)
                }
                else{
                    //$(".updiv").css("top","0");
                    var timer=setInterval(function(){
                        var tops=parseInt($(".updiv").css("top"));
                        tops=(tops-1)+"px";
                        $(".updiv").css("top",tops);
                        if(parseInt(tops)==-105){
                            clearInterval(timer);
                        }
                    },2)
                }
            }
        );
    }
    mouses();

    function count1(){
              var i=88;
              var timer=setInterval(function(){
                  $("#comp_count").html(i);
                  i+=1000;
                  if(i>138088){
                      clearInterval(timer);
                  }
              },5)
          }
    count1();

    function scrolls(){
        var top = $(this).scrollTop();
        if(top==0){
            $("#backtop").css("display","none");
        }
        $(window).bind("scroll",function(){
            var top = $(this).scrollTop();
            if(top>100){
                $("#backtop").css("display","block");
            }
            else{
                $("#backtop").css("display","none");
            }
            $("#backtop").click(function(){
                $("body").scrollTop(0);
            })
        })
    }//控制返回顶部的图标的隐藏问题
    scrolls();

    function scrolls2(){
        var top = $(this).scrollTop();
        if(top>1970){
            $(".foot_bot").css("display","block");
        }
        $(window).bind("scroll",function(){
            var top = $(this).scrollTop();
            console.log(top);
            if(top>1970){
                $(".foot_bot").css("display","block");
            }
            else{
                $(".foot_bot").css("display","none");
            }
        })
    }  //控制footer的最后一个的隐藏问题
    scrolls2();

    function slide(){
        $(".slidebar_left").hover(
            function(){
                $(".main").zIndex(15);
            }
        )

    }
    slide();

});