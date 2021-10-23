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
function countDays() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    //dezDaysList[index] += dias
    let dias = document.createElement('li');
    dias.className = 'day';
    let container = document.querySelector('#days');
    container.appendChild(dias)
    dias.innerHTML = dezDaysList[index];

    if (dezDaysList[index] == 24 || dezDaysList[index] == 25 || dezDaysList[index] == 31) {
      let dias = document.createElement('li');
      dias.className = 'day holiday';

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

// Exercicio 02
function botaoFeriado(Feriados) {
  let criarBotao = document.createElement('button');
  criarBotao.id = 'btn-holiday';
  criarBotao.innerHTML = Feriados
  let botaoPai = document.querySelector('.buttons-container');
  botaoPai.appendChild(criarBotao)
  criarBotao.addEventListener('click',eventoClick)
  
  // criarBotao.addEventListener('click', eventoClick)
}
botaoFeriado('Feriados');

// Exercicio 03

function eventoClick() {
  let eventoDia = document.getElementsByClassName('day holiday');
  eventoDia.style.backgroundColor = 'blue';
}
console.log(document.querySelector('.day'))