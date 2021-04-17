let myButton = document.querySelector(".to_do_button");
let myList = document.querySelector(".my_list");
let message = myButton.onclick = (() => myList.innerHTML += "<li>" + (prompt("что сделать?", "ничего")) + "</li>");
console.log (myList.textContent);
