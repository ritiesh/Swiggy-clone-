import { useState } from "react";
import { Link } from "react-router-dom"
import Logo from "../assest/img/logo1.png"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/Usercontext";
import { useContext } from "react";

const Title = () => (
  <a href="/"><img className="h-28 p-2 sm:max-2xl" alt="nothing" src={Logo} ></img></a>
)
const Header = () => {

  const { user } = useContext(UserContext)
  const isOnline = useOnline()
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <div className="flex justify-between bg-green-100 shadow-md">
      <Title />
      <div>
        <ul className="flex py-10">
          <li className="px-2"><Link to="/">Home</Link></li>
          <Link to="/about" ><li className="px-2">About</li></Link>
          <Link to="/contact"><li className="px-2">contact</li></Link>
          <li className="px-2">cart</li>
          <Link to="/instamart"><li className="px-2">Instamart</li></Link>
        </ul>
      </div>

      {isOnline ? '🟩' : '🔴'}
      <p className="p-10 text-fuchsia-500 font-bold">{user.name}</p>
      {loggedIn ? <button className="bg-green-500 m-7 w-20 rounded-lg" onClick={() => setLoggedIn(!loggedIn)}>Logout</button> : <button className="bg-red-500 m-7 w-20 rounded-lg" onClick={() => setLoggedIn(!loggedIn)}>Login</button>}


    </div>
  )
}

export default Header;