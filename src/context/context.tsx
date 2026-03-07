import { createContext } from "react";
import { useState } from "react";


 export const CartContext = createContext({ } as any);
 export function CartProvider({children} : any){
   const [cart, setCart] = useState<any>([]);
   const [total, setTotal] = useState(0);

    
   function addProduct(product : any){
     const productExists = cart.find((item : any) => item.id === product.id) //verifica se o produto ja existe no cart 
     if(productExists){
       setCart(cart.map((item : any) => item.id === product.id ? {...item, quantity : item.quantity + 1} : item))
     }else{
       setCart([...cart, {...product, quantity : 1}])
     }
    //  setCart([...cart, product]) //adiciona o produto ao cart
   }

    function removeProduct(product : any){
      setCart(cart.filter((item : any) => item.id !== product.id))
    }

    function incrementProduct(product : any){
     setCart(cart.map((item : any) => item.id === product.id ? {...item, quantity : item.quantity + 1} : item))
    }

    function decrementProduct(product : any){
      setCart(cart.map((item : any) => item.id === product.id ? {...item, quantity : item.quantity - 1} : item))
      if(product.quantity === 1){
        setCart(cart.filter((item : any) => item.id !== product.id))
      }
    }

    function totalProducts(){
      let total = cart.reduce((total : any, product : any) => total + product.quantity * product.price, 0);
      setTotal(total)
    }

    function Comprafinalizar(){
      alert("Compra finalizada com sucesso")
    }

    return(
      <div>
        <CartContext.Provider value={{ cart , addProduct, removeProduct, incrementProduct, decrementProduct, totalProducts, total, Comprafinalizar}}>
            {children}
        </CartContext.Provider>
      </div>


    )
 }