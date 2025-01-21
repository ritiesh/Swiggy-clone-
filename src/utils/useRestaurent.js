import { useEffect, useState } from "react"

import { FETCH_MENU_URL_1, FETCH_MENU_URL_2, FOODFIRE_MENU_API_URL } from "../constant"
const useRestaurent = (id) => {

  const [restaurent, setRestaurent] = useState(null)
  useEffect(() => {
    getRestaurentMenu()
  }, [])
  async function getRestaurentMenu() {
    const data = await fetch(FOODFIRE_MENU_API_URL + id)

    const json = await data.json()
    console.log(json.data)
    const card = json?.data?.cards[2]?.card?.card?.info;
    // console.log(card)
    // console.log(json.data)
    setRestaurent(json?.data)

  }
  return restaurent

}

export default useRestaurent;