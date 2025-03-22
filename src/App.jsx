import DisplayItems from "./Components/DisplayItems"
import Header from "./Components/Header"
import './App.css'
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addToArray } from "./state/Slices/CounterSlice"
import {v4 as uuidv4} from 'uuid'




function App() {





  const totalArrayState = useSelector((state)=>state.total)
  const dispatch = useDispatch()



  const [addedItem,setAddedItem] = useState("")


  function handleAddingItem(e){
    if(addedItem === ""){
      alert("Input can't be empty")
      return
    }

    const newItem = {
      id:uuidv4(),
      title:addedItem,
      bought:false,
    }



    dispatch(addToArray(newItem))

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
    dispatch(addToArray(newCheckboxChange))
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
        totalItems={totalArrayState}
        handleCheckboxChange={handleCheckboxChange}/>
      </main>
    </div>
  )
}

export default App
