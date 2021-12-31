'use strict';
//let list = [];
let i;
let pushbutton = document.querySelector("#pushbutton");
pushbutton.addEventListener("click", push);
//inputbox = document.getElementById('work');
//inputbox.addEventListener("onKeypress", enter);

function push() {
    i=0;
    const work = document.getElementById('work').value + " "; //인풋태그 값+공백 넣음
    //list.push(work); //리스트에 추가    
    const button = document.createElement("button");  //button태그 생성
    //button.onclick = function(){ deleteNode();};
    //button.setAttribute('onclick',deleteNode); //버튼 클릭 이벤트 지정 작동x
    button.addEventListener("click", deleteNode); //버튼눌렀을때 함수
    //button.setAttribute('id',i) //버튼에 id 설정
    const xnode = document.createTextNode('x'); //버튼에 넣은 x표시노드 추가
    button.appendChild(xnode); //버튼에 자식노드 추가
    const span = document.createElement("sapn"); //span태그 생성
    span.setAttribute('id', i) //span에 id 설정
    const textNode = document.createTextNode(work); //인풋값을 넣은 노드 생성
    span.appendChild(textNode); //span의 자식노드로 추가
    const li = document.createElement("li");  //li태그 생성
    //li.setAttribute('id',i+"li"); //li태그에 id속성 부여  
    li.appendChild(span); //li의 자식노드로 추가
    li.appendChild(button); //li에 버튼 추가
    document.getElementById('todolist').appendChild(li); //li를 ul의 자식노드로 추가
    i++; //인덱스값 증가
    document.getElementById('work').value = null; //왜 input값 안없어지는지 모르겠음
    //document.querySelector("#work").value = "";
}

function test() {
    window.onbeforeunload = function (e) {
        return 0;
    };
}

// function enter(){
//     if(this.event.keyCode==13) {push();}
// }

function deleteNode() {
    this.parentNode.remove(); //부모노드 삭제 li
    // let id = this.getAttribute("id"); //버튼의 id i가져옴
    // id = id+"li"; //li의 id i li 만들어서
    // const li = document.getElementById(id); //해당 id인 Element가져옴
    // li.remove();
}
if (i >= 0) {
    for (let j = 0; j <= i; j++) {
        let check = document.getElementById(j);
        check.addEventListener('click',event =>{
            if(event.target.tagNmae === 'LI'){
                event.target.classList.toggle('checked');
            }
        });
    }
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
//새로고침 해결 방안 https://kkh0977.tistory.com/867
//1. 새로고침을 아예 막는다. 로 해결
//2. SessionStorage  or  localstorage사용
//list를 쿠키에 저장해서 불러오려 했는데 실패a
