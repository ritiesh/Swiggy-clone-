

import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import UserContext from "./utils/Usercontext"

import {Provider} from "react-redux"
import store from "./utils/store"



function App() {
  const [user, setUser] = useState({
    name: "ritiesh varatharajan",
    email: "ritiesh123@gmail.com"
  })
  return (
    <Provider store={store}>
      <UserContext.Provider value={{user:user,setUser:setUser}}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
