$(document).ready(function(){
                  loadData();
$("#submit").click(addData);
   deleData();
                  });


function loadData(){
    $.ajax({
        url:"http://api.vschool.io/olahajjar/todo",
        type:"GET",
        success:function(data){
            $(".output").html("");
            for(var i=0;i<data.length;i++){
                $(".output").append("<li id='"+data[i]._id +"' >"+data[i].title+"<button id='"+data[i]._id +"'  onclick='deleData(this.id);'>delete</button></li>");
            }
        }
    });
}
function addData(){
    var title =$("#title").val();
    var data = {
        title: title
              };
     $.ajax({
        url:"http://api.vschool.io/olahajjar/todo",
        type:"POST",
         data:data,
        success:function(){
            loadData();
        }
});
}
function deleData(id){
    //var id =$(this).attr("id");
     $.ajax({
        url:"http://api.vschool.io/olahajjar/todo/" + id,
        type:"DELETE",
        success:function(){
            loadData();
        }
});
}

            