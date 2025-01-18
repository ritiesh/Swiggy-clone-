

import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import UserContext from "./utils/Usercontext"





function App() {
  const [user, setUser] = useState({
    name: "ritiesh varatharajan",
    email: "ritiesh123@gmail.com"
  })
  return (
    <React.Fragment>
      <UserContext.Provider value={{user:user,setUser:setUser}}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
