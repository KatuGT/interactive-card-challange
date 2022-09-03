import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCardUpdateContext } from '../../cardProvider/CardProvider';
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
  useEffect(() => {
  }, [watch]);
  setCardData((prevState) => ({
    ...prevState,
    cardHolderName: watch('cardholderName'),
    cardHolderNumber: watch('cardholderNumber'),
    MM: watch('cardholderMM'),
    YY: watch('cardholderYY'),
    CVC: watch('cardholderCVC'),
  }));

  console.log(watch());
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
        type={'number'}
        placeHolder={'e.g. 1234 4566 7899 0000'}
        id={'input-number'}
        hookForm={{
          ...register('cardholderNumber', {
            required: { value: true, message: "Can't be blank" },
            pattern: {
              value: /^[0-9]*$/,
              message: 'Wrong formar, numbers only',
            },
            maxLength: {
              value: 16,
              message: 'Must contain a max of 16 digits.',
            },
            minLength: {
              value: 15,
              message: 'Must contain a min of 15 digits.',
            },
          }),
        }}
        errorMessaje={errors?.cardholderNumber?.message}
        value={watch('cardholderNumber')}
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
