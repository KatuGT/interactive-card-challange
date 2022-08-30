import { useForm } from 'react-hook-form';
import { Input, InputGroup } from '../input/Input';
import './form.scss';

const Form = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={'CARDHOLDER NAME'}
        type={'text'}
        placeHolder={'e.g. Jane Appleseed'}
        id={'input-name'}
        hookForm={{ ...register('cardholderName', { required: { value: true, message: 'Campo requerido' } }) }}
      />
      {errors.cardholderName && <span>{errors.cardholderName.message}</span>}
      <Input
        label={'CARDHOLDER NUMBER'}
        type={'number'}
        placeHolder={'e.g. 1234 4566 7899 0000'}
        id={'input-number'}
        hookForm={{ ...register('exampleRequired2222', { required: true }) }}
      />
       {errors.exampleRequired2222 && <p>error numero 2</p>}
      <InputGroup />
      <button type='submit'>enviar</button>
    </form>
  );
};

export default Form;
