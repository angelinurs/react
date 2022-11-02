import './App.css';
import { Header } from './pages/Header';
import Nav from './pages/Nav';
import Content from './pages/Content';
// mui 적용
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container fixed>
        <Header />
        <Grid container >
          <Grid item xs={3}>
            <Nav />
          </Grid>
          <Grid item xs={9}>
            <Content />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
