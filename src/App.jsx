import Navbar from "./components/Navbar";
import './cartItems.js'
import { CartContainer } from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotal, fetchCartItems } from "./features/cart/cartSlice.js";
import { Modal } from "./components/Modal";
import { Loading } from "./icons";
function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [])

  if (isLoading) {
    return <div className="cart">
      <Loading />
    </div>

  }
  return <div>
    {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
  </div>;
}
export default App;
