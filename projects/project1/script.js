$("#num1").val(0);
$("#num2").val(0);
$("#num3").val(0);
$("#num1").click(function(){
    sum();
});
$("#num2").click(function(){
    sum();
});
$("#num3").click(function(){
    sum();
});
//var nb1 = document.getElementById("num1")
function sum() {
    var nb1= parseInt($("#num1").val())* 10;
    $("#output1").val(nb1);
    var nb2= parseInt($("#num2").val())* 20;
    $("#output2").val(nb2);
    var nb3= parseInt($("#num3").val()) * 30;
    $("#output3").val(nb3);
    $("#output").val(Number(nb1)+Number(nb2)+Number(nb3));
};