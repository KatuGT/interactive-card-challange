// Elimina letras, limita la cantidad de caracteres
// y agrega un 0 adelante del numero dependiendo del largo que elijamos

const NormaliceNumber = (value, length) => {
  const newValue = value?.replace(/[^\dA-Z]/g, '').substr(0, length).trim().padStart(length, '0') || '';

  return newValue;
};

export default NormaliceNumber;
