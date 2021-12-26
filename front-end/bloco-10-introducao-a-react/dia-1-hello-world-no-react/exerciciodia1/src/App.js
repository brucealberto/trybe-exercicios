
import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar','Tomar Café','Estudar']

function App() {
  return (
    <ul>{ tarefas.map((tarefa) => Task(tarefa))}</ul>
  );
}

export default App;
