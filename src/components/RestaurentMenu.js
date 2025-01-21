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
    sla,
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
    <div className="flex p-2 m-2">
      <div >
        <h1>Restaurent id:{id}</h1>

        <h1>{restaurent.name}</h1>
        <img src={IMG_URL + cloudinaryImageId} alt="logo" width={200} height={100}></img>
        <h2>{restaurent.areaName}</h2>
        <h2>{restaurent.avgRating}</h2>
      </div>
      <div className="m-10 p-2">
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
              <div>
            <h2>{name}</h2>
            <button className="bg-green-500 text-white p-2 m-2" onClick={() => handleAddItem(item.card.info)}>AddItem</button>
            </div>)
          })) : <h2>No items available</h2>}
      </div>


    </div>
  )
}
export default RestaurentMenu;