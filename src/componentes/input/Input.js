import './Input.scss';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';

const Input = ({
  label, type, placeHolder, id, onChange, hookForm, errorMessaje, value,
}) => {
  return (
    <div className='input-wrapper'>
      <label htmlFor={id}>{label}</label>
      <input
        className={classNames('inputHolder', {
          'input-error': !isEmpty(errorMessaje),
        })}
        type={type}
        id={id}
        onChange={onChange}
        placeholder={placeHolder}
        {...hookForm}
      />
      {errorMessaje && <span className='msj-error'>{errorMessaje}</span>}
    </div>
  );
};

const InputGroup = ({
  hookFormMM,
  hookFormYY,
  hookFormCVC,
  errorMessajeMM,
  errorMessajeYY,
  errorMessajeCVC,
  error,
}) => {
  return (
    <div className='input-group-wrapper'>
      <div className='exp-date-wrapper'>
        <label htmlFor='input-exp-date'>EXP. DATE (MM/YY)</label>
        <div className='mm-yy'>
          <input
            type='number'
            id='input-exp-date'
            placeholder='MM'
            className={classNames('inputHolder', {
              'input-error': !isEmpty(errorMessajeMM),
              '': isEmpty(errorMessajeMM),
            })}
            {...hookFormMM}
          />
          <input
            type='number'
            placeholder='YY'
            className={classNames('inputHolder', {
              'input-error': !isEmpty(errorMessajeYY),
              '': isEmpty(errorMessajeYY),
            })}
            {...hookFormYY}
          />
        </div>
        {(errorMessajeMM || errorMessajeYY) && (
          <span className='msj-error'>{errorMessajeMM || errorMessajeYY}</span>
        )}
      </div>
      <div className='input-wrapper'>
        <label htmlFor='input-cvc'>CVC</label>
        <input
          type='number'
          id='input-cvc'
          placeholder='e.g. 123'
          className={classNames('inputHolder', {
            'input-error': !isEmpty(errorMessajeCVC),
            '': isEmpty(errorMessajeCVC),
          })}
          {...hookFormCVC}
        />
        {errorMessajeCVC && (
          <span className='msj-error'>{errorMessajeCVC}</span>
        )}
      </div>
    </div>
  );
};

export { Input, InputGroup };
