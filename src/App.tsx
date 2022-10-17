import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './features/Auth/Login'
import Register from './features/Auth/Register'
import Dashboard from './features/Dashboard/Dashboard'
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Navbar /> */}
          <Container>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              
            </Routes>
          </Container>
        </ThemeProvider>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
