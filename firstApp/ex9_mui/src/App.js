import './App.css';
import { Container, Grid, Box } from '@mui/material'
import Logo from './pages/Logo';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      <Container fixed>
        <Grid container>
          <Grid item xs={2.5}>
            <Logo />
          </Grid>
          <Grid item xs={9.5}>
          <Box sx={{ bgcolor: '#DFF9F0', height: '100vh' }} >
            <Menu />
          </Box>
            
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
