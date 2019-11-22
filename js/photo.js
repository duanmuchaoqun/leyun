//显示图片
var imgHigh = $(".img-avatar img").width();
$(".img-avatar input").height(imgHigh);

function showPicture1(value) {

    if (this.value != '') {
        //alert('选中');
        $(".s1,#myPic2,#file2").css("display", "block");
        // $("#file1").css("display", "none");
    } else {
        alert(this.value);
    }
    var docObj = document.getElementById("file1");

    var imgObjPreview = document.getElementById("myPic1");
    if (docObj.files && docObj.files[0]) {
        //火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '30%';

        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //imgObjPreview.src = docObj.files[0].getAsDataURL();

        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else {
        //IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag");
        //必须设置初始大小
        localImagId.style.width = "30%";
        localImagId.style.height = "";
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try {
            localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch (e) {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

function showPicture2(value) {
    if (this.value != '') {
        //alert('选中');
        $(".s1").css("display", "none");
        // $("#file2").css("display", "none");
        $(".s2").css("display", "block");
        $("#myPic3").css("display", "block");
        $("#file3").css("display", "block");
    } else {
        alert(this.value);
    }
    var docObj = document.getElementById("file2");

    var imgObjPreview = document.getElementById("myPic2");
    if (docObj.files && docObj.files[0]) {
        //火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '30%';
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //imgObjPreview.src = docObj.files[0].getAsDataURL();

        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else {
        //IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag");
        //必须设置初始大小
        localImagId.style.width = "30%";
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try {
            localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch (e) {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

function showPicture3(value) {
    if (this.value != '') {
        //alert('选中');
        $(".s2").css("display", "none");
        // $("#file3").css("display", "none");
        $(".s3").css("display", "block");
        $("#myPic4").css("display", "block");
        $("#file4").css("display", "block");
    } else {
        alert(this.value);
    }
    var docObj = document.getElementById("file3");

    var imgObjPreview = document.getElementById("myPic3");
    if (docObj.files && docObj.files[0]) {
        //火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '30%';
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //imgObjPreview.src = docObj.files[0].getAsDataURL();

        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else {
        //IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag");
        //必须设置初始大小
        localImagId.style.width = "30%";
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try {
            localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch (e) {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

function showPicture4(value) {
    if (this.value != '') {
        //alert('选中');
        $(".s3").css("display", "none");
        $("#file4").css("display", "none");
        $(".s4").css("display", "block");
        $("#myPic5").css("display", "block");
        $("#file5").css("display", "block");
    } else {
        alert(this.value);
    }
    var docObj = document.getElementById("file4");

    var imgObjPreview = document.getElementById("myPic4");
    if (docObj.files && docObj.files[0]) {
        //火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '30%';
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //imgObjPreview.src = docObj.files[0].getAsDataURL();

        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else {
        //IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag");
        //必须设置初始大小
        localImagId.style.width = "30%";
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try {
            localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch (e) {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

function showPicture5(value) {
    if (this.value != '') {
        //alert('选中');
        $(".s4").css("display", "none");
        $("#file5").css("display", "none");
        $(".s5").css("display", "block");
        $("#myPic6").css("display", "block");
        $("#file6").css("display", "block");
    } else {
        alert(this.value);
    }
    var docObj = document.getElementById("file5");

    var imgObjPreview = document.getElementById("myPic5");
    if (docObj.files && docObj.files[0]) {
        //火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '30%';
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //imgObjPreview.src = docObj.files[0].getAsDataURL();

        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else {
        //IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag");
        //必须设置初始大小
        localImagId.style.width = "30%";
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try {
            localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch (e) {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

function showPicture6(value) {
    if (this.value != '') {
        //alert('选中');
        $(".s5").css("display", "none");
        $("#file6").css("display", "none");
        $(".s6").css("display", "block");
        $("#myPic7").css("display", "block");
        $("#file7").css("display", "block");
    } else {
        alert(this.value);
    }
    var docObj = document.getElementById("file6");

    var imgObjPreview = document.getElementById("myPic6");
    if (docObj.files && docObj.files[0]) {
        //火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '30%';
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //imgObjPreview.src = docObj.files[0].getAsDataURL();

        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else {
        //IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag");
        //必须设置初始大小
        localImagId.style.width = "30%";
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try {
            localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch (e) {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

function showPicture7(value) {
    if (this.value != '') {
        //alert('选中');
        $(".s6").css("display", "none");
        $("#file7").css("display", "none");
        $(".s7").css("display", "block");
        $("#myPic8").css("display", "block");
        $("#file8").css("display", "block");
    } else {
        alert(this.value);
    }
    var docObj = document.getElementById("file7");

    var imgObjPreview = document.getElementById("myPic7");
    if (docObj.files && docObj.files[0]) {
        //火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '30%';
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //imgObjPreview.src = docObj.files[0].getAsDataURL();

        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else {
        //IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag");
        //必须设置初始大小
        localImagId.style.width = "30%";
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try {
            localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch (e) {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

function showPicture8(value) {
    if (this.value != '') {
        //alert('选中');
        $(".s7").css("display", "none");
        $("#file8").css("display", "none");
        $(".s8").css("display", "block");
        $("#myPic9").css("display", "block");
        $("#file9").css("display", "block");
    } else {
        alert(this.value);
    }
    var docObj = document.getElementById("file8");

    var imgObjPreview = document.getElementById("myPic8");
    if (docObj.files && docObj.files[0]) {
        //火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '30%';
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //imgObjPreview.src = docObj.files[0].getAsDataURL();

        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else {
        //IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag");
        //必须设置初始大小
        localImagId.style.width = "30%";
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try {
            localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch (e) {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

function showPicture9(value) {
    if (this.value != '') {
        //alert('选中');
        $(".s8").css("display", "none");
        $("#file9").css("display", "none");
        $(".s9").css("display", "block");
        $("#myPic10").css("display", "block");
        $("#file10").css("display", "block");
    } else {
        alert(this.value);
    }
    var docObj = document.getElementById("file9");

    var imgObjPreview = document.getElementById("myPic9");
    if (docObj.files && docObj.files[0]) {
        //火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '30%';
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //imgObjPreview.src = docObj.files[0].getAsDataURL();

        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else {
        //IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag");
        //必须设置初始大小
        localImagId.style.width = "30%";
        var imgHigh = $(".img-avatar img").width();
        $(".img-avatar img").height(imgHigh);
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try {
            localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch (e) {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}