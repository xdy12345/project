
    //上传文件
    function doUpload(){
    var val = $("input[name='up']").val();
    if (val==null||val==""){
    alert("请先选择视频！")
}
    var upfile = new FormData($("#uploadForm")[0]);
    // var type = $("#img").val().substring($("#img").val().lastIndexOf("."));
    // if(type==".jpg"||type==".jpeg"||type==".JPG"||type==".JPEG"||type==".png"||type==".PNG"){
    //
    // }else{
    //     alert("上传图片格式必须为jpg、jpeg或者png");
    //     return false;
    // }
    $.ajax({
    url : "http://localhost:8080/testUp",
    type: 'POST',
    data: upfile,
    // fileElementId: 'upfile',
    contentType: false,
    processData: false,
    xhr : function(result) {
    var xhr = new XMLHttpRequest();
    //使用XMLHttpRequest.upload监听上传过程，注册progress事件，打印回调函数中的event事件
    xhr.upload.addEventListener('progress', function (e) {
    console.log(e);
    //loaded代表上传了多少
    //total代表总数为多少
    var progressRate = (e.loaded / e.total) * 100 + '%';

    //通过设置进度条的宽度达到效果
    $('.progress > div').css('width', progressRate);
})
    return xhr;
},
    success: function(result){
    var s = JSON.stringify(result);
    alert("上传成功视频所在服务器服务器的地址"+s)
    // console.log("上传成功~~");

},
    error : function(data) {
    console.log(data)
    alert("上传失败~~");
}
});
}
