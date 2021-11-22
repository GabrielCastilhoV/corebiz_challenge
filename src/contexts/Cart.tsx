import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import { toast } from 'react-toastify';

import { ProductProps } from '../components/layouts/Home';

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  products: ProductProps[];
  addProduct: (product: ProductProps) => Promise<void>;
  removeProduct: (productId: number) => Promise<void>;
  incrementProduct: (productId: number) => Promise<void>;
  decrementProduct: (productId: number) => Promise<void>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getQtndProducts(): Promise<void> {
      const storagedProducts = localStorage.getItem('@corebiz:products');

      if (storagedProducts) {
        setProducts(JSON.parse(storagedProducts));
      }
    }

    getQtndProducts();
  }, []);

  const addProduct = useCallback(
    async (product: ProductProps): Promise<void> => {
      const updatedCart = [...products];

      const productExists = updatedCart.find(
        findProduct => product.productId === findProduct.productId,
      );

      if (productExists) {
        productExists.qtd! += 1;

        setProducts(updatedCart);
      } else {
        setProducts([...products, { ...product, qtd: 1 }]);
      }

      localStorage.setItem('@corebiz:products', JSON.stringify(products));
    },
    [products],
  );

  const removeProduct = useCallback(
    async (productId: number): Promise<void> => {
      try {
        const updatedCart = [...products];

        const productIndex = updatedCart.findIndex(
          product => product.productId === productId,
        );

        if (productIndex >= 0) {
          updatedCart.splice(productIndex, 1);
          setProducts(updatedCart);
        } else {
          throw Error();
        }
      } catch {
        toast.error('Error deleting the product');
      }
    },
    [products],
  );

  const incrementProduct = useCallback(
    async (productId: number): Promise<void> => {
      const arrProducts = [...products];
      const productExists = arrProducts.find(
        findProduct => productId === findProduct.productId,
      );

      if (productExists) {
        productExists.qtd! += 1;
        setProducts(arrProducts);
      }

      localStorage.setItem('@corebiz:products', JSON.stringify(products));
    },
    [products],
  );

  const decrementProduct = useCallback(
    async (productId: number): Promise<void> => {
      const arrProducts = [...products];
      const productExists = arrProducts.find(
        findProduct => productId === findProduct.productId,
      );

      const indexProduct = arrProducts.findIndex(
        findProduct => productId === findProduct.productId,
      );

      if (productExists) {
        if (productExists.qtd === 1) {
          arrProducts.splice(indexProduct, 1);
        } else {
          productExists.qtd! -= 1;
        }
      }

      setProducts(arrProducts);

      localStorage.setItem('@corebiz:products', JSON.stringify(products));
    },
    [products],
  );

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        incrementProduct,
        decrementProduct,
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
