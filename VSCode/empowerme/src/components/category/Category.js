import React from 'react'

const Category = ({categories}) => {
    
    const affList = categories[0].affirmations.map((affirmation, index)=>{
        return <li>{affirmation.affirmation}
        <input type="text"/></li>
    });

    return (
    <div>

        <ul>{affList}
        Category List
    </ul>
        
        <button>add</button>

    </div>
    )
}

export default Category;