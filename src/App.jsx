import "./styles/App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar.jsx";
import Cart from "./components/Cart.jsx";
import ItemDetailsContainer from "./components/ItemDetailsContainer";
import ItemListcontainer from "./components/ItemListcontainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemFooter from "./components/ItemFooter.jsx";
import NotFound from "./components/NotFound.jsx";
import Checkout from "./components/Checkout.jsx";
import { CarritoProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
//este provedor va a encerrar toda la app
  
export  const App = () => {
  return (
   /* lo que hice fue que 
   use el props de test en app*/ 

   <div className="colortitulo">
 <h1 className="colortitulo " >tienda vicio</h1>
 <BrowserRouter>

<CarritoProvider> 

<NavBar/>
<ToastContainer/>
<Routes>

<Route  path="/" element={  <ItemListcontainer />}  />
<Route   path="/categoria/:cid"   element={<ItemListcontainer/>}/>
<Route path="/Cart" element={<Cart/>} />
<Route  path="/product/:pid"  element ={<ItemDetailsContainer/>} />
<Route  path="/checkout"  element ={<Checkout/>} />
<Route  path="*" element ={<NotFound/>} />


</Routes>

</CarritoProvider>
</BrowserRouter>
<ItemFooter/>
</div>
 
 

   
  )
}
export default App


