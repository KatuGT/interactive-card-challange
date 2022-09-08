import { useCardContext } from '../../cardProvider/CardProvider';
import TarjetaAtras from '../../images/bg-card-back.png';
import TarjetaFrente from '../../images/bg-card-front.png';
import LogoCard from '../../images/card-logo.svg';
import './card.scss';

const Card = () => {
  const cardData = useCardContext();
  return (
    <section className='card-wrapper'>
        <div className='card back-card'>
          <img className='img-tarjeta' src={TarjetaAtras} alt='Reves de tarjeta' />
          <p className='cvc'>{cardData?.CVC || '000'}</p>
        </div>
        <div className='card front-card'>
          <img className='img-tarjeta' src={TarjetaFrente} alt='Reves de tarjeta' />
          <img className='logo-tarjeta' src={LogoCard} alt="logo de tarjeta" />
          <p className='card-number'>{cardData?.cardHolderNumber || '0000 0000 0000 0000'}</p>
          <p className='card-name'>{cardData?.cardHolderName || 'Jane Appleseed'}</p>
          <p className='exp-date' >{cardData?.MM || '00'}/{cardData?.YY || '00'}</p>
        </div>
    </section>
  );
};

export default Card;
