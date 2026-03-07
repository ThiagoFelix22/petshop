import {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import { CartContext } from "../../context/context";
export function Header() {
  const { cart } = useContext(CartContext) as any

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black text-white h-20">
      
      <Link to="/" className="text-white text-2xl font-medium">
        Petshop
      </Link>

      <Link to="/cart" className=" flex items-center gap-2 text-white">
        <FaShoppingCart size={24} className='mt-1'/>
        {cart.length > 0 && <span>{cart.length}</span>}
      </Link>

    </header>
  )
}

export default Header