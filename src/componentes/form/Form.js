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
          }),
        }}
        errorMessaje={errors?.cardholderNumber?.message}
      />
      <InputGroup
        hookFormDate={{
          ...register('cardholderDate', {
            required: { value: true, message: "Can't be blank" },
          }),
        }}
        hookFormCVC={{
          ...register('cardholderCVC', {
            required: { value: true, message: "Can't be blank" },
          }),
        }}
        errors={errors}
        errorMessajeDate={errors?.cardholderDate?.message}
        errorMessajeCVC={errors?.cardholderCVC?.message}
      />
      <button type='submit'>enviar</button>
    </form>
  );
};

export default Form;
