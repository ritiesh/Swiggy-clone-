import { IMG_URL } from "../constant";


const Restrocard = ({ cloudinaryImageId, name, avgRating, cuisines }) => {

  return (
    <div className="w-52 bg-green-100 m-2">
      <img alt="none" src={IMG_URL + cloudinaryImageId}></img>
      <h1 className="font-bold text-2xl">{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{avgRating}stars</h3>
    </div>
  )
}

export default Restrocard;