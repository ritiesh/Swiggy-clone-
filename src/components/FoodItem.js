import { IMG_URL } from "../constant";


const FoodItem=({description,price,imageId,name})=>{
  return(
    
    <div className="w-48 bg-white m-6 ">
    <img alt="none" src={IMG_URL + imageId}></img>
    <h1 className="font-bold">{name}</h1>
    <h3>{description}</h3>
    <h4 className="font-bold">Ruppees : {price/100}</h4>
    
  </div>
  )
}

export default FoodItem