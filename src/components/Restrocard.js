import { IMG_URL } from "../constant";
// import { useContext } from "react";
// import UserContext from "../utils/Usercontext";

const Restrocard = ({ cloudinaryImageId, name, avgRating, cuisines, areaName }) => {
  // const {user}=useContext(UserContext)
  return (
    <div className="w-64 bg-white m-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 h-80 overflow-hidden">

      <img alt="none" src={IMG_URL + cloudinaryImageId} className="w-full h-40 rounded-t-2xl object-cover"></img>
      <div className="p-4 flex flex-col justify-between h-40">
      <h1 className="font-semibold text-lg text-gray-800 truncate">{name}</h1>
      <p className="text-sm text-gray-500 truncate">{cuisines.join(",")}</p>
     
      <div className="px-2 py-1 text-sm font-bold text-black rounded">
      <p>{avgRating + " "}⭐</p>
      </div>
      
      {/* <h4 className="font-bold">{user.name}-{user.email}</h4> */}
      </div>

    </div>
  )
}

export default Restrocard;