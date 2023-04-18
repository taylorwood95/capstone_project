import React from 'react'

const Category = ({categories}) => {
    
    const affList = categories[0].affirmations.map((affirmation, index)=>{
        return affirmation.affirmation
    });

    return (
    <div>
        <ul>{affList}</ul>

    </div>
    )
}

export default Category;