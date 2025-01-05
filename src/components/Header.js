import { useState } from "react";
import { Link } from "react-router-dom"
import Logo from "../assest/img/food.jpg"

const Title = () => (
  <a href="/"><img alt="nothing" src={Logo} width="100px" height="100px"></img></a>
)
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <div className="header">
      <Title />

      <nav className="nav">
        <ul>
          <Link to="/">home</Link>
          <Link to="/about" >About</Link>
          <Link to="/contact">Contact</Link>
          <li>cart</li>
        </ul>
      </nav>
      {loggedIn ? <button onClick={() => setLoggedIn(!loggedIn)}>Logout</button> : <button onClick={() => setLoggedIn(!loggedIn)}>Login</button>}


    </div>
  )
}

export default Header;