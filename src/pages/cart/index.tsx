import { useContext } from "react";
import { CartContext } from "../../context/context";
import { useState, useEffect } from "react";
export function Cart() {
  const { removeProduct, cart, decrementProduct, incrementProduct, totalProducts , Comprafinalizar,total } = useContext(CartContext)

  useEffect(() => {
    totalProducts();
  }, [cart])

  return (
    <div className="flex items-center justify-center flex-col mt-3">
      {/* listando os produtos no carrinho */}
       <h1 className="text-2xl font-medium mb-6">Carrinho</h1>
         {cart.map((product : any) => (
            <div key={product.id} className="flex flex-col sm:flex-row items-center gap-4 border rounded-lg p-4 w-full sm:w-2/3 mb-4">
              <img className="w-40" src={product.cover} alt="" />
              <p>{product.title}</p>
              <span className="mr-2">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
               <div className="flex items-center gap-4">
              <button className="mr-2 font-medium" onClick={() => decrementProduct(product)}>-</button>
              <span>{product.quantity}</span>
              <button className="ml-2" onClick={() => incrementProduct(product)}>+</button>
               </div>
               
             <div>
                <p className="mb-2 font-medium">Total cada produto: {(product.price * product.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                {/* Mostrar o preço total do carrinho. */}
             </div>
            </div>
            
         ))}
           <span>Total: {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>

         <div>
            <button className="border-none rounded-2xl px-2 py-2 cursor-pointer mt-4 text-1xl" onClick={() => Comprafinalizar()}>Finalizar compra</button>
         </div>
    </div>
  );
}

export default Cart