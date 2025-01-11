import { useEffect, useState } from "react"

import { FETCH_MENU_URL_1, FETCH_MENU_URL_2 } from "../constant"
const useRestaurent = (id) => {

  const [restaurent, setRestaurent] = useState(null)
  useEffect(() => {
    getRestaurentMenu()
  }, [])
  async function getRestaurentMenu() {
    const data = await fetch(FETCH_MENU_URL_1 + id + FETCH_MENU_URL_2)

    const json = await data.json()
    const card = json?.data?.cards[2]?.card?.card?.info;
    // console.log(card)
    // console.log(json.data)
    setRestaurent(card)

  }
  return restaurent

}

export default useRestaurent;