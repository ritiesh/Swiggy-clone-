import { useState } from "react";

const Title = () => (
  <a href="/"><img alt="nothing" src="https://yt3.googleusercontent.com/FFffswAYvW-eIAKgSmGh85tMKFqp6SvLSSvx3BjvqJO2seP9pJnEeXWu_5HAMi82bZnDoVBWEA=s900-c-k-c0x00ffffff-no-rj" width="100px" height="100px"></img></a>
)
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <div className="header">
      <Title />

      <nav className="nav">
        <ul>
          <li>home</li>
          <li>About</li>
          <li>cart</li>
        </ul>
      </nav>
      {loggedIn ? <button onClick={() => setLoggedIn(!loggedIn)}>Logout</button> : <button onClick={() => setLoggedIn(!loggedIn)}>Login</button>}


    </div>
  )
}

export default Header;