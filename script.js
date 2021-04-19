let today = new Date();
let dateOptions = {    
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',    
  };

let todayDateInDOM = document.querySelector(".today_date");
let myButton = document.querySelector(".to_do_button");
let myList = document.querySelector(".my_list");

myButton.onclick = (() => {
  let newLi = document.createElement('li');
  let newTrashButton = document.createElement('button');
  newTrashButton.classList.add("trash-button");
  
// TODO сделать изменение строчек при клике, с помощью добавления специального класса
  newLi.onclick = (() => {
    newLi.style.background = "coral";
    newLi.style.listStyleImage = "url(http://htmlbook.ru/themes/hb/img/icon_yes2.png)";
  });
  newTrashButton.onclick = (() => {
    newLi.style.background = "red";    
  });
  newLi.textContent = (prompt("что сделать?", "ничего"));
  myList.append(newLi);
  myList.append(newTrashButton); // TODO чтобы корзина нормально работала
});
  // myList.innerHTML += "<li>" + (prompt("что сделать?", "ничего")) + "</li>");


// let myLi = document.querySelectorAll("li");


todayDateInDOM.textContent = today.toLocaleString("ru", dateOptions);
