import { useState} from 'react'

export default function UserForm(){
    const [inputValue, setInputValue ] = useState ('posez votre question ici')
    
    function checkValue (value){
        if(!value.includes('f')){
            setInputValue(value)
        }
    }
    return (
        <div>
            
           <textarea 
           value={inputValue}
           onChange={(e) => checkValue(e.target.value)}
           
            />
            <button onClick={() => alert(inputValue)}> Alertez moi </button>  
            
        </div>
    )
}


