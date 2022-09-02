import { useForm } from 'react-hook-form';
import { Input, InputGroup } from '../input/Input';
import './form.scss';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
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
              value: /^[0-9]*$/,
              message: 'Wrong formar, numbers only',
            },
          }),
        }}
        errorMessaje={errors?.cardholderNumber?.message}
      />
      <InputGroup
        hookFormMM={{
          ...register('cardholderMM', {
            required: { value: true, message: "Can't be blank" },
            pattern: {
              value: /^[0-9]*$/,
              message: 'Wrong formar, numbers only',
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
          }),
        }}
        hookFormCVC={{
          ...register('cardholderCVC', {
            required: { value: true, message: "Can't be blank" },
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
