import { Routes,Route } from 'react-router-dom';
import './App.css'
import Button from './components/Button/Button'
import TextInput from './components/TextInput/TextInput';
import TextInputForm from './components/TextInputForm/TextInputForm';
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer';
import StartGame from './pages/StartGame';
import PlayGame from './pages/PlayGame';
import Home from './pages/Home';
import { WordContext } from './context/WordContext';
import { useState } from 'react';

function App() {
 
  const[wordList,setWordList]=useState([]);
  const [word,setWord]=useState('');

  return (
    <WordContext.Provider value={{wordList,setWordList,word,setWord}}>
   

        <Routes>
          <Route path='/start' element={<StartGame/>} />
          <Route path='/play' element={<PlayGame/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>

          
    </WordContext.Provider>
  );
}

export default App
