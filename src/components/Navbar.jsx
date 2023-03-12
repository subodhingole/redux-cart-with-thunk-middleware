import React from 'react'
import { useSelector } from 'react-redux'
import { CartIcon } from '../icons.jsx'
const Navbar = () => {
    const { amount } = useSelector((state) => { console.log(state); return state.cart })
    return (
        <nav>
            <div className="nav-center">
                <h3>Redux Cart</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar