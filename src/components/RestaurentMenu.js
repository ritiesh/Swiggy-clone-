import { useParams } from "react-router-dom"
import { IMG_URL } from "../constant"
import Shimmer from "./Shimmer"
import useRestaurent from "../utils/useRestaurent.js"
import { addItem } from "../utils/cartSlice.js"
import { useDispatch } from "react-redux"


const RestaurentMenu = () => {
  const params = useParams()
  const { id } = params


  const restaurent = useRestaurent(id)
  const {
    cloudinaryImageId,
    name,
    avgRatingString,areaName
  } = restaurent?.cards[2]?.card?.card?.info || {};

  const cards =
    restaurent?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let itemCards =
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];
  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (!restaurent) ? <Shimmer /> : (
    <div className="flex flex-col lg:flex-row p-6 m-4 bg-gray-50 rounded-lg shadow-lg">
      <div className="lg:w-1/3 w-full mb-6 lg:mb-0 p-4">
        <h1 className="text-xl font-bold text-gray-800 mb-2">{name}</h1>
        <img src={IMG_URL + cloudinaryImageId} alt="logo" className="w-64 h-36 rounded-lg object-cover mb-4"></img>
        <p className="text-gray-600">📍{areaName}</p>
        <div className="px-2 py-1 text-sm font-bold text-black rounded">
      <p>{avgRatingString + " "}⭐</p>
      </div>
      </div>
      <div className="lg:w-2/3 w-full p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Menu</h1>
        {itemCards.length ? (
          itemCards.map((item) => {
            const {
              
              name,
              imageId,
              price,
              defaultPrice,
              description,
            } = item.card.info;
            return (
              <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-between items-start">
                <div className="w-3/4">
            <h2 className="font-bold">{name}</h2>
            <img src={IMG_URL + imageId} alt="logo" className="w-24 h-24 rounded-lg object-cover"></img>
            {price && <p className="text-gray-800 font-medium mt-2">₹  {price/100}.00</p>}
            {defaultPrice && <p className="text-gray-800 font-medium mt-2">₹ {defaultPrice/100}.00</p>}
            
            <p className="text-gray-500 text-sm mt-1 truncate">{description}</p>
            </div>
            <div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors" onClick={() => handleAddItem(item.card.info)}>AddItem</button>
            </div>
            </div>
            </div>)
          })) : <h2 className="text-gray-500 text-lg">No items available</h2>}
      </div>


    </div>
  )
}
export default RestaurentMenu;