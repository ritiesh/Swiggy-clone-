import { IMG_URL } from "../constant";


const FoodItem=({description,price,imageId,name,defaultPrice})=>{
  return(
    
    <div className="w-64 bg-white m-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 h-80 overflow-hidden">
    <img alt="none" src={IMG_URL + imageId} className="w-full h-40 rounded-t-2xl object-cover"></img>
    <div className="p-4 flex flex-col justify-between h-40">
    <h1 className="font-semibold text-lg text-gray-800 truncate">{name}</h1>
    <h3 className="text-gray-500 text-sm mt-1 truncate">{description}</h3>
    {price && <p className="text-gray-800 font-medium mt-2">₹  {price/100}.00</p>}
    {defaultPrice && <p className="text-gray-800 font-medium mt-2">₹ {defaultPrice/100}.00</p>}
    </div>
  </div>
  )
}

export default FoodItem