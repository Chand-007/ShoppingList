import {v4 as uuidv4} from 'uuid'
import '../Styles/DisplayItems.css'


export default function DisplayItems({totalItems,handleCheckboxChange}){


    return(
        <div className="display-items-container">
            {totalItems.map((item)=>{
                return(
                    <div className='item-container' key={item.id}>
                       <input type="checkbox" 
                       checked={item.bought} 
                       onChange={()=>handleCheckboxChange(item)}/>
                       <h3 style=
                       {{"text-decoration":`${item.bought?"line-through":""}`}}>
                        {item.title}
                        </h3>
                    </div>
                )
            })}
            </div>
            
    )
}