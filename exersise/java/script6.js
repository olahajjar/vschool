var arr =["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];
    var attemCall = function(name,call,dontCall,sendText){
    for (var i=0 ;i<arr.length-1;i++){
       var count =0;
       var name =arr[i];
       if (arr[i].toLowerCase.charAt==="a"){
           count++;
           if(count>1){
               sendText(name);
           }
       }
        else if(arr[i].length%2===0){
            call(name);
            
        }else if(arr[i].length%2!=0){
            dontCall(name);
    }
 }
    }
        function call( name )  {
        console.log( "You call   " + name );
    }
    function dontCall(name){
        console.log( "You do not call " + name );
    }
function sendText(name){
        console.log( "You send massege to   " + name );
    }
attemCall(arr,call,dontCall,sendText);
    