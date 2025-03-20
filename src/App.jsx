import DisplayItems from "./Components/DisplayItems"
import Header from "./Components/Header"
import './App.css'
import { useState } from "react"
import {v4 as uuidv4} from 'uuid'


function App() {

  const [addedItem,setAddedItem] = useState("")
  const [checkbox,setCheckbox] = useState(false)
  const [totalItems,setTotalItems] = useState([])

  function handleAddingItem(e){
    const newItem = {
      id:uuidv4(),
      title:addedItem,
      bought:false,
    }

    const newTotalItems= [...totalItems,newItem]
    setTotalItems(newTotalItems)
    setAddedItem("")
  }

  function handleCheckboxChange(e){
    const newCheckboxChange = totalItems.map((item)=>{
      if(item.id === e.id){
        return({
          ...item,
          bought:!item.bought
        })
      }
      else{
        return item
      }
    })
    setTotalItems(newCheckboxChange)
  }

  return (
    <div className="total-container">
      <header>
        <Header 
        handleAddingItem={handleAddingItem} 
        addedItem={addedItem} 
        setAddedItem={setAddedItem}
        />
      </header>
      <main>
        <DisplayItems 
        totalItems={totalItems}
        handleCheckboxChange={handleCheckboxChange}/>
      </main>
    </div>
  )
}

export default App
