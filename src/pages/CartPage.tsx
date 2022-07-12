import Cart from '../components/Cart';
import { CartPageWrapper } from '../components/Cart/styles';

const CartPage = () => {
  return (
    <CartPageWrapper>
      <Cart minicart={false} />
    </CartPageWrapper>
  );
};

export default CartPage;
