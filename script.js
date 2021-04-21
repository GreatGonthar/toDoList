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

myButton.onclick = (() => { //TODO: создать отдельную функцию делающую ЭТО, еще она должна принимать текст, который будет в итоге выводится в наш список
  let newLi = document.createElement('li');
  newLi.classList.add("gray-strings");
  let newTrashButton = document.createElement('button');
  newTrashButton.classList.add("trash-button");  

  newLi.onclick = (() => {
    newLi.classList.toggle("gray-strings");
    newLi.classList.toggle("li-change");    
  });

  newTrashButton.onclick = (() => {
    newLi.remove();
  });

  newLi.textContent = (prompt("что сделать?", "ничего"));
  myList.append(newLi);
  newLi.append(newTrashButton);
});
// TODO: записывать полученные данные в объект. и потом создавать строки в списке на основе этого объекта
todayDateInDOM.textContent = today.toLocaleString("ru", dateOptions);
