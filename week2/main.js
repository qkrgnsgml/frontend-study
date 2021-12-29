'use strict';
let list = [];
let i =0;
function push(){
    const work = document.getElementById('work').value;
    list.push(work);
    const li = document.createElement("li");
    li.setAttribute('id',i);
    const textNode = document.createTextNode(work);
    li.appendChild(textNode);
    document.getElementById('todolist').appendChild(li);
    i++;
}

// const input = document.querySelector('input');
// input.addEventListener('keydown', enterWork);
// function enterWork () {
// if (event.keyCode === 13) {
// push();
// }
// }

//ul추가 참고 https://hianna.tistory.com/504
//엔터키 해결 https://haenny.tistory.com/80 //1번으로 안돼서 2번으로 수행
//새로고침 해결 방안 1. 새로고침을 아예 막는다. 2. 새로고침 후 이벤트 실행
