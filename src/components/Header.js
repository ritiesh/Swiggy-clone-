import { useState } from "react";
import { Link } from "react-router-dom"
import Logo from "../assest/img/logo1.png"
import useOnline from "../utils/useOnline"

const Title = () => (
  <a href="/"><img className="h-28 p-2 sm:max-2xl" alt="nothing" src={Logo} ></img></a>
)
const Header = () => {
  const isOnline = useOnline()
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <div className="flex justify-between bg-green-100 shadow-md sm:bg-purple-300">
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
      {loggedIn ? <button onClick={() => setLoggedIn(!loggedIn)}>Logout</button> : <button onClick={() => setLoggedIn(!loggedIn)}>Login</button>}


    </div>
  )
}

export default Header;