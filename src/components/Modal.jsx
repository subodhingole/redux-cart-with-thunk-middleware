import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { toggleModal } from '../features/modal/modalSlice'

export const Modal = () => {
    const dispatch = useDispatch();
    return (
        <aside className="modal-container">
            <div className="modal">
                <h4> Remove all items from your shopping cart? </h4>
                <div className="btn-container">
                    <button onClick={() => { dispatch(clearCart()); dispatch(toggleModal()) }} className="btn confirm-btn">Confirm</button>
                    <button onClick={() => dispatch(toggleModal())} className="btn clear-btn">Cancel</button>
                </div>
            </div>
        </aside>

    )
}
