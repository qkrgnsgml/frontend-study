'use strict';

let itemList = [];
let inputButton = document.querySelector("#pushbutton");
inputButton.addEventListener("click", addItem);


function addItem() {
    let item = document.querySelector("#work").value;
    if (item != null) {
        itemList.push(item);
        document.querySelector("#work").value = "";
        document.querySelector("#work").focus();
    }

    showList();
}


function showList() {
    let list = "<ul>"
    for (let i = 0; i <itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    }
    list += "</ul>";
    document.querySelector(".itemlist").innerHTML = list;


    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }

}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}


let checkList = document.querySelector('.itemlist');
checkList.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});

function test() {
    window.onbeforeunload = function (e) {
        return 0;
    };
}