import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { IMG_URL } from "../constant"
import Shimmer from "./Shimmer"


const RestaurentMenu = () => {
  const params = useParams()
  const { id } = params
  const [restaurent, setRestaurent] = useState(null)


  useEffect(() => {
    getRestaurentMenu()
  }, [])
  async function getRestaurentMenu() {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId=" + id + "&submitAction=ENTER")

    const json = await data.json()
    const card = json?.data?.cards[2]?.card?.card?.info;
    console.log(card)
    setRestaurent(card)

  }
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