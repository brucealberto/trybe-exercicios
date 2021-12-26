
import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// const Task = (value) => {
//   return (
//     <li key={value}>{value}</li>
//   );
// }

// const tarefas = ['Acordar','Tomar Café','Estudar']

// function App() {
//   return (
//     <ul>{ tarefas.map((tarefa) => Task(tarefa))}</ul>
//   );
// }

function App () {
  return (
  <>
  <Header />
  <Content /> 
  <Footer />
  </>)
  
}

export default App;
