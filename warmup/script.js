var students =[
    {name : "bob",
     phone :34668790,
     grades:[100,75,60,70,80],
resulte:"" },
    {name : "ali",
     phone :5678904,
     grades:[40,75,60,70,80],
       resulte:""  },
    {name : "emad",
     phone :564567,
     grades:[40,67,35,45,40],
       resulte:""  },
    {name : "ahmad",
     phone :56456723,
     grades:[79,67,80,70,80],
       resulte:""  },
    {name : "khaled",
     phone :564567,
     grades:[100,67,80,70,80],
       resulte:""  }    
];
var arr =[];
for(var i=0;i<students.length;i++){
    var sum =0;
for(var j=0;j< students[i].grades.length;j++){
    sum=sum + students[i].grades[j];
    }
 var ave = sum /students[i].grades.length;
 if(ave > 60){
     students[i].resulte="pass";
 }else{
     students[i].resulte="fail";
 }
  arr.push({name: students[i].name, sum: sum , resulte:students[i].resulte});
}
function sort(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
      if(arr[i].sum < arr[j].sum) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(sort(arr));