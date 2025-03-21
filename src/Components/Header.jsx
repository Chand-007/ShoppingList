import '../Styles/Header.css'

export default function Header({handleAddingItem,addedItem,setAddedItem}){
    

    return(
        <div className="header-container">
           

         <h1>Shopping List</h1>

         <div className="input">

                            <input type="text" 
                            value={addedItem} 
                            onChange={(e)=>setAddedItem(e.target.value)}/>

                            <button onClick={handleAddingItem}>Add New Item</button>
         </div>

            
         
             
        </div>
    )
}