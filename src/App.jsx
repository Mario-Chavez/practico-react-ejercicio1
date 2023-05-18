import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './components/Hello';
import { Container } from 'react-bootstrap';


function App() {

  return (
    <>
    <Container className="my-5 mainPage">
      <h1 className="display-4 text-center ">Practico 1</h1>
       <hr className='py-4'/>
       <Hello/>
    </Container>
    <footer className="bg-dark text-light text-center py-5">
        <p> &copy; Todos los derechos reservados</p>
    </footer>
  </>
  )
}

export default App
