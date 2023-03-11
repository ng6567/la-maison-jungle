import '../styles/Categories.css'


function Categories ({setActiveCategories, Categories, activeCategories}){
    return(
        <div className='.lmj-categories'>
            <select 
                value={activeCategories}
                onChange={(e) => setActiveCategories (e.target.value)}
                className='lmj-categories-select'
                >
                <option value=''>---</option>
                {Categories.map((cat) =>(
                    <option key={cat} value={cat}>
                        {cat}</option>
                ))}
                </select>
                <button onClick={() => setActiveCategories('')}>Réinitialiser</button>
            
        </div>

    )    
    
}


export default Categories