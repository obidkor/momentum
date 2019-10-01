const form = document.querySelector(".js-form"),//form
      input = document.querySelector("input"),//input
      greeting = document.querySelector(".js-greetings");
      //인사 tag

const user_local = "currentUser", //사용자 저장
        showing_Class = "showing";//show css


 
function saveName(name){
    localStorage.setItem(user_local,name);
}

function handleSubmit(){
    //root 이벤트 막기
    event.preventDefault();
    const currentValue = input.value;
    printGreeting(currentValue);
    saveName(currentValue);
}


function askName(){
    form.classList.add(showing_Class);//폼 나타나
    form.addEventListener("submit",handleSubmit);//submit이벤트
}
function printGreeting(text){
    form.classList.remove(showing_Class)//form지우고(기본이 none)
    greeting.classList.add(showing_Class)//인사 태그 show
    greeting.innerHTML=`Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(user_local);
    if(currentUser===null){
        //유저가 저장되지 않은경우
        askName();
    }else{
        //저장된 경우
        printGreeting(currentUser)
    }
}

function init(){
    loadName();
}

init();