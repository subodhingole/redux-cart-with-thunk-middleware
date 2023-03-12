import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart, calculateTotal } from "../features/cart/cartSlice.js";
import { toggleModal } from "../features/modal/modalSlice.js";
import CartItem from "./CartItem.jsx";


export const CartContainer = () => {
    const { cartItems, amount, total, isLoading } = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>Your Bag</h2>
                    <h4 className="empty-cart"> is Currently Empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className="cart">
            <header>
                <h2>Your Bag</h2>
            </header>
            <article>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />
                }
                )}
            </article>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        Total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button onClick={() => dispatch(toggleModal())} className="btn clear-btn">Clear Cart</button>
            </footer>
        </section>

    )
}
