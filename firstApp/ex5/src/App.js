import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import Ex3 from './pages/Ex3';
import Ex4 from './pages/Ex4';
import Ex5 from './pages/Ex5';
import Ex6 from './pages/Ex6';
import Ex7 from './pages/Ex7';
import Ex8 from './pages/Ex8';

function App() {
  return (
    <div className="App">

      <nav>
        <Link to='/'>- First&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link to='/ex2'>- Second&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link to='/ex3'>- Third(useState)&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link to='/ex4'>- Fourth(useState-vo)&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link to='/ex5'>- Five&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link to='/ex6'>- Six&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link to='/ex7'>- Seven&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link to='/ex8'>- Eight(Json)&nbsp;&nbsp;&nbsp;&nbsp;</Link>

      </nav>

      <Routes>
        <Route path='/'  element={<Ex1 />} />
        <Route path='/ex2'  element={<Ex2 />} />
        <Route path='/ex3'  element={<Ex3 />} />
        <Route path='/ex4'  element={<Ex4 />} />
        <Route path='/ex5'  element={<Ex5 />} />
        <Route path='/ex6'  element={<Ex6 />} />
        <Route path='/ex7'  element={<Ex7 year={2014} str={'Whale'} />} />
        <Route path='/ex8'  element={<Ex8 />} />
      </Routes>
    </div>
  );
}

export default App;
