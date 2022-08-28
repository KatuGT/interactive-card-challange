import TarjetaAtras from '../../images/bg-card-back.png';
import TarjetaFrente from '../../images/bg-card-front.png';
import LogoCard from '../../images/card-logo.svg';
import './card.scss';

const Card = () => {
  return (
    <section className='card-wrapper'>
      <div className='main-bk-card'>
        <div className='card back-card'>
          <img className='img-tarjeta' src={TarjetaAtras} alt='Reves de tarjeta' />
          <p className='cvc'>000</p>
        </div>
      </div>
      <div className='main-fr-card'>
        <div className='card front-card'>
          <img className='img-tarjeta' src={TarjetaFrente} alt='Reves de tarjeta' />
          <img className='logo-tarjeta' src={LogoCard} alt="logo de tarjeta" />
          <p className='card-number'>0000 0000 0000 0000</p>
          <p className='card-name'>Katu Martinez</p>
          <p className='exp-date' >16/10</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
