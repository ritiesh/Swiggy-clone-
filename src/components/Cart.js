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
    <div>
      <h1 className="p-2 font-bold">Cart - {cartItems.length} items</h1>
      <button className="p-2 bg-green-500 m-3 text-white" onClick={()=>handleCart()}>clear cart</button>
      <div className="flex">
      {cartItems.map((item)=><FoodItem key={item.id}{...item} />)}
      </div>
    </div>

  )

}

export default Cart;