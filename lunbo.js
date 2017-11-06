/**
 * Created by 崔显进 on 2016/12/24.
 */
//document.write("引入文件")

//购物车按钮
function a() {
    var message = confirm("是否进入购物车!");
    if (message == true) {
        //alert("欢迎你");
    }
    else {
        //alert("退出");
    }
}

//焦点轮播图
/*function showButtons() {
 var buttons = document.getElementById('buttons').getElementsByTagName('span');

 buttons[index - 1].className = 'on';
 }*/

var index = 1;
var timer;

function p() {                    //左箭头
    var container = document.getElementById("container");
    var list = document.getElementById("list");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var newLeft = parseInt(list.style.left) + 790;
    var time = 790;              //位移总时间
    var interval = 79 / 2;       //位移间隔时间
    var speed = 790 / (790 / 79 / 2);//每次位移量

    function go() {
        if (speed > 0 && parseInt(list.style.left) < newLeft) {
            list.style.left = parseInt(list.style.left) + speed + 'px';
            setTimeout(go, interval);   //一个间隔后判断是否图片到位，实现动画关键
        }
        else {
            list.style.left = newLeft + 'px';
            if (newLeft > -790) {
                list.style.left = -6320 + 'px';
            }
        }
    }

//按钮切换
    function showButton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    if (index == 1) {
        index = 8;
    }
    else {
        index -= 1;
    }
    showButton();
    go();
}

function n() {                   //右箭头
    var container = document.getElementById("container");
    var list = document.getElementById("list");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var newLeft = parseInt(list.style.left) - 790;
    var time = 790;              //位移总时间
    var interval = 79 / 2;       //位移间隔时间
    var speed = -790 / (790 / 79 / 2);//每次位移量

    function go() {
        if (speed < 0 && parseInt(list.style.left) > newLeft) {
            list.style.left = parseInt(list.style.left) + speed + 'px';
            setTimeout(go, interval);   //一个间隔后判断是否图片到位，实现动画关键
        }
        else {
            list.style.left = newLeft + 'px';
            if (newLeft < -6320) {
                list.style.left = -790 + 'px';
            }
        }
    }

//按钮切换
    function showButton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    if (index == 8) {
        index = 1;
    }
    else {
        index += 1;
    }
    showButton();
    go();
}

//自动轮播
function play() {
    timer = setInterval(function () {
        n();
    }, 3000)
}

function stop() {
    clearInterval(timer);
}

//鼠标移到按钮上切换
function loop() {
    function animate(offset) {
        var container = document.getElementById("container");
        var list = document.getElementById("list");
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        if (newLeft > -790) {
            list.style.left = -6320 + 'px';
        }
        if (newLeft < -6320) {
            list.style.left = -790 + 'px';
        }
    }

    function b() {
        var myIndex = parseInt(this.getAttribute("index"));
        var offset = -790 * (myIndex - index);
        animate(offset);
        index = myIndex;
    }
    b();
}


//登陆处理
function p1() {
    document.getElementById("q1").innerHTML = "";
    document.getElementById("q2").innerHTML = "";
    var name = document.getElementById("name").value;
    var pw = document.getElementById("pw").value;

    if (name == "") {
        document.getElementById("q1").innerHTML = "用户名不能为空！";
        onOver();
        return;
    }
    if (name == "admin") {
        if (pw == "123") {
            window.location.href = "1.html"
        }
        else {
            if (pw == "") {
                document.getElementById("q2").innerHTML = "请输入密码！";
            }
            else {
                document.getElementById("q2").innerHTML = "密码错误！";
            }
        }
    }
    else {
        document.getElementById("q1").innerHTML = "用户名不正确！";
    }
}

function onOver() {
    document.all.name.style.background = "#EEEE00 ";
}
function onOut() {
    document.all.name.style.background = "#fff";
}
function onOver1() {
    document.all.name.style.background = "#fff";
    document.all.pw.style.background = "#EEEE00 ";
}
function onOut1() {
    document.all.pw.style.background = "#fff";
}
