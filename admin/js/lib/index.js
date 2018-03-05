if(sessionStorage.getItem("landingSuccess") == 'true'){
		layer.msg('登录')
}else{
	layer.msg('未登录');
	window.location.href="../../../login.html"
}
