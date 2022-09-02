import { useContext, createContext, useState } from 'react';

const cardContext = createContext();
const cardUpdateContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardData, setCardData] = useState({
    cardHolderName: 'Jane Appleseed',
    cardHolderNumber: '0000 0000 0000 0000',
    MM: '00',
    YY: '00',
    CVC: '000',
  });
  return (
    <cardUpdateContext.Provider value={setCardData}>
        <cardContext.Provider value={cardData}>
            { children }
        </cardContext.Provider>
    </cardUpdateContext.Provider>
  );
};

export const useCardContext = () => {
  return useContext(cardContext);
};

export const useCardUpdateContext = () => {
  return useContext(cardUpdateContext);
};
