var student = [
    { name:"omar", grade:100 } ,
    {name:"aly", grade:40} ,
    {name:"ola", grade:60},
    {name:"alaa", grade:75},
    {name:"lavia", grade:80}
    ];
for(var i=0;i<student.length;i++){
    if(student[i].grade<60){
        console.log("fall  "+student[i].name);
    }else if(student[i].grade>=90 && student[i].grade<=100){
        console.log("excelent  "+student[i].name);
        
    }else if(student[i].grade>=70 && student[i].grade<80){
        console.log("v.good  "+student[i].name);
        
    }else if(student[i].grade>70 && student[i].grade<=75){
        console.log("good  "+student[i].name);
        
    }else if(student[i].grade>=60 && student[i].grade<=69){
        console.log("pass  "+student[i].name);
        
    }
}