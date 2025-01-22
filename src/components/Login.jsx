import { useState } from "react"

const Login=()=>{
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  function handleLogin=()=>{
    
  }
    return(
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          
          </div>
          <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          
          </div>
          {error &&<p style={{ color: "red" }}>{error}</p> }
          <button type="submit">Login</button>
        </form>
      </div>
    )
}

export default Login