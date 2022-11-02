import {Link, Routes, Route} from 'react-router-dom';
import './App.css';
import Menu1 from './pages/Menu1';
import Menu2 from './pages/Menu2';
import Menu3 from './pages/menu3';

function App() {
  return (
    <div className="App">

      <nav>
        <Link to='/'>메뉴1&nbsp;</Link>
        <Link to='/m2'>메뉴2&nbsp;</Link>
        <Link to='/m3'>메뉴3</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Menu1/>} />
        <Route path='/m2' element={<Menu2/>} />
        <Route path='/m3' element={<Menu3/>} />
      </Routes>
    </div>
  );
}

export default App;
