$("body").prepend("<div id='stars'></div><div id='stars2'></div><div id='stars3'></div>");

function jump(index) {
  $(".example li").eq(index).addClass("exampleLiAni");
  setTimeout(function() {
    $(".example li").eq(index).removeClass("exampleLiAni");
  }, 1200)
  $(".example_pop").show();
  console.log(index);
  $(".pop_inner .code").eq(index).show();
  $(".pop_inner .code").eq(index).siblings().hide();
}

function popClose() {
  $(".example_pop").hide();
}
$(document).scroll(function() {
  $(".back").show();
})
if (document.getElementById("time")) {
  window.onload = function() {
    setInterval(function() {
      var date = new Date();
      var year = date.getFullYear(); //获取当前年份
      var mon = date.getMonth() + 1; //获取当前月份
      var da = date.getDate(); //获取当前日
      var day = date.getDay(); //获取当前星期几
      var h = date.getHours(); //获取小时
      var m = date.getMinutes(); //获取分钟
      var s = date.getSeconds(); //获取秒
      var d = document.getElementById('time');
      d.innerHTML = year + '年' + mon + '月' + da + '日' + "," + '星期' + day + ',' + h + ':' + m + ':' + s;
    }, 1000)
  }
}
var div = document.getElementsByTagName("div"),
  num = 0,
  j = setInterval(function() {
    if (num < div.length) {
      div[num].style.opacity = 1;
      num++;
    } else {
      clearInterval(j);
    }
  }, 200);
//禁止右键和f12
// function click(e) {
//     if (document.all) {
//         if (event.button == 2 || event.button == 3) {
//             alert("你要干嘛");
//             oncontextmenu = 'return false';
//         }
//     }
//     if (document.layers) {
//         if (e.which == 3) {
//             oncontextmenu = 'return false';
//         }
//     }
// }
// if (document.layers) {
//     document.captureEvents(Event.MOUSEDOWN);
// }
// document.onmousedown = click;
// document.oncontextmenu = new Function("return false;")
// document.onkeydown = document.onkeyup = document.onkeypress = function() {
//     if (window.event.keyCode == 123) {
//         window.event.returnValue = false;
//         return (false);
//     }
// }