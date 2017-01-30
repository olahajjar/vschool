$("#submit").click(function(){
    console.log("clicked");
        var item=$("#item").val();
    console.log(item);
    $(".output").append("<li id="+item+">"+item+"<button id='"+item+"'onclick='deleteItme(this.id)'>delete</button></li>");
});


function deleteItme(item){
    
    $('#'+item).remove();
    
}