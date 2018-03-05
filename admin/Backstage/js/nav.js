
if(sessionStorage.getItem("landingSuccess") == 'true'){ 
}else{
    window.location.href="../login.html"
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
}

var myNum=GetQueryString("number");
var myId=GetQueryString("id");
sessionStorage.setItem("id",myId)
sessionStorage.setItem("number",myNum)
var navs = [];
if(myNum !=null && myId !=null && myNum.length>0 && myId.length>0) {
    if (myNum == 2) {     //管理员
        navs = [{
            "title": "员工任务",
            "icon": "icon-text",
            "href": "page/links/linksList.html",
            "spread": false
        }, {
            "title": "员工列表",
            "icon": "icon-text",
            "href": "page/news/newsList.html",
            "spread": false
        }];
    } else if (myNum == 1) {
        navs = [{
            "title": "员工任务",
            "icon": "icon-text",
            "href": "page/links/linksList.html",
            "spread": false
        }, {
            "title": "接单任务",
            "icon": "&#xe61c;",
            "href": "page/orders/orders.html",
            "spread": false
        }];
    }

}else {
    window.location.href="../login.html";
}

