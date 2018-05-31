$(function(){
	$.ajax({
		url:"http://192.168.199.249:8080/index.php?c=api&a=info",
		type:"get",
		dataType:"json",
		data:{
			id:"2",
		},
		success:function(result){
			var ulStr = '<h4 class="a-title"><span>'+result.data.info.createdate+'</span>'+result.data.info.title+'</h4><p class="newsnav">您现在的位置是:<a href="javascrip:void(0)">首页</a>&nbsp;>&nbsp;<a href="javascrip:void(0)">模板分享</a>&nbsp;>&nbsp;<a href="javascrip:void(0)">个人博客模板</a></p><p>'+result.data.info.content+'</p><p><img src="./image/1fbd.jpg"></p><p>'+result.data.info.content+'</p><p class="mark"><span><a href="javascrip:void(0)">帝国cms模板组下载</a></span><a href="javascrip:void(0)"><span>《如何使用帝国模板组?》</span></a></p><p>'+result.data.info.content+'</p><p><img src="./image/3580d.png"></p><p>&nbsp;</p><p><img src="./image/f3d31.png"></p><p><strong>静态页面</strong>请直接点击下面的蓝色按钮</p><p>&nbsp;</p>'
			$(".abo>ul").html(ulStr)
			var relStr = "";
			for(var i=0;i<result.data.relationBlog.length;i++){
				relStr='<li><a href="javascrip:void(0)">'+result.data.relationBlog[i].content+'</a></li>'
			}
			$(".otherlink>ul").html(relStr)
			var comStr = "";
			for(var j=0;j<result.data.commentList.length;j++){
				comStr='<div class="block-cont"><div class="cont-head clearfix"><img src="./image/fac.jpg"></div><div class="cont-msg"><div class="msg-wrap"><div class="wrap-user"><span class="user-time">'+result.data.commentList[j].createtime+'</span><span class="nickname"><a href="javascrip:void(0)">'+result.data.commentList[j].author.name+'</a></span><span class="user-address">[北京市网友]</span></div><div class="wrap-issue"><p>'+result.data.commentList[j].content+'</p></div><div class="btns-bar"><div class="action-click"><span class="click-replay"><a href="javascrip:void(0)">回复</a></span><span class="click-ding"><a href="javascrip:void(0)"><i class="icon-ding-bg"></i><em class="icon-name-bg">2</em></a></span><span class="click-cai"><a href="javascrip:void(0)"><i class="icon-cai-bg"></i><em class="icon-name-bg">1</em></a></span><span class="click-prop"><span class="prop-span"></span></span></div></div></div></div></div>'
			}
			$(".new-list").html(comStr)
		},	
		error:function(result){}	
	})
})