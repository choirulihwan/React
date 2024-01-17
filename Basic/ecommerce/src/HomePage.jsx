import { PRODUCTS } from "./product";
import { useState } from 'react';

export default function HomePage() {
    const  [cartItems, setCartItems] = useState({1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0});

    const addToCart = (id) => {
        setCartItems(cartItems => ({...cartItems, [id]: cartItems[id] + 1}));        
    };

    const subFromCart = (id) => {
        setCartItems(cartItems => ({...cartItems, [id]: cartItems[id] - 1}))
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems => ({...cartItems, [id]: 0 }))
    };

    const totalAmount = () => {
        let amount = 0;
        for(const key in cartItems){
            if(cartItems[key] > 0){
                let productInfo = PRODUCTS.find(product => product.id === Number(key));
                amount += Math.floor(cartItems[key] * productInfo.price);
            }
        }
        return amount;
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-20 p-10">
            {
                PRODUCTS.map( product => (
                    <div key={product.id}>
                        <img className="w-40 h-40" src={product.productImage} alt="" />
                        <p>{product.productName}</p>
                        <p>{product.price}</p>
                        <button onClick={() => addToCart(product.id)} className="border-2 rounded-lg drop-shadow-2xl p-2 hover:bg-green-300">Add To Cart</button>
                    </div>
                ))
            }

            <div className="fixed p-4 right-0 top-0 bg-blue-100 h-screen w-80 overflow-y-scroll">
                <h1 className="text-white font-bold text-2xl">Your Cart</h1>
                <p className="text-3xl font-bold">Total: ${totalAmount()}</p>
                
                {PRODUCTS.map( product => {
                    if (cartItems[product.id] > 0) {                         
                        return <div className="mt-3">
                            <div key={product.id} className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img className="w-20 h-20 my-4" src={product.productImage} alt="" /> X 
                                    <p className="text-2xl font-bold pl-2">{cartItems[product.id]}</p>
                                </div>
                                <div className="flex flex-col gap-2 font-bold">
                                    <button onClick={() => removeFromCart(product.id)} className="text-red-500 bg-red-200 hover:text-white p-2 rounded">Remove</button>
                                    <button onClick={() => addToCart(product.id)} className="text-green-500 text-2xl hover:text-green-700">+</button>
                                    <button onClick={() => subFromCart(product.id)} className="text-red-500 text-2xl hover:text-red-700">-</button>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 italic">
                                <p>{product.productName}</p>
                                <p>-</p>
                                <p>$ {product.price}</p>
                            </div>
                        </div>
                    }            
                })}
            </div>
        </div>
    )
}