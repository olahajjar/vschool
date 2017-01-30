var people = [] ;

var render = function() {
  $("#output").html("");
  people.sort(function(a, b) {
    return b.scour - a.scour;
  });
  for(var i = 0; i < people.length; i++) {
  
        $("#output").append("<tr><td>"+people[i].name+"</td><td>" + people[i].game+"</td><td>"+people[i].date+"</td><td>"+people[i].scour+"</td><td>"+people[i].message+"</td></tr>" );
   };
}

$("#submit").click(function() {
     var newMsg="";
    
      if($("#chk").is(":checked"))
       { newMsg="wow";
       }else
    { newMsg="";}
 people.push({
      name: $("#name").val(),
      game:$("#game").val(),
      scour: $("#scour").val(),
      date:$("#date").val(),
     
     message: newMsg
  });
   
    render();
     $("#name").val('');
      $("#game").val('');
      $("#scour").val('');
      $("#date").val('');
    
});

