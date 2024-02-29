//your JS code here. If required.
let d1=document.getElementById("timer");


function display(){
    let date=new Date();
    // clockdisplay.innerText=Date();
    let d11=date.getDate();    //day
    let mon=date.getMonth();   //month
    
   
    let year=date.getFullYear();   //yrs
    
    
    let ms=date.getMilliseconds();   //ms
     
    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    // let h1=hour();
    d1.innerText=`${mss(mon)}/${mss(d11)}/${year}, ${hou(hour)}:${mss(min)}:${mss(sec)} ${am}`;
    clockdisplay.innerText=``;



    
}
let am="AM"
function hou(hour){
    if(hour>=12){
		am="PM";
        hour=hour%12;
        if(hour<10){
            return mss(hour);
        }
    }else{
        if(hour<10){
            return mss(hour);
        }
    }
    return hour;
}
function mss(ms){
    if(ms<10){
        ms="0"+ms;
    }
    return ms;
}
setInterval(display,150);