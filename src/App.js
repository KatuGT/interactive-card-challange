import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CardProvider } from './cardProvider/CardProvider';
import Form from './componentes/form/Form';
import Success from './componentes/success/Success';
import Main from './paginas/Main';

function App() {
  return (
    <CardProvider>
      <div className='App'>

        <Router>
          <Routes>
            <Route element={<Main/>}>
                <Route path='/' element={<Form/>}/>
                <Route path='/success' element={<Success/>}/>
            </Route>
          </Routes>
        </Router>
      </div>
    </CardProvider>
  );
}

export default App;
