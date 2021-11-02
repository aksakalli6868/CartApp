import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartBag = () => {
    const {clearItems} = useGlobalContext()

    return (
        <div>
            <div>
                <CartItem></CartItem>
            </div>
            <div>
                <button type="button" className="bg-yellow-500 hover:bg-yellow-300" 
                onClick={clearItems}>Clear List</button>
            </div>
            <div>
                Total: 
            </div>
            <div>
                Bag:
            </div>
        </div>
    )
}

export default CartBag
