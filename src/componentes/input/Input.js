import './Input.scss';
import classNames from 'classnames';
import { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
// import NormaliceNumber from '../../helpers/NormaliceNumber';
import { useCardContext } from '../../cardProvider/CardProvider';

const Input = ({
  label, type, placeHolder, id, hookForm, errorMessaje, value, maxLength,
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
        placeholder={placeHolder}
        {...hookForm}
        value={value}
        maxLength={maxLength}
      />
      {errorMessaje && <span className='msj-error'>{errorMessaje}</span>}
    </div>
  );
};

const InputGroup = ({
  hookFormMM,
  hookFormYY,
  hookFormCVC,
  errorMessageMM,
  errorMessageYY,
  errorMessageCVC,
}) => {
  console.log(errorMessageMM);
  console.log(errorMessageYY);
  return (
    <div className='input-group-wrapper'>
      <div className='exp-date-wrapper'>
        <label htmlFor='input-exp-date'>EXP. DATE (MM/YY)</label>
        <div className='mm-yy'>
          <input
            type='text'
            // maxLength='2'
            id='input-exp-date'
            placeholder='MM'
            className={classNames('inputHolder', {
              'input-error': !isEmpty(errorMessageMM),
              '': isEmpty(errorMessageMM),
            })}
            {...hookFormMM}
          />
          <input
            type='text'
            maxLength='2'
            placeholder='YY'
            className={classNames('inputHolder', {
              'input-error': !isEmpty(errorMessageYY),
              '': isEmpty(errorMessageYY),
            })}
            {...hookFormYY}
          />
        </div>
        {(errorMessageMM || errorMessageYY) && (
          <span className='msj-error'>{errorMessageMM || errorMessageYY}</span>
        )}
      </div>
      <div className='input-wrapper'>
        <label htmlFor='input-cvc'>CVC</label>
        <input
          type='text'
          maxLength='8'
          id='input-cvc'
          placeholder='e.g. 123'
          className={classNames('inputHolder', {
            'input-error': !isEmpty(errorMessageCVC),
            '': isEmpty(errorMessageCVC),
          })}
          // value={cardData.CVC}
          {...hookFormCVC}
        />
        {errorMessageCVC && (
          <span className='msj-error'>{errorMessageCVC}</span>
        )}
      </div>
    </div>
  );
};

export { Input, InputGroup };
