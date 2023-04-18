import React from 'react'

const Category = ({categories}) => {
    
    const affList = categories[0].affirmations.map((affirmation, index)=>{
        return affirmation.affirmation
    });

    return (
    <div>

        <ul>{affList}</ul>
        <input type='text'/>
        <button>add</button>

    </div>
    )
}

export default Category;