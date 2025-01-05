import { useRouteError } from "react-router-dom";


const Error = () => {
  const arr = useRouteError()

  return (
    <div>
      <hi>Oops!!!</hi>
      <h2>Page not found</h2>
      <h2>{arr.status + ":" + arr.statusText}</h2>
    </div>
  )
}

export default Error;