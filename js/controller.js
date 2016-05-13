 
 var CONTROLLER=angular.module("controller",[]);

 CONTROLLER.controller("indexPage",["$scope","$timeout",function($scope,$timeout){
     $scope.id=10;
    $(".progress span").each(function(){
        var dataRecord=$(this).data("record");
        $(this).animate({width:dataRecord+"%"});
        $(this).next().text(dataRecord+"%")
    })

    var windowWidth=$(window).width(),
    page=$(".carouselCont a").length,
    textArr=[],
    presentationCont=document.querySelector(".carouselCont"),
    i=0;
    for(;i<page;i++){
        textArr.push("<li></li>") 
    }
    $(".pointReminder").append(textArr.join(""));
    var pointReminderWidth=$('.pointReminder').width();
    $('.pointReminder').css({left:windowWidth/2-pointReminderWidth/2})
    $(".pointReminder li").eq(0).addClass("targ");
         Slip(presentationCont, 'x').slider()
        .width('100%').height(200).end(function(){
            var page=this.page;
            $(".pointReminder li").eq(page)
            .addClass("targ")
             .siblings().removeClass('targ')
             }) 

    $(".mainLink").on("click","li",function(){
        var index=$(this).index()
        $(this).addClass("selet").siblings().removeClass("selet");
        $(".mainSame").eq(index).show().siblings(".mainSame").hide()
    })


 }]).controller("project",["$scope",function($scope){ /*project*/
    $(".surplusProgress span").each(function(){
        var dataRecord=$(this).data("record");
        $(this).animate({width:dataRecord+"%"});
        $(this).next().text(dataRecord+"%")
    })
    var oul=$(".imageMagnification li"),
        oulLength=oul.length,
        num=0; 
    $(".imageMagnification").on("click","li",function(){
    var thisChildren=$(this).children(),
        windowWith=$(window).width(),
        windowHeight=$(window).height(),
        thisIndex=$(this).index(),
        newImgWidth,
        newImgHeight;
        num=thisIndex;
    $(".newImg").remove();
    var newImgHtml=$("<img class='newImg'>");
    $('.imageMarkCont').append(newImgHtml)
    var newImg=$(".newImg");
    newImg.attr("src",thisChildren.attr("src"));
    $(".imageMark").show(0,function(){
        newImgWidth=newImg.width();
        newImgHeight=newImg.height();
        if(newImgWidth>windowWith && newImgHeight>windowHeight){
            newImg.css({width:100+"%",height:100+"%"})
        }else if(newImgWidth<windowWith && newImgHeight<windowHeight){
            newHeight=newImg.height();
            newWidth=newImg.width();
            newImg.css({top:windowHeight/2-newHeight/2,left:windowWith/2-newWidth/2})
        }else if(newImgWidth>windowWith){
            newImg.width(100+"%");
            newHeight=newImg.height();
            newImg.css({top:windowHeight/2-newHeight/2})
        }else if(newImgHeight>windowHeight){
            newImg.height(100+"%");
            newWidth=newImg.width();
            newImg.css({left:windowWith/2-newWidth/2})
       }
    })

    $(".right").click(function(){
        if(num==oulLength-1){
            num=oulLength-1;
       }else{
            num++;
            $(".newImg").css({width:"auto",height:"auto",top:"auto",left:"auto"});
            $(".newImg").attr("src",oul.eq(num).children().attr("src"));
            newImgWidth=newImg.width();
       newImgHeight=newImg.height();
       if(newImgWidth>windowWith && newImgHeight>windowHeight){
            newImg.css({width:100+"%",height:100+"%"})
       }else if(newImgWidth<windowWith && newImgHeight<windowHeight){
            newHeight=newImg.height();
            newWidth=newImg.width();
            newImg.css({top:windowHeight/2-newHeight/2,left:windowWith/2-newWidth/2});
       }else if(newImgWidth>windowWith){
            newImg.width(100+"%");
            newHeight=newImg.height();
            newImg.css({top:windowHeight/2-newHeight/2});
       }else if(newImgHeight>windowHeight){
            newImg.height(100+"%");
            newWidth=newImg.width();
            newImg.css({left:windowWith/2-newWidth/2});
       }

       }
   })

    $(".left").click(function(){
       if(num==0){
            num=0;
       }else{
            num--;
            $(".newImg").css({width:"auto",height:"auto",top:"auto",left:"auto"});
            $(".newImg").attr("src",oul.eq(num).children().attr("src"));
            newImgWidth=newImg.width();
            newImgHeight=newImg.height();
       if(newImgWidth>windowWith && newImgHeight>windowHeight){
            newImg.css({width:100+"%",height:100+"%"})
       }else if(newImgWidth<windowWith && newImgHeight<windowHeight){
            newHeight=newImg.height();
            newWidth=newImg.width();
            newImg.css({top:windowHeight/2-newHeight/2,left:windowWith/2-newWidth/2});
       }else if(newImgWidth>windowWith){
            newImg.width(100+"%");
            newHeight=newImg.height();
            newImg.css({top:windowHeight/2-newHeight/2})
       }else if(newImgHeight>windowHeight){
            newImg.height(100+"%");
            newWidth=newImg.width();
            newImg.css({left:windowWith/2-newWidth/2});
       }

       }
   })

})
    $(".imageMarkCont").on("click",function(){
       $(".imageMark").hide();
    })

    $(".recordLink").on("click","li",function(){
          var index=$(this).index();
          $(this).addClass("corRed").siblings("li").removeClass('corRed')
          $(".projectSame").eq(index).show().siblings(".projectSame").hide()
    })

 }]).controller("transactionRecord",["$scope",function($scope){
 	   $(".repayment").click(function(){
 	   	   var transactionRecordTable=$(".transactionRecordTable");
 	   	     if(transactionRecordTable.is(":hidden")){
 	   	     	 transactionRecordTable.show();
 	   	     	  $(this).children("i").css({backgroundPosition:"-36px -25px"})
 	   	     }else{
 	   	     	 transactionRecordTable.hide();
 	   	     	 $(this).children('i').css("background-position","0 -25px")
 	   	     }
 	   })
 }]).controller("creditorRights",["$scope",function($scope){
      $(".creditorRightsMsg").on("click","li",function(){
           var index=$(this).index();
           $(this).removeClass("botmBor").siblings().addClass('botmBor');
           $(".creditorRightsSame").eq(index).show().siblings(".creditorRightsSame").hide()
      })
 }]).controller("securityGuarantee",["$scope",function($scope){
       var securityGuarantNav=$(".securityGuarantNav li");
       var securityGuarantLiBor=$(".securityGuarantLiBor");
       securityGuarantNav.on("click",function(e){
           var index=$(this).index();
           $(".securityGuarantSame").eq(index).show().siblings().hide();
           $(this).addClass("securityGuarantLiCor").siblings().removeClass("securityGuarantLiCor");
               if(index==0){
                   securityGuarantLiBor.animate({left:0},200);
               }else if(index==1){
                   securityGuarantLiBor.animate({left:50+"%"},200);
            }
           
        })
 }]).controller("commonProblem",["$scope",function($scope){
     $(".commonProblemTitle").on("click",function(){
      var iHTML=$(this).children("i");
      var cont=$(this).next();
      iHTML.css({backgroundPosition:"-36px 26px"}).parents("li").siblings().find('i').css({backgroundPosition:"-36px 11px"})
      cont.show(300).parents("li").siblings().children('.commonProblemCont').hide()
  })

 }]).controller("redBag",["$scope",function($scope){
    

 }]).controller("invitationCode",["$scope",function($scope){
       $(".repayment").click(function(){
            var recommendationCode=$(".recommendationCode");
               if(recommendationCode.is(":hidden")){
                  recommendationCode.show();
                  $(this).children("i").css({backgroundPosition:"-36px -25px"})
               }else{
                  recommendationCode.hide();
                  $(this).children("i").css({backgroundPosition:"0 -25px"})
               }
       })
 }]).controller("bankCard",["$scope",function($scope){
    

 }]).controller("replaceBankCard",["$scope",function($scope){
    

 }]).controller("supportCard",["$scope",function($scope){
    

 }]).controller("bankCardMsg",["$scope",function($scope){
    

 }]).controller("paymentMony",["$scope",function($scope){
    

 }])