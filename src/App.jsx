import { useState } from "react"
import Parent from "./components/props/Parent"
import Modal from "./components/portals/Modal";
import IProgrammerAssignment from "./components/IProgrammerAssignment";
import FetchApi from "./components/FetchApi";


function App() {
  const[user] = useState({
    name : "Atishhhhh",
    age : 21
  })

  const[isModalOpen, setIsModalOpen] = useState(false);

  return (

    <>
    {/* <IProgrammerAssignment></IProgrammerAssignment> */}
    <FetchApi></FetchApi>
    </>
  )
}

export default App
