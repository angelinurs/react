import { Link, Routes, Route } from 'react-router-dom'
import './App.css';
import About from './About';
import Component from './Compenent';
import CarListApp from './CarListApp';
import './css/AppStyle.css'

function App() {
  let styleFormat = {
    border: '1px solid #fff'
  }
  return (
    <div className="App">
      <nav style={ styleFormat } >
        <Link to='/' >CarList</Link>
        <Link to='/Component'>Component</Link>
        <Link to='/About'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<CarListApp/>} ></Route>
        <Route path='/Component' element={<Component/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
