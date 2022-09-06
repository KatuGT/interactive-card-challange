import './button.scss';

const Button = ({ text, onClick, type }) => {
  return (
    <button className='btn' onClick={onClick} type={type}>{text}</button>
  );
};

export default Button;
