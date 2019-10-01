const clockContainer = document.querySelector('.js-clock'),
        //clock div
      clockTitle = document.querySelector("h1")
        //clock text

//dive         
function getTime(){
    const date = new Date();
    //date object
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds =  date.getSeconds();
    clockTitle.innerHTML=`${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}

//conquer
function init(){
    setInterval(getTime,1000);
    //initiate at 1sec intervals
}
init();