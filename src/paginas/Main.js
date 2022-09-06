import { Outlet } from 'react-router-dom';
import Card from '../componentes/card/Card';

const Main = () => {
  return (
    <>
    <Card/>
    <Outlet/>
    </>
  );
};

export default Main;
