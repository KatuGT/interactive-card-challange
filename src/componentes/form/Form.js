// import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCardContext, useCardUpdateContext } from '../../cardProvider/CardProvider';
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
  const onSubmit = (data) => console.log(data);

  const setCardData = useCardUpdateContext();

  // const [cardNum, setCardNum] = useState('');
  // const useCard = useCardContext();
  const normalizedNumber = watch('cardholderNumber')?.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  setCardData((prevState) => ({
    ...prevState,
    cardHolderName: watch('cardholderName'),
    cardHolderNumber: normalizedNumber,
    MM: watch('cardholderMM'),
    YY: watch('cardholderYY'),
    CVC: watch('cardholderCVC'),
  }));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        value={normalizedNumber}
        maxLength={19}
      />
      <InputGroup
        hookFormMM={{
          ...register('cardholderMM', {
            required: { value: true, message: "Can't be blank" },
            min: {
              value: 2,
              message: 'Must contain 2 digits.',
            },
            pattern: {
              value: /^[0-9]*$/,
              message: 'Wrong formar, numbers only',
            },
          }),
        }}

        hookFormYY={{
          ...register('cardholderYY', {
            required: { value: true, message: "Can't be blank" },
            min: {
              value: 2,
              message: 'Must contain 2 digits.',
            },
            pattern: {
              value: /^[0-9]*$/,
              message: 'Wrong formar, numbers only',
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
        errorMessajeMM={errors?.cardholderMM?.message}
        errorMessajeYY={errors?.cardholderYY?.message}
        errorMessajeCVC={errors?.cardholderCVC?.message}
      />
      <button className='btn-enviar' type='submit'>Confirm</button>
    </form>
  );
};

export default Form;
