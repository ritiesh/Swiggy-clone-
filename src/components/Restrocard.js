import { IMG_URL } from "../constant";
import { useContext } from "react";
import UserContext from "../utils/Usercontext";

const Restrocard = ({ cloudinaryImageId, name, avgRating, cuisines}) => {
  const {user}=useContext(UserContext)
  return (
    <div className="w-52 bg-orange-400 m-5">
      <img alt="none" src={IMG_URL + cloudinaryImageId}></img>
      <h1 className="font-bold">{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{avgRating}stars</h3>
      <h4 className="font-bold">{user.name}-{user.email}</h4>
      
    </div>
  )
}

export default Restrocard;