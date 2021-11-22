import {
  createContext,
  SetStateAction,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  qtd: number;
  setQtd: React.Dispatch<SetStateAction<number>>;
  incrementQtd: () => Promise<void>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [qtd, setQtd] = useState(0);

  useEffect(() => {
    async function getQtndProducts(): Promise<void> {
      const qtndProducts = localStorage.getItem('@corebiz:qtnd');

      if (qtndProducts) {
        setQtd(JSON.parse(qtndProducts));
      }
    }

    getQtndProducts();
  }, []);

  async function incrementQtd(): Promise<void> {
    setQtd(qtd + 1);

    localStorage.setItem('@corebiz:qtnd', JSON.stringify(qtd + 1));
  }

  return (
    <CartContext.Provider
      value={{
        qtd,
        setQtd,
        incrementQtd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
