import {useState} from 'react';
import Header from './components/header';
import Input from './components/input';
import './App.css';

function App() {
  const [title, setTitle] = useState('hello')
  const changeHandler = e => {
    setTitle(e.target.value)
  }

  return (
    <div className="App">
      <Header title={title} />
      <Input value={title} change={changeHandler} />
    </div>
  );
}

export default App;
