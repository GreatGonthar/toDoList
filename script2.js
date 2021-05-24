let today = new Date();
let oneDay = 86400000; //ms
let dayOnPanel = today;
let todayDateInObj =`${dayOnPanel.getDate()},${dayOnPanel.getMonth()+1},${dayOnPanel.getFullYear()}`;
let dataTextContent = [];

let dateOptions = {    
	year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',    
};
class DataListText {    
    constructor(number, text, className) {
        this.number = number;
        this.text = text;
        this["class-name"] = className;
    }
  }

// let dataTextContent = [new DataListText(0, 'что-то', "gray-strings")]

let todayDateInDOM = document.querySelector(".today_date");
let myButton = document.querySelector(".to_do_button");
let myList = document.querySelector(".my_list");
let leftArrowButton = document.querySelector(".left_arrow");
let rightArrowButton = document.querySelector(".right_arrow");

myButton.onclick = () => fillingArrListText();


function fillingArrListText() {
    let promptText = prompt("что сделать?", "ничего");
	if (promptText) {
        dataTextContent.push(new DataListText(dataTextContent.length, promptText, "gray-strings"))
	}else false
}


// createContentWithList(dataTextContent, "today");

leftArrowButton.onclick = () => changeDateOnPanel("left");
rightArrowButton.onclick = () => changeDateOnPanel("right");
todayDateInDOM.textContent = dayOnPanel.toLocaleString("ru", dateOptions);

function changeDateOnPanel(alligment){
	if (alligment == "left"){
		dayOnPanel = new Date(dayOnPanel.getTime() - oneDay);
	} else if (alligment == "right"){
		dayOnPanel = new Date(dayOnPanel.getTime() + oneDay);
	}	
	todayDateInObj = `${dayOnPanel.getDate()},${dayOnPanel.getMonth()+1},${dayOnPanel.getFullYear()}`;
	
	todayDateInDOM.textContent = dayOnPanel.toLocaleString("ru", dateOptions);
	clearList(myList);
	// createContentWithList(dataTextContent, todayDateInObj);
}

function createLiWithText(text, defaultClass){
	let newLi = document.createElement('li');
	newLi.classList.add(defaultClass);
    createTrashButton(newLi);

  	// newLi.onclick = (function() {		
	//     this.classList.toggle("gray-strings");
    // 	this.classList.toggle("li-change");   
	// 	getLiArrs(todayDateInObj);
  	// });



	newLi.textContent = (text);
	myList.append(newLi);
	newLi.append(newTrashButton);	
}

function createTrashButton(myLi) {
    let newTrashButton = document.createElement('div');
	newTrashButton.classList.add("trash-button");  
    // newTrashButton.onclick = (() => {
	// 	// removeElementWithDataArr(myLi.textContent, todayDateInObj);
	// 	// myLi.remove();
	// 	// clearList(myLi);
	// 	// createContentWithList(dataTextContent, todayDateInObj);
  	// }
}

function addListInObj(obj, date, arr){
	if (obj[date] == undefined){
		obj[date] = [];
		obj[date].push(arr)	
	}else{
		obj[date].push(arr)
	}	
}

function clearList(list){
	while (list.lastChild){
		list.lastChild.remove();
	}
}
function getLiArrs(date){
	let nodeArr = myList.children;
	dataTextContent[date].forEach((elem, index) => {
	let classToStr = String(nodeArr[index].classList);
		if (classToStr != elem[0]){
			elem[0] = classToStr;
		}
	})
}

function removeElementWithDataArr(text, date){
	dataTextContent[date].forEach((elem, index) => {
		if (text == elem[1]){
			dataTextContent[date].splice(index, 1);
			return;
		}
	});
}


