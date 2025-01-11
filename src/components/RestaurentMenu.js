import { useParams } from "react-router-dom"
import { IMG_URL } from "../constant"
import Shimmer from "./Shimmer"
import useRestaurent from "../utils/useRestaurent.js"


const RestaurentMenu = () => {
  const params = useParams()
  const { id } = params
  

  const restaurent=useRestaurent(id)


 
  return (!restaurent) ? <Shimmer /> : (
    <div className="Menu">
      <div >
        <h1>Restaurent id:{restaurent.id}</h1>

        <h1>{restaurent.name}</h1>
        <img src={IMG_URL + restaurent.cloudinaryImageId} alt="logo"></img>
        <h2>{restaurent.areaName}</h2>
        <h2>{restaurent.avgRating}</h2>
      </div>

      <div >
        <h1>Menu</h1>
        <ul>
          <li>Chicken 65</li>
          <li>Panner Butter Masala</li>
          <li>Fish</li>
        </ul>
      </div>
    </div>
  )
}
export default RestaurentMenu;