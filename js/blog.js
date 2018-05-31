$(function(){
	// var result = {
	// 	"status" : true,
	// 	"data" : {
	// 		"lists" : [
	// 			{
	// 				"id": "1",
	// 				"title": "131313",
	// 				"content": "qqqqqqqqqq",
	// 				"image": "./public/upload/img_1508636446641043.png",
	// 				"classify_id": "5",
	// 				"status": "1",
	// 				"createtime": "2017-10-21 10:38:57",
	// 				"updatetime": "2017-10-22 09:40:46",
	// 				"createdate": "2017/10/21",
	// 			},
	// 			{
	// 				"id": "1",
	// 				"title": "131313",
	// 				"content": "qqqqqqqqqq",
	// 				"image": "./public/upload/img_1508636446641043.png",
	// 				"classify_id": "5",
	// 				"status": "1",
	// 				"createtime": "2017-10-21 10:38:57",
	// 				"updatetime": "2017-10-22 09:40:46",
	// 				"createdate": "2017/10/21",
	// 			},
	// 			{
	// 				"id": "1",
	// 				"title": "131313",
	// 				"content": "qqqqqqqqqq",
	// 				"image": "./public/upload/img_1508636446641043.png",
	// 				"classify_id": "5",
	// 				"status": "1",
	// 				"createtime": "2017-10-21 10:38:57",
	// 				"updatetime": "2017-10-22 09:40:46",
	// 				"createdate": "2017/10/21",
	// 			},
	// 		],
	// 	}
	// };
	// var str = "";
	// 		for(var i=0;i<result.data.lists.length;i++){
	// 			str+='<li><time>'+result.data.lists[i].createdate+'</time><div class="timeicon"></div><div class="timelable"><h2><a href="javascrip:void(0)">'+result.data.lists[i].content+'</a></h2><p><span class="blogpic"><img src="./image/029.jpg"></span>'+result.data.lists[i].createdate+'</p><p><a class="readmore" href="javascrip:void(0)">阅读全文>></a><a class="classname" href="javascrip:void(0)">原创个人博客模板</a></p></div></li>'
	// 		}
	// 		$(".timeline").html(str)
	$.ajax({
		url:"http://192.168.199.249:8080/index.php?c=api&a=bloglist",
		type:"get",
		dataType:"json",		
		success:function(result){
			var str = "";
			for(var i=0;i<result.data.lists.length;i++){
				str+='<li><time><span>'+result.data.lists[i].month+'</span><span>'+result.data.lists[i].year+'</span></time><div class="timeicon"></div><div class="timelable"><h2><a href="javascrip:void(0)">'+result.data.lists[i].title+'</a></h2><p><span class="blogpic"><img src="./image/029.jpg"></span>'+result.data.lists[i].content+'</p><p><a class="readmore" href="./more.html?id='+result.data.lists[i].id+'">阅读全文>></a><a class="classname" href="javascrip:void(0)">原创个人博客模板</a></p></div></li>'
			}
			$(".timeline").html(str)
		},	
		error:function(result){}
	})
})