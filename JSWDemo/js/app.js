/**
 * Created by Administrator on 2016/11/14.
 */
window.onload = function () {
    imgLocation("container", "box");
    //数据源
    var imgData = {"data": [{"src": "2.jpg"}, {"src": "4.jpg"}, {"src": "5.jpg"}, {"src": "6.jpg"}, {"src": "8.jpg"}]};
    window.onscroll = function () {

        if (checkFlag()) {
            //动态的creat相应的元素，来实现加载更多图片的功能
            var cparent = document.getElementById("container");
            for (var i = 0; i < imgData.data.length; i++) {
                var ccontent = document.createElement("div");
                ccontent.className = "box";
                cparent.appendChild(ccontent);
                var box_img = document.createElement("div");
                box_img.className = "box_img";
                ccontent.appendChild(box_img);
                var img = document.createElement("img");
                img.src = "img/" + imgData.data[i].src;
                box_img.appendChild(img);
            }
            //此时运行在滑动的时候会有重叠的效果，重新调一下imgLocation方法。
            imgLocation("container", "box");
        }

    }
}

//判断是否可以加载
function checkFlag() {
    var cparent = document.getElementById("container");
    var ccontent = getChildElement(cparent, "box");
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    console.log(lastContentHeight);
    //未显示被隐藏掉的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //console.log(scrollTop);
    //当前页面的高度
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    console.log("最后一条数据的高度：" + lastContentHeight + "未显示的高度：" + scrollTop + "当前页面的高度：" + pageHeight);
    if (lastContentHeight < scrollTop + pageHeight) {
        //当总共的高度<未显示的高度+当前页面的高度的时候,返回true允许加载
        return true;
    }
}

function imgLocation(parent, content) {
    //将parent下所有的content全部取出来
    //cparent是container
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, content);
    //取出第一条图片的宽
    var imgWidth = ccontent[0].offsetWidth;
    //得到浏览器的宽，宽屏下，小编的宽是1349
    var clientWidth = document.documentElement.clientWidth;
    //浏览器的宽度除以图片的宽，得到显示的列数
    var num = Math.floor(clientWidth / imgWidth);
    //动态的设置style的宽，左右居中，上下自适应
    cparent.style.cssText = "width:" + imgWidth * num + "px;margin: 0px auto";

    var BoxHeightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < num) {
            BoxHeightArr[i] = ccontent[i].offsetHeight;
            //console.log(BoxHeightArr[i]);
        } else {
            //取出BoxHeightArr中最小高度
            var minHeight = Math.min.apply(null, BoxHeightArr);
            //得到BoxHeightArr数组中，最小高度所在的位置
            var minIndex = getminheightLocation(BoxHeightArr, minHeight);
            //设置相应的style，包括句对位置，距离上和左边的距离
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minHeight + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
            //此时的高度 = 最小高度+图片的高度
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
        }
    }
}

//取出BoxHeightArr数组中最小的高度
function getminheightLocation(BoxHeightArr, minHeight) {
    for (var i in BoxHeightArr) {
        if (BoxHeightArr[i] == minHeight) {
            return i;
        }
    }
}


// 得到container 这个父布局中类名是 box的div，返回值是一个数组。
function getChildElement(parent, content) {
    var contentArr = [];
    //取出container中className为box的标签，为一个数组 ，allContent的大小是10
    var allContent = parent.getElementsByClassName(content);
    for (var i = 0; i < allContent.length; i++) {
        if (allContent[i].className = content) {
            contentArr.push(allContent[i]);
        }
    }
    //contentArr的大小也是10
    return contentArr;
}