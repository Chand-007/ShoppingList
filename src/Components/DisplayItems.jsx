import {v4 as uuidv4} from 'uuid'
import '../Styles/DisplayItems.css'


export default function DisplayItems({totalItems,handleCheckboxChange}){
    const Item=[
        {id:uuidv4(),
            title:"Buy 4kg maida Flour",
            bought:false
        },
        {id:uuidv4(),
            title:"Buy 4kg maida Flour",
            bought:false
        },
        {id:uuidv4(),
            title:"Buy 4kg maida Flour",
            bought:false
        }
    ]

    return(
        <div className="display-items-container">
            <div className='flex-center-container'>
            {totalItems.map((item)=>{
                return(
                    <div className='item-container' key={item.id}>
                       <input type="checkbox" 
                       checked={item.bought} 
                       onChange={()=>handleCheckboxChange(item)}/>
                       <h3 style={{"text-decoration":`${item.bought?"line-through":""}`}}>{item.title}</h3>
                    </div>
                )
            })}
            </div>
            
        </div>
    )
}