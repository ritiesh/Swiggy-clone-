import { useState } from "react";
import { Link } from "react-router-dom"
import Logo from "../assest/img/logo1.png"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/Usercontext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/"><img className="h-16 sm:h-20 p-2 transition-transform duration-200 hover:scale-105" alt="nothing" src={Logo} ></img></a>
)

const Header = () => {


  const { user } = useContext(UserContext)
  const isOnline = useOnline()
  const [loggedIn, setLoggedIn] = useState(false)



  const cartItems = useSelector(store => store.cart.items)
  console.log(cartItems)
  return (
    <div className="flex justify-between items-center bg-white shadow-lg p-4 md:px-8 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <Title />

        <div>
          <ul className="hidden sm:flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-blue-600 transition-colors duration-200">
              <Link to="/">Home</Link>
            </li>
            {/* <Link to="/about" ><li className="hover:text-blue-600 transition-colors duration-200">About</li></Link> */}
            {/* <Link to="/contact"><li className="hover:text-blue-600 transition-colors duration-200">contact</li></Link> */}

            {/* <Link to="/instamart"><li className="px-2">Instamart</li></Link> */}
            <Link to="/cart"><li className="hover:text-blue-600 transition-colors duration-200">cart - {cartItems.length} items</li></Link>
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          {isOnline ? '💓' : '❣️'}
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Welcome,
            <span className="text-blue-600">{user.name}</span>
          </p>
        </div>
        <div>
          {loggedIn ?
            (<button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200" onClick={() => setLoggedIn(!loggedIn)}>Logout
            </button>) :
            (<button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200" onClick={() => setLoggedIn(!loggedIn)}>Login
            </button>)}
        </div>
      </div>

    </div>
  )
}

export default Header;