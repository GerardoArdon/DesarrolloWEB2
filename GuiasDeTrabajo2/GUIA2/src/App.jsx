import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { db } from './data/db'
import { Guitar } from './components/Guitar'

function App() {


  function initialCart(){
    const localStorageCart=localStorage.getItem('cart')
    return localStorageCart? JSON.parse(localStorageCart):[]
  }

  const [data, setData] = useState(db)
  const [cart, setCart]=useState(initialCart)

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])

  function addToCart(guitar){
    const itemIndex=cart.findIndex((item)=>guitar.id===item.id)
    console.log(itemIndex);
    if(itemIndex===-1){ //Ese articulo aun no existe en el carrito
      guitar.quantity=1;
      setCart([...cart,guitar ])
    }
    else{ //Si la guitarra ya se habia aniadado al carrito
      const updatedCart=[...cart] //Creando una copia de la variable de estado
      updatedCart[itemIndex].quantity++;
      setCart(updatedCart);
    }


  }

  function calculateTotal(){
    /*let total=0;
    for (const guitar of cart) {
      total+=guitar.price * guitar.quantity;
    }*/
    let total= cart.reduce((total,item)=>total+item.price*item.quantity,0)
    return total;
  }





  return (
    <>

      <Header cart={cart} total={calculateTotal()}/>
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar)=>(
            <Guitar guitar={guitar} key={guitar.id} addToCart={addToCart} />
          ))}

        </div>
      </main>
      <Footer />

    </>
  )
}

export default App
