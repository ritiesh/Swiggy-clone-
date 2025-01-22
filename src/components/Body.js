import { useEffect, useState } from "react";

import Restrocard from "./Restrocard"
import Skimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { filterData } from "../utils/helper"
import { useContext } from "react";
import UserContext from "../utils/Usercontext";


const Body = () => {
  const [allrestaurent, setallRestaurent] = useState([])
  const [filterrestaurent, setfilterRestaurent] = useState([])
  const [searchText, setSearchText] = useState("")
  const { user, setUser } = useContext(UserContext)


  useEffect(() => {
    console.log("hello")
    getfetchmethod()
  }, [])

  async function getfetchmethod() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667")
    const json = await data.json()


    // console.log(json.data)
    const rest = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setallRestaurent(rest)
    setfilterRestaurent(rest)
  }



  //conditional rendering
  //if restaurent has no data load shimmer UI
  //if restaurent has data load actual UI
  // if(filterrestaurent.length===0)return <h1>No result found!!</h1>
  //  if(allrestaurent.length===0)return null

  return (allrestaurent.length === 0) ? <Skimmer /> : (
    <>
      <div className="px-2 py-2 my-2 m-96">
        <input
          type="text"
          className="focus:bg-pink-100 border-2 h-9 w-96 "
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)
          }

        >
        </input>
        <button className="  bg-orange-500 h-9 text-white" onClick={() => {
          // console.log(searchText)
          const data = filterData(searchText, allrestaurent)
          console.log(data)
          setfilterRestaurent(data)
        }
        }>search</button>
        {/* <input value={user.email} onChange={e => setUser({
          ...user,
          email: e.target.value
        })}></input>
        <input value={user.name} onChange={e => setUser({
          ...user,
          name: e.target.value,

        })}></input> */}
      </div>
      <div className="flex flex-wrap bg-gray-400">
        {filterrestaurent?.map((restaurentList) => {
          return <Link to={"/restaurent/" + restaurentList.info.id} key={restaurentList.info.id}><Restrocard {...restaurentList.info} /></Link>
        })}
      </div>
    </>
  )
}

export default Body;