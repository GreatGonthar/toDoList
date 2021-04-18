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
let message = myButton.onclick = (() => myList.innerHTML += "<li>" + (prompt("что сделать?", "ничего")) + "</li>");

//TODO обработать клики на li элементах
let myLi = document.querySelectorAll("li");


todayDateInDOM.textContent = today.toLocaleString("ru", dateOptions);
