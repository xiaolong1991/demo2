var a=0;
var $liPage;
var timenow;
var tatrue=true;
var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;
//判断链接跳转后返回到当前页
window.onload=function(){
	$(".loading").hide();
	//职位链接返回后到职位列表
	if(localStorage.succeed=="succeed"){
		localStorage.clear();
		$(".page-1-1").removeClass("page-current").addClass("hide");
		$(".page-5-1").removeClass("hide").addClass("page-current");
		now.row = 5; now.col = 1;
	}
	$(".p12_1 a").click(function(){
		localStorage.succeed="succeed";
	})
	
	//滑屏切换
	$(".p1_2").addClass("sc1");
	$(".p1_1 li:nth-child(2)").addClass("op1");
	$(".p1_1 li:nth-child(3)").addClass("sc2");
	$(".p1_1 li:nth-child(4)").addClass("sc2");
	$(".p1_1 li:nth-child(5)").addClass("sc2");
	$(".p1_1 li:nth-child(6)").addClass("sc2");
	$(".p1_1 li:nth-child(7)").addClass("sc2");
	$(".p1_1 li:nth-child(8)").addClass("sc1");
	$(".page-1-1,.page-2-1,.page-3-1,.page-4-1,.page-5-1,.page-6-1,.page-7-1").swipe( {
		swipe:function(e,direction) {
			switch (direction){
				case "up":
					if (isAnimating) return;
					last.row = now.row;
					last.col = now.col;
					if (last.row !=7) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}
				break;
				case "down":
					if (isAnimating) return;
					last.row = now.row;
					last.col = now.col;
					if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}
			}
		}
	});
	function get_width(){
		var _width=$(".page-1-1 .get_width").find("li:nth-child(1) img").width();
		$(".page-1-1 .get_width").css({"width":_width});
	}
	get_width();
	$(window).resize(function(){
		get_width();
	});
	$(".left").on("touchstart",function(){
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}
	})
	$(".right").on("touchstart",function(){
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		if (last.row !=7) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}
	})
	$(".page8").on("touchstart",function(){
		now.row = 2;last.row=8; now.col = 1; pageMove(towards.down);
		$(".hint").show();
	})
	$(".page9").on("touchstart",function(){
		now.row = 2;last.row=9; now.col = 1; pageMove(towards.down);
		$(".hint").show();
	})
	$(".page10").on("touchstart",function(){
		now.row = 2;last.row=10; now.col = 1; pageMove(towards.down);
		$(".hint").show();
	})
	$(".page11").on("touchstart",function(){
		now.row = 2;last.row=11; now.col = 1; pageMove(towards.down);
		$(".hint").show();
	})
	$(".page12").on("touchstart",function(){
		now.row = 2;last.row=12; now.col = 1; pageMove(towards.down);
		$(".hint").show();
	})
	$(".page13").on("touchstart",function(){
		now.row = 2;last.row=13; now.col = 1; pageMove(towards.down);
		$(".hint").show();
	})
	$(".p2_1 li:nth-child(6)").on("touchstart",function(){
		now.row = 8;last.row=2; now.col = 1; pageMove(towards.up);
		$(".hint").hide();
	})
	$(".p2_1 li:nth-child(7)").on("touchstart",function(){
		now.row = 11;last.row=2; now.col = 1; pageMove(towards.up);
		$(".hint").hide();
	})
	$(".p2_1 li:nth-child(8)").on("touchstart",function(){
		now.row = 13;last.row=2; now.col = 1; pageMove(towards.up);
		$(".hint").hide();
	})
	$(".p2_1 li:nth-child(9)").on("touchstart",function(){
		now.row = 12;last.row=2; now.col = 1; pageMove(towards.up);
		$(".hint").hide();
	}) 
	$(".p2_1 li:nth-child(10)").on("touchstart",function(){
		now.row = 10;last.row=2; now.col = 1; pageMove(towards.up);
		$(".hint").hide();
	}) 
	$(".p2_1 li:nth-child(12)").on("touchstart",function(){
		now.row = 9;last.row=2; now.col = 1; pageMove(towards.up);
		$(".hint").hide();
	})           
};
//页面跳转
function pageMove(tw){
var lastPage = ".page-"+last.row+"-"+last.col,
	nowPage = ".page-"+now.row+"-"+now.col;
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	setTimeout(function(){
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("div:not(.footer)").addClass("hide");
		$(nowPage).addClass('page-current');
		$(lastPage).removeClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("div:not(.footer)").removeClass("hide");
		if(now.row==2||now.row==4||now.row==5||now.row==11||now.row==12){
				var _width=$(".page-"+now.row+"-"+now.col).find("li:nth-child(1) img").width();
				$(".page-"+now.row+"-"+now.col+" .get_width").css({"width":_width});
		}
/*		else if(now.row==2){
			var _width=$(".page-"+now.row+"-"+now.col).find("li:nth-child(1) img").width();
			$(".page-"+now.row+"-"+now.col+" .get_width").css({"width":_width});
		}*/else if(now.row==3){
			var _width=$(".page-"+now.row+"-"+now.col).find("li:nth-child(1) img").width();
			$(".page-"+now.row+"-"+now.col+" .get_width").css({"width":_width});
			setTimeout(function(){
				$(".p5_1 li:nth-child(11)").removeClass("op1").addClass("scT");
			},5000)
		}
		/*else if(now.row==5){
			setTimeout(function(){
				$(".p4_1 li:last-child").removeClass().addClass("sc3");
			},7000)
		}else{
			$(".p4_1 li:last-child").removeClass("sc3").addClass("op1 ani12");
		}*/
		isAnimating = false;
	},300);
}

//js判断手机横竖屏判断
function orient() { 
	if (window.orientation == 90 || window.orientation == -90) { 
		$(".portrait").hide();
		$(".cover").show(); 
		$(".fe").hide();
    }
	else if (window.orientation == 0 || window.orientation == 180) { 
		$(".portrait").show();
		$(".cover").hide();
		$(".fe").show();
	}
}
	var timer;
	$(window).bind("orientationchange", function(){
		clearTimeout(timer);
		timer = setTimeout(orient, 300);
	});
orient();
