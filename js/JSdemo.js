function mod(one, two){
        result=one%two;
       
    return result;
}
document.write("The result is: "+mod(20,60));
var team1=97;
        var team2=98;
        if(team1>team2){
            document.write("Team one is winner");
        }
        else{
            document.write("Team 2 is winner");
        }
    
var d=new Date();
var time=d.getHours();
alert(time);
if(time <12){
    alert("Good Morning");
}
else if(time>=12 && time <=16){
    alert("Good afternoon")
}
else if(time>16 && time <=19){
    alert("Good Evening");
    
}
else{
    alert("Good Night");
}

var day="Monday";

switch(day){
    case "Monday":
        document.write("Today is Monday");
        break;
    case "Tuesday":
        document.write("Tuesday is good");
        break;
    case "Saturday":
        document.write("Weekend Mood is awesome");
        break;
    default:
        document.write("Undefined Day ");
        break;
        
        
        
}
var i=0;
document.write("<br/>");
flag=false;
while(i<=10){
    if(!flag){
    document.write(i);
    document.write("<br/>");
    i=i+2;
    }
    if(i==12){
        i=11;
        document.write(i);
        document.write("<br/>");
        flag=true;
    }
    if(flag){
        i=i-2;
        document.write(i);
        document.write("<br/>");
    }
    if(i==3)
        break;
    
}
for(a=0; a<=20;a=a+2){
    document.write(a);
    document.write("<hr/>")
}
var city="Chennai";
alert(city.toUpperCase());
var t="The climate is very cool";
alert(t.indexOf("very"));

var cities=["chennai", "bangalore", "gurgaon", "mumbai"];
alert(cities[2]);

/*i=11;
while(i>=3){
    document.write(i);
    document.write("<br/>");
    i=i-2;
}*/
/*var a=10;
var b=10;
var c=25;
if(a>b && a>c){
document.write("a is bigger");
}
else if(b>c && b>a){
        document.write("b is bigger");
        }
else if(c>a && c>b){
    document.write("c is bigger")
}
else{
    document.write("Some variable are equal");
}*/