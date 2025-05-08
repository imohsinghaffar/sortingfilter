import './App.css'
import CartDetails from './components/AddToCart/CartDetails'
import CartDataProvider from './components/Cart Item/CartDataProvider'
import CounterProvider from './components/Cart Item/CounterProvider'
import RouterApp from './routerApp'

function App() {


  return (
    <>
   <CartDataProvider>
    <CounterProvider>
    
        <RouterApp />
       
    </CounterProvider>
    </CartDataProvider>
 
    </>
  )
}

export default App
