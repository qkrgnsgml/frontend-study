'use strict';
let list = [];

let i = 0;
let pushbutton = document.querySelector("#listform");
pushbutton.addEventListener("submit", push);
//inputbox = document.getElementById('work');
//inputbox.addEventListener("onKeypress", enter);
//var reset = document.getElementById("resetButton");
//reset.addEventListener('click',localStorage.clear());



 if(localStorage.getItem('list')!=null){
     let savelist = localStorage.getItem('list');
     let savearray = savelist.split(',');
     list=savearray;
     console.log(list);
     for(let j=0; j<savearray.length; j++){
         makeList(savearray[j]);
     }
 }

function push(event) {
    //event로 value가져와서 밑에 쓰기               dd
    // push 함수 간단하게                           dd
    // LI 취소선 처리                               dd               
    //로컬 스토리지로 새로고침 후에도 자료 남게

    //const work = document.getElementById('work').value + " "; //인풋태그 값+공백 넣음
    //list.push(work); //리스트에 추가    
    
    //button.onclick = function(){ deleteNode();};
    //button.setAttribute('onclick',deleteNode); //버튼 클릭 이벤트 지정 작동x
    
    
    //li.setAttribute('id',i+"li"); //li태그에 id속성 부여  

    //i++; //인덱스값 증가
    
    //document.querySelector("#work").value = "";
    event.preventDefault();
    const work =event.target.mywork.value+ " ";
    localStorageSave(work);
    makeList(work);
    event.target.mywork.value = null; //input값 초기화
    
}

function localStorageSave(work){
    list.push(work); //받아온 값 list에 저장
    localStorage.setItem("list",list); //해당리스트 스토리지에 저장
    
}



// function enter(){
//     if(this.event.keyCode==13) {push();}
// }

function deleteNode() {
    this.parentNode.remove(); //부모노드 삭제 li
    //console.log(this.parentNode.value);
    list.splice(this.getAttribute('id'), 1); //list에서 버튼값과 같은 인덱스 제거
    localStorage.setItem("list",list);  //스토리지 업데이트
    // let id = this.getAttribute("id"); //버튼의 id i가져옴
    // id = id+"li"; //li의 id i li 만들어서
    // const li = document.getElementById(id); //해당 id인 Element가져옴
    // li.remove();
}
function makeList(work){
    const button = document.createElement("button");  //button태그 생성
    button.addEventListener("click", deleteNode); //버튼눌렀을때 함수
    const xnode = document.createTextNode('x'); //버튼에 넣은 x표시노드 추가
    button.appendChild(xnode); //버튼에 자식노드 추가
    button.setAttribute('id',i) //버튼에 id 설정
    i++;
    //const span = document.createElement("span"); //span태그 생성
    const textNode = document.createTextNode(work); //인풋값을 넣은 노드 생성
    
    const li = document.createElement("li");  //li태그 생성
    li.appendChild(textNode); //span의 자식노드로 추가
    
    //li.appendChild(span); //li의 자식노드로 추가
    li.appendChild(button); //li에 버튼 추가
    
    li.addEventListener('click', event => {
        event.target.classList.toggle('checked');
    });

    document.getElementById('list').appendChild(li); //li를 ul의 자식노드로 추가

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
