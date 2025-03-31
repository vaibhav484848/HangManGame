import './App.css'
import Button from './components/Button/Button'
import TextInput from './components/TextInput/TextInput';
import TextInputForm from './components/TextInputForm/TextInputForm';
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer';

function App() {
 

  return (
    <>
      <div>
          <Button text="click me" more="something" onClickHandler={()=>{ console.log("click me");}}  styleType="primary" />
          <Button text="click me"/>

          <TextInputFormContainer/>
      </div>
      
    </>
  );
}

export default App
