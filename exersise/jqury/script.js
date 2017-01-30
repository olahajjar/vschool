$(".yellow").hover(function() {
  $(".yellow").addClass("blue");
});
$(".yellow").mousedown(function(){
    $(this).addClass("red");
});
$(".yellow").dblclick(function(){
    $(".yellow").addClass("green");
});
$(".yellow").mouseup(function(){
    $(this).addClass("orange");
});
$(window).scroll(function(){
    $("span").addClass("orange1");
});