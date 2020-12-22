import {useState} from 'react'
import catData from './data.js'

import Header from './components/header'
import Input from './components/input'
import Cards from './containers/cards'
import Label from './components/label'

import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const changeHandler = e => {
    setTitle(e.target.value)
  }
  const catFilter = catData.filter(cat => cat.title.toLowerCase().includes(title.toLocaleLowerCase()))
  const placeholder = 'Insert cat name'
  const label = 'Pencarian data'

  return (
    <div className="App">
      {/* <Header title={title} /> */}
      <Header />
      <Label label={label} />
      <Input value={title} change={changeHandler} placeholder={placeholder} />
      <Cards catData={catFilter} /> 
    </div>
  );
}

export default App;
