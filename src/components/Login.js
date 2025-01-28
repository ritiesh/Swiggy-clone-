import { useState } from "react"
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "12345") {
      setError("");
      navigate('/');

    } else {
      setError("Enter the correct credentials");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          type="text" 
          placeholder="Enter the username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <label>Password</label>
        <input 
          type="password" 
          placeholder="Enter password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login