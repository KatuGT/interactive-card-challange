// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCardUpdateContext } from '../../cardProvider/CardProvider';
import NormaliceNumber from '../../helpers/NormaliceNumber';
import Button from '../button/Button';
import { Input, InputGroup } from '../input/Input';
import './form.scss';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate('/success');
  };

  const setCardData = useCardUpdateContext();
  // Formatea el numero de la tarjeta para que tenga el siguinte patron: #### #### #### ####,
  // solo acepta números
  const normalizedCardNumber = watch('cardholderNumber')
    ?.replace(/[^\dA-Z]/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();

  useEffect(() => {
    setCardData((prevState) => ({
      ...prevState,
      cardHolderName: watch('cardholderName'),
      cardHolderNumber: normalizedCardNumber,
      MM: NormaliceNumber(watch('cardholderMM'), 2),
      YY: NormaliceNumber(watch('cardholderYY'), 2),
      CVC: NormaliceNumber(watch('cardholderCVC'), 3),
    }));
  }, [watch()]);

  return (
    <form className='wrapper-form' onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={'CARDHOLDER NAME'}
          type={'text'}
          placeHolder={'e.g. Jane Appleseed'}
          id={'input-name'}
          hookForm={{
            ...register('cardholderName', {
              required: { value: true, message: "Can't be blank" },
            }),
          }}
          errorMessaje={errors?.cardholderName?.message}
        />
        <Input
          label={'CARDHOLDER NUMBER'}
          type={'text'}
          placeHolder={'e.g. 1234 4566 7899 0000'}
          id={'input-number'}
          hookForm={{
            ...register('cardholderNumber', {
              required: { value: true, message: "Can't be blank" },
              pattern: {
                value: /^[\d ]*$/,
                message: 'Wrong formar, numbers only',
              },
              maxLength: {
                value: 19,
                message: 'Must contain a max of 16 digits.',
              },
              minLength: {
                value: 18,
                message: 'Must contain a min of 15 digits.',
              },
            }),
          }}
          errorMessaje={errors?.cardholderNumber?.message}
          value={normalizedCardNumber}
          maxLength={19}
        />
        <InputGroup
          hookFormMM={{
            ...register('cardholderMM', {
              required: { value: true, message: "Can't be blank" },
              pattern: {
                value: /^[0-9]*$/,
                message: 'Wrong formar, numbers only',
              },
              minLength: {
                value: 2,
                message: 'Must contain 2 digits.',
              },
            }),
          }}
          hookFormYY={{
            ...register('cardholderYY', {
              required: { value: true, message: "Can't be blank" },
              pattern: {
                value: /^[0-9]*$/,
                message: 'Wrong formar, numbers only',
              },
              minLength: {
                value: 2,
                message: 'Must contain 2 digits.',
              },
            }),
          }}
          hookFormCVC={{
            ...register('cardholderCVC', {
              required: { value: true, message: "Can't be blank" },
              minLength: {
                value: 3,
                message: 'Must contain a min of 3 digits.',
              },
              maxLength: {
                value: 4,
                message: 'Must contain a max of 4 digits.',
              },
              pattern: {
                value: /^[0-9]*$/,
                message: 'Wrong formar, numbers only',
              },
            }),
          }}
          errors={errors}
          errorMessageMM={errors?.cardholderMM?.message}
          errorMessageYY={errors?.cardholderYY?.message}
          errorMessageCVC={errors?.cardholderCVC?.message}
          watch={watch()}
        />
      <Button text={'Confirm'} type={'submit'} />
    </form>
  );
};

export default Form;
