import { Routes,Route } from 'react-router-dom';
import './App.css'
import Button from './components/Button/Button'
import TextInput from './components/TextInput/TextInput';
import TextInputForm from './components/TextInputForm/TextInputForm';
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer';
import StartGame from './pages/StartGame';
import PlayGame from './pages/PlayGame';

function App() {
 

  return (
    <>
      <div>

        <Routes>
          <Route path='/start' element={<StartGame/>} />
          <Route path='/play' element={<PlayGame/>}/>
          <Route path='/' element={<div>home</div>}/>
        </Routes>

          
      </div>
      
    </>
  );
}

export default App
