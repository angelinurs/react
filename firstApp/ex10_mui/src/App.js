import './App.css';
import Ex1_box from './pages/Ex1_box';
import { Ex2_button } from './pages/Ex2_button';
import { Divider } from '@mui/material';
import Ex3_cards from './pages/Ex3_cards';

function App() {
  return (
    <div className="App">
      <Divider />
      <h2>Card ex</h2>
      <Divider />
      <Ex3_cards />
      <Divider />      
      <h2>Button ex</h2>
      <Divider />
      <Ex2_button />
      <Divider />
      <h2>Box ex</h2>
      <Divider />
      <Ex1_box />
    </div>
  );
}

export default App;
