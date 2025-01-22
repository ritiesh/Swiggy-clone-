import { useState } from "react";
import { Link } from "react-router-dom"
import Logo from "../assest/img/logo1.png"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/Usercontext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/"><img className="h-28 p-2 sm:max-2xl" alt="nothing" src={Logo} ></img></a>
)
const Header = () => {

  const { user } = useContext(UserContext)
  const isOnline = useOnline()
  const [loggedIn, setLoggedIn] = useState(true)

  const cartItems=useSelector(store=>store.cart.items)
  console.log(cartItems)
  return (
    <div className="flex justify-between bg-white shadow-md">
      <Title />
      <div>
        <ul className="flex py-10">
          <li className="px-2"><Link to="/">Home</Link></li>
          <Link to="/about" ><li className="px-2">About</li></Link>
          <Link to="/contact"><li className="px-2">contact</li></Link>
          
          {/* <Link to="/instamart"><li className="px-2">Instamart</li></Link> */}
          <Link to="/cart"><li className="px-2">cart - {cartItems.length} items</li></Link>
        </ul>
      </div>

      <div className="m-5 p-5">
      {isOnline ? '💓' : '❣️'}
      </div>
      <p className="p-10 text-black-500 font-bold">Welcome,{user.name}</p>
      {loggedIn ? <button className="bg-green-500 m-7 w-20 rounded-lg" onClick={() => setLoggedIn(!loggedIn)}>Logout</button> : <button className="bg-red-500 m-7 w-20 rounded-lg" onClick={() => setLoggedIn(!loggedIn)}>Login</button>}


    </div>
  )
}

export default Header;