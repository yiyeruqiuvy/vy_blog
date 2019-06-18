window.onload=function(){
	// carousel
		var slideshowRecommend=document.querySelector("#slideshowRecommend");
		var slideshowImg=document.querySelector(".slideshowImg");
		var slideshowNavType=document.querySelector(".slideshowNavType").getElementsByTagName("span");
		var slideshowHeadlineUl=document.querySelector(".slideshowHeadlineUl");
		var time;
		function move(offset) {
			var newLeft=parseInt(slideshowImg.style.left)+offset;
				// slideshowImg.css.left=newLeft+"px";
            var newLeftUl=parseInt(slideshowHeadlineUl.style.left)+offset;
			slideshowHeadlineUl.style.left=newLeftUl+"px";
			function tmove(){
               var weiyizongshijian=270;
    		   var weiyishijianjiange=30;
    		   var v=offset/(weiyizongshijian/weiyishijianjiange);
    		   if ((v>0&&parseInt(slideshowImg.style.left)<newLeft)||(v<0&&parseInt(slideshowImg.style.left)>newLeft)){
	    		   setTimeout(tmove,weiyishijianjiange);
	    		   slideshowImg.style.left=parseInt(slideshowImg.style.left)+v+"px";
	    		   }
    		   else{
		            slideshowImg.style.left= newLeft+'px';
		            if ( newLeft > -270) {
		              wrap.style.left= -1080+'px';
		             }
		            if ( newLeft < -1080) {
		              wrap.style.left= 270+'px';
		             }
		            }

			}
	    	tmove();
		}
for (var i = 0; i <5; i++) {
			slideshowNavType[i].onmouseover=function(){
				if(this.getAttribute("class")!="sI"){
					this.style.background="url(../../static/home-img/sI_1.png)no-repeat";
				}
				else{
					this.style.background="";
				}
			}
           	slideshowNavType[i].onmouseout=function(){
				if(this.getAttribute("class")!="sI"){
					this.style.background="";
				}
				else{
					this.style.background="";
				}
			}
			slideshowNavType[i].onclick=function(){
			var ms=this.getAttribute("name")*(-270)-parseInt(slideshowImg.style.left);
			move(ms);
			cleanUl();
			 this.style.background="";
			slideshowNavType[this.getAttribute("name")-1].className="sI";
			}
}

function cleanUl(){
	for (var i = 0; i < slideshowNavType.length; i++) {
		if(slideshowNavType[i].className=="sI"){
			slideshowNavType[i].className="";
		}
	}
}
function changeits(c){
		switch(c){
			case 0:
			return 0;
			case -270:
			return 1;
			case -540:
			return 2;
			case -810:
			return 3;
			case -1080:
			return 4;
			case -1350:
			return 5;
		}
}
function autplay(){
	time=setInterval(function(){
	cleanUl();
	if (parseInt(slideshowHeadlineUl.style.left)<=-1350){
				slideshowHeadlineUl.style.left=0+"px";
			}
	if(parseInt(slideshowImg.style.left)<=-1350){
				 slideshowImg.style.left=0+"px";
				}
	slideshowNavType[changeits(parseInt(slideshowImg.style.left))].className="sI";
	move(-270);

},3000);}
function stop(){
		 clearInterval(time);
				 }
autplay();
slideshowRecommend.onmouseover=stop;
slideshowRecommend.onmouseout=autplay;
}
// more的隐藏
var more=document.querySelector(".more");
var slideshowImgfp=document.querySelector("#slideshowImg");
slideshowImgfp.onmouseover=function(){
	more.style.display="inline-block";
}
slideshowImgfp.onmouseout=function(){
	more.style.display="none";
 }
//headImg隐藏
var headImg=document.querySelector(".headImg");
var personalCenter=document.querySelector(".personalCenter");
headImg.onmouseover=function(){
	personalCenter.style.display="inline";
	personalCenter.style.top="41px";
	headImg.style.width="60px";
	headImg.style.height="60px";
	headImg.style.top="15px";
}
headImg.onmouseout=function(){
	personalCenter.style.display="none";
	personalCenter.style.top="41px";
	headImg.style.width="30px";
	headImg.style.height="30px";
	headImg.style.top="";
}
personalCenter.onmouseover=function(){
	personalCenter.style.display="inline";
	personalCenter.style.top="41px";
	headImg.style.width="60px";
	headImg.style.height="60px";
	headImg.style.top="15px";
}
personalCenter.onmouseout=function(){
	personalCenter.style.display="none";
	personalCenter.style.top="41px";
	headImg.style.width="30px";
	headImg.style.height="30px";
	headImg.style.top="";
}