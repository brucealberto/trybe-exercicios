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

// Exercicio 01
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
// function createEachDay(dezDaysList){
// let dias = document.createElement('li');
// dias.className = 'day';
// let container = document.querySelector('#days');
// container.appendChild(dias)
// dias.innerHTML = 'teste';
function countDays(){
for (let index = 0; index < dezDaysList.length; index += 1) {
  //dezDaysList[index] += dias
  let dias = document.createElement('li');
  dias.className = 'day';
  let container = document.querySelector('#days');
  container.appendChild(dias)
  dias.innerHTML = dezDaysList[index];

  if (dezDaysList[index] == 24 || dezDaysList[index] == 25 || dezDaysList[index] == 31) {
    let dias = document.createElement('li');
    dias.className = 'day holyday';
    
    // console.log(dias)
  } 
   if (dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18 || 
    dezDaysList[index] == 25) {
    let dias = document.createElement('li');
    dias.className = 'day friday';
    
    // console.log(dias)
  }
}
}
countDays();
// }
//temos o array dezDaysList
// criar uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days"
//  os dias 29 e 30 já estão no array

// . Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// . Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// . Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>