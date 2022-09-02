import { CardProvider } from './cardProvider/CardProvider';
import Main from './paginas/Main';

function App() {
  return (
    <CardProvider>
      <div className='App'>
        <Main />
      </div>
    </CardProvider>
  );
}

export default App;
