import React, {useState} from 'react'

import data from './data'

export default function CartItem() {
    const [cartData, setCartData] = useState(data)
    const [count, setCount] = useState(0)

    return (
        <div>
            {cartData.map((item) => {
                const {id, img, name, price} = item
                return <div key={id} className="font-bold">
                    <img src={img} alt="Product" className="w-44 h-44 mx-auto" />
                    <h2 className="w-36 mx-auto">{name}</h2>
                    <p className="w-14 mx-auto">${price}</p>
                    <div className="flex justify-center space-x-5 mx-auto">
                        <button type="button" className="bg-yellow-400 text-black p-2 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300">Increase </button>
                        <button type="button" className="bg-yellow-400 text-black p-2 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300"> Decrease</button>
                    </div>
                    <div className="w-36 mx-auto">
                        Current: {count}
                    </div>
                </div>
            })}
        </div>
    )
}
