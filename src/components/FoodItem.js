import { IMG_URL } from "../constant";


const FoodItem=({description,price,imageId,name})=>{
  return(
    
    <div className="w-52 bg-orange-400 m-5">
    <img alt="none" src={IMG_URL + imageId}></img>
    <h1 className="font-bold">{name}</h1>
    <h3>{description}</h3>
    <h4 className="font-bold">Ruppees : {price/100}</h4>
    
  </div>
  )
}

export default FoodItem