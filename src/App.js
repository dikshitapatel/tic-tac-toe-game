import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TicTacToe from './components/TicTacToe';


function App() {
  return(
    <div className='App'>
      <TicTacToe/>
    </div>
  );
}

export default App;
