import { useState } from "react"

const Section = ({ title, description, isVisible,setVisible }) => {



  return (
    <div>

      <div className="border-2 border-black  m-2">
        <h2 className="font-bold p-2">{title}</h2>
        {isVisible ? <button onClick={() => setVisible(false)} className="cursor-pointer underline p-2">hide</button> : <button onClick={() => setVisible(true)} className="cursor-pointer underline p-2">show</button>}


        {isVisible && <p className="p-2">{description}</p>}
      </div>
    </div>
  )
}




const Instamart = () => {
  const [visibleconfig, setVisibleconfig] = useState("about")
  return (
    <div>
      <h1 className="font-bold text-3xl p-2">Instamart</h1>
      <Section title={"About Instamart"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage"} isVisible={visibleconfig==="about"}
        setVisible={()=>setVisibleconfig("about")} />

      <Section title={"Products"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage"} isVisible={visibleconfig==="team"}
        setVisible={()=> setVisibleconfig("team")} />

      <Section title={"Careers"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage"} isVisible={visibleconfig==="carrer"}
        setVisible={()=>setVisibleconfig("carrer")}/>
    </div>
  )
}

export default Instamart;