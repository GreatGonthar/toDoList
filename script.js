let today = new Date();
let oneDay = 86400000; //ms
let dayOnPanel = today;
let todayDateInObj =`${dayOnPanel.getDate()},${dayOnPanel.getMonth()+1},${dayOnPanel.getFullYear()}`;

let dateOptions = {    
	year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',    
};

let dataTextContent = {
	"20,5,2021": [
		["gray-strings", 'hallo'],
		["gray-strings", 'how'],
		["li-change", 'are'],
		["gray-strings", 'you']
	],

	"3,5,2021": [
		["gray-strings", '1'],
		["li-change", '2'],
		["gray-strings", '3'],
		["li-change", '4']
	],
}


let todayDateInDOM = document.querySelector(".today_date");
let myButton = document.querySelector(".to_do_button");
let myList = document.querySelector(".my_list");
let leftArrowButton = document.querySelector(".left_arrow");
let rightArrowButton = document.querySelector(".right_arrow");

myList.onclick = function(event) {
	if (event.target.tagName == 'LI'){
		let tagIndex = getElementIndex(event.target);				
		event.target.classList.toggle("li-change");
		event.target.classList.toggle("gray-strings");
		console.log(event.target.className);
		dataTextContent[todayDateInObj][tagIndex][0] = event.target.className;		
	} else if (event.target.tagName == 'DIV'){
		let tagIndex = getElementIndex(event.target.parentElement);		
		removeElementWithDataArr(tagIndex, todayDateInObj);
		event.target.parentElement.remove();
	} else return
}

myButton.onclick = () => {
	let promptText = prompt("что сделать?", "ничего");
	if (promptText) {
		addListInObj(dataTextContent, todayDateInObj, ["gray-strings", promptText]);
		createLiWithText(promptText, "gray-strings");
	}else false
}

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
	createContentWithList(dataTextContent, todayDateInObj);
}

// заполнение списка по умолчанию(данные взяты из переменной)
function createContentWithList(textArr, day) {
	console.log(textArr[day]);
	for (let key in textArr[day]){
		createLiWithText(textArr[day][key][1], textArr[day][key][0]); //название дня, и название класса
	}
}

function createLiWithText(text, defaultClass){
	let newLi = document.createElement('li');
	newLi.classList.add(defaultClass);
	let newTrashButton = document.createElement('div');
	newTrashButton.classList.add("trash-button");  
	newLi.textContent = (text);
	myList.append(newLi);
	newLi.append(newTrashButton);	
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

function removeElementWithDataArr(index, date){
	console.log(dataTextContent[date][index]);
	dataTextContent[date].splice(index, 1);	
}

// функция с хабра, для поиска индекса элемента
function getElementIndex(elem) {
    elem = elem.tagName ? elem : document.querySelector(elem); 
    return [].indexOf.call(elem.parentNode.children, elem);
}

