function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Exercicio 1
function createDaysOfTheMonth(){
  let daysUL = document.querySelector('#days')
  for (let i in dezDaysList) {
    daysLI = document.createElement('li')
    daysLI.innerHTML = dezDaysList[i]
    daysLI.className = 'day'
    if(i === '32' || i === '25' ){
      daysLI.className = 'day holiday'
    }
    if(i === '5' || i === '12' || i === '19'){
      daysLI.className = 'day friday'
    }
    if(i === '26'){
      daysLI.className = 'day holiday friday'
    }
    daysUL.appendChild(daysLI)
  }
}
createDaysOfTheMonth();
// Exercicio 2

function createHolidayButton (string) {
  let btn = document.createElement('button')
  btn.id = 'btn-holiday'
  let myDiv = document.querySelector('.buttons-container')
  myDiv.appendChild(btn)
  btn.innerHTML = string
}
createHolidayButton('Feriados')

// Exercicio 3
function changeBackground(){
  let getHolidays = document.querySelectorAll('.holiday')
  let btn = document.querySelector('#btn-holiday')
  let backgroundColorNew = 'rgb(181, 13, 13)'
  let setNewColor = 'white';
  
  btn.addEventListener('click', function (){
    for (let i = 0 ; i < getHolidays.length  ; i++ ) {
      if (getHolidays[i].style.backgroundColor == backgroundColorNew){
        getHolidays[i].style.backgroundColor = setNewColor
      }else{
        getHolidays[i].style.backgroundColor = backgroundColorNew
      }
    }
  })
}
changeBackground();

// Exercicio 4
function createFridayButton(string) {
  let btn = document.createElement('button')
  btn.id = 'btn-friday'
  let myDiv = document.querySelector('.buttons-container')
  myDiv.appendChild(btn)
  btn.innerHTML = string
}
createFridayButton('Sexta-Feira')

// Exercicio 5
let fridayBtn = document.querySelector('#btn-friday')
function changeTextFriday(fridaysArray){
  let getFriday = document.querySelectorAll('.friday');
  let newText = 'SEXTA FEIRA'
  fridayBtn.addEventListener('click', function() {
    for(let i = 0 ; i < getFriday.length ; i++){
      if(getFriday[i].innerHTML !== newText){
        getFriday[i].innerHTML = newText
      }else{
        getFriday[i].innerHTML = fridaysArray[i]
      }

    }
  })
}
let dezFridays = [ 4, 11, 18, 25 ];
changeTextFriday(dezFridays);

// Exercicio 6
function aumentarTexto (){
  let days = document.querySelector('#days');
  
  days.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}
function diminuirTexto(){
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event){
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
    
  })
}
aumentarTexto()
diminuirTexto()

// Exercicio 7
function addTask (string){
  let myTaskDiv = document.querySelector('.my-tasks')
  let task = document.createElement('span')
  task.innerText = string
  myTaskDiv.appendChild(task)
}
addTask("Cozinhar")

// Exercicio 8

function addDescri (cor){
  let myTaskDiv = document.querySelector('.my-tasks')
  let myDivTask = document.createElement('div')
  myDivTask.style.backgroundColor = cor
  myDivTask.className = 'task'
  myTaskDiv.appendChild(myDivTask)
}
addDescri('red')

// Exercicio 9

function selectTask(){
  let getDivTask = document.querySelector('.task')
  getDivTask.addEventListener('click', function(event){
    let selectedTask = document.getElementsByClassName('task selected');
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
}
selectTask();

// Exercicio 10


function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

// Exercicio 11

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();