import './Input.scss';

const Input = ({
  label, type, placeHolder, id, hookForm,
}) => {
  return (
    <div className='input-wrapper'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeHolder} {...hookForm} />
    </div>
  );
};

const InputGroup = () => {
  return (
    <div className='input-group-wrapper'>
      <div className='exp-date-wrapper'>
        <label htmlFor='input-exp-date'>EXP. DATE (MM/YY)</label>
        <div className="mm-yy">
            <input type='number' id='input-exp-date' placeholder='MM' />
            <input type='number'placeholder='YY' />
        </div>
      </div>
      <div className='input-wrapper'>
           <label htmlFor='input-cvc'>CVC</label>
           <input type='number' id='input-cvc' placeholder='e.g. 123' />
      </div>
    </div>
  );
};

export { Input, InputGroup };
