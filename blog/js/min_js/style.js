function prev(){arrowClick>=0&&(arrowClick--,arrowClick==-1&&(arrowClick=2),$("section .group").eq(arrowClick).show(),$("section .group").eq(arrowClick).siblings().hide())}function next(){arrowClick<=$(".group").length-1&&(arrowClick++,arrowClick==$(".group").length&&(arrowClick=0),$("section .group").eq(arrowClick).show(),$("section .group").eq(arrowClick).siblings().hide()),console.log(arrowClick)}function jump(e){$(".example li").eq(e).addClass("exampleLiAni"),setTimeout(function(){$(".example li").eq(e).removeClass("exampleLiAni")},1200),$(".example_pop").show(),console.log(e),$(".pop_inner .code").eq(e).show(),$(".pop_inner .code").eq(e).siblings().hide()}function popClose(){$(".example_pop").hide()}var arrowClick=0;$(document).scroll(function(){$(".back").show()}),document.getElementById("time")&&(window.onload=function(){setInterval(function(){var e=new Date,o=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),t=e.getDay(),i=e.getHours(),l=e.getMinutes(),a=e.getSeconds();document.getElementById("time").innerHTML=o+"年"+r+"月"+n+"日,星期"+t+","+i+":"+l+":"+a},1e3)});var right=document.getElementsByClassName("right");if(right.length>0)for(var a=right[0].getElementsByTagName("a"),i=0;i<a.length;i++)a[i].onclick=function(e){return function(){alert(e+1)}}(i);for(var show=document.getElementsByClassName("show"),run=document.getElementsByClassName("showRun"),arr=[9,9,111,2,3,4,4,5,7],sortedArr=arr.sort(),results=[],i=0;i<arr.length;i++)sortedArr[i+1]!=sortedArr[i]&&results.push(sortedArr[i]);for(var brr=[1,11,2,22,33,4,3,44,5],brrSort=brr.sort(function(e,o){return e-o}),showTotal={0:results,1:brrSort},i=0;i<run.length;i++)run[i].onclick=function(e){return function(){show[e].innerHTML="["+showTotal[e]+"]"}}(i);var bool=1,fBool=!bool,ffBool=!!bool;$(".runBtn a").eq(0).click(function(){$(".runBtn span").eq(0).html(""+fBool)}),$(".runBtn a").eq(1).click(function(){$(".runBtn span").eq(1).html(""+ffBool)});