import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { useDispatch } from 'react-redux'
import { removeItem, increaseAmount, decreaseAmount } from '../features/cart/cartSlice'

const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();
    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h5 className="item-price">${price}</h5>
                <button onClick={() => dispatch(removeItem(id))} className="remove-btn">remove</button>
            </div>
            <div>
                <button onClick={() => dispatch(increaseAmount(id))} className="amount-btn">
                    <ChevronUp />
                </button>
                <p className="item-amount">{amount}</p>
                <button onClick={() => dispatch(decreaseAmount(id))} className="amount-btn">
                    <ChevronDown />
                </button>
            </div>
        </article>

    )
}

export default CartItem