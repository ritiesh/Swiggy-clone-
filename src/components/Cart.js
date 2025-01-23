import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch=useDispatch()
  const handleCart=()=>{
    dispatch(clearCart())
  }
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Cart - {cartItems.length} items</h1>
      <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors" onClick={()=>handleCart()}>clear cart</button>
      <div className="flex flex-wrap gap-6 mt-6">
      {cartItems.map((item)=><FoodItem key={item.id}{...item} />)}
      </div>
    </div>

  )

}

export default Cart;