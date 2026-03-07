import { useContext } from "react";
import { CartContext } from "../../context/context";
import axios from "axios";
import { useEffect, useState } from "react";
export function Home() {
  const { addProduct, removeProduct } = useContext(CartContext) as any
  const [products, setProducts] = useState([]);

  useEffect(() => {
     async function getProducts() {
       const response = await axios.get("http://localhost:3000/products");
       setProducts(response.data);
      //  setProducts(Array.isArray(response.data) ? response.data : [])
     }
      getProducts();
  }, []);
  

  return(
     <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
       {products.map((product : any) => (
          <section className="flex flex-col border rounded-lg p-5" key={product.id}>
            <img className=" w-full h-40 object-cover" src={product.cover} alt="produtos do petshop" />
            <h1 className="font-bold mb-4 text-2xl">{product.title}</h1>
            <p className="mb-4 ">{product.description}</p>
            <span className="font-bold">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            <button className="border rounded-2xl px-4 py-2 cursor-pointer mt-4" onClick={() => addProduct(product)}>Adicionar ao carrinho</button>
          </section>
       ))}
     </div>        
  )
   
}

export default Home;
