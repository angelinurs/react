import './App.css';
import NavTop from './pages/NavTop';
import StandardImageList from './pages/StandardImageList';
import {Box} from '@mui/material';

function App() {
  return (
    <div className="App">
      <Box>
        <NavTop />
        <StandardImageList />
      </Box>
    </div>
  );
}

export default App;
