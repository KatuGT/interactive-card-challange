import { Outlet } from 'react-router-dom';
import Card from '../componentes/card/Card';
import './main.scss';

const Main = () => {
  return (
    <main className='main-wrapper'>
    <Card/>
    <Outlet/>
    </main>
  );
};

export default Main;
