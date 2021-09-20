function GetRequest() {
    let url = decodeURI(location.search); //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for(let i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
let userId;
let userState;
function GetUserState() {
    $.ajax({
        url: "../totalCourse.json",
        data: {"userId": userId},
        dataType: "json",
        async: false,
        success: function (date){
            userState=date.userState.userState;
        }
    })
    return userState;
}