import { useState } from "react"
import Parent from "./components/props/Parent"
import Modal from "./components/portals/Modal";


function App() {
  const[user] = useState({
    name : "Atishhhhh",
    age : 21
  })

  const[isModalOpen, setIsModalOpen] = useState(false);

  return (

    <>
      <section className="py-5">
        <div className="container  border">
          <div className="row text-center">
            <h1>Hiii I am App Component</h1>
            <Parent user={user}></Parent>
          </div>
        </div>
      </section>
        <div className="container text-center position-relative">
          <h6>Welcome To React Portal</h6>
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Open Modal</button>
          <Modal isOpen={isModalOpen} >
            <div className="position-relative ">
              <h6>You Are inside Modal</h6>
            </div>
          </Modal>
              <button className="btn btn-secondary position-relative" onClick={() => setIsModalOpen(false)}>Close Modal</button>
        </div>
    </>
  )
}

export default App
