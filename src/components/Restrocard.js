import { IMG_URL } from "../constant";
// import { useContext } from "react";
// import UserContext from "../utils/Usercontext";

const Restrocard = ({ cloudinaryImageId, name, avgRating, cuisines, areaName }) => {
  // const {user}=useContext(UserContext)
  return (
    <div className="w-48 bg-white m-6 rounded-2xl h-72">
      <img alt="none" src={IMG_URL + cloudinaryImageId} className="w-64 h-36"></img>
      <h1 className="font-bold text-base p-1">{name}</h1>
      <p className="p-1">{cuisines[0] + ","+ cuisines[1]}</p>
     
      <div className="bg-green-500 w-12 m-2 text-sm">
      <p>{avgRating + " "}⭐</p>
      </div>
      
      {/* <h4 className="font-bold">{user.name}-{user.email}</h4> */}

    </div>
  )
}

export default Restrocard;