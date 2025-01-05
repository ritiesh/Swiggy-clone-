import { useEffect, useState } from "react";
import { restaurentList } from "../constant";
import Restrocard from "./Restrocard"
import Skimmer from "./Shimmer"
import { Link } from "react-router-dom"


function filterData(searchText, restaurent) {
  return restaurent.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

}
const Body = () => {
  const [allrestaurent, setallRestaurent] = useState([])
  const [filterrestaurent, setfilterRestaurent] = useState([])
  const [searchText, setSearchText] = useState("")


  useEffect(() => {
    console.log("hello")
    getfetchmethod()
  }, [])

  async function getfetchmethod() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667")
    const json = await data.json()


    console.log(json)
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
      <div className="Search-container">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)
          }

        >
        </input>
        <button className="search-button" onClick={() => {
          // console.log(searchText)
          const data = filterData(searchText, allrestaurent)
          console.log(data)
          setfilterRestaurent(data)
        }
        }>search</button>
      </div>
      <div className="restro">
        {filterrestaurent?.map((restaurentList) => {
          return <Link to={"/restaurent/" + restaurentList.info.id} key={restaurentList.info.id}><Restrocard {...restaurentList.info} /></Link>
        })}
      </div>
    </>
  )
}

export default Body;