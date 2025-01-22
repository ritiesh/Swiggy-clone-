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
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,areaName
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
    <div className="flex p-2 m-4">
      <div className="w-96">
        <h1>Restaurent id:{id}</h1>

        <h1 className="font-bold text-base p-1">{name}</h1>
        <img src={IMG_URL + cloudinaryImageId} alt="logo" width={200} height={100}></img>
        <h2>{areaName}</h2>
        <div className="bg-green-500 w-12  text-sm">
      <p>{avgRatingString + " "}⭐</p>
      </div>
      </div>
      <div className="m-10 p-2 w-4/5">
        <h1><b>Menu</b></h1>
        {itemCards.length ? (
          itemCards.map((item) => {
            const {
              id,
              name,
              price,
              defaultPrice,
              ratings,
              imageId,
              description,
            } = item.card.info;
            return (
              <div className="border-2 p-2 m-1">
                <div className="flex">
                <div>
            <h2 className="font-bold">{name}</h2>
            <img src={IMG_URL + imageId} alt="logo" width={100} heigth></img>
            <p>{description}</p>
            </div>
            <div>
            <button className="bg-green-500 text-white p-2 m-2 " onClick={() => handleAddItem(item.card.info)}>AddItem</button>
            </div>
            </div>
            </div>)
          })) : <h2>No items available</h2>}
      </div>


    </div>
  )
}
export default RestaurentMenu;