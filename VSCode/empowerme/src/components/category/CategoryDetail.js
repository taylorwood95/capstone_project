import React from 'react'

const CategoryDetail = ({category, onCategoryClick}) => {
    
    const handleClick = () => {
        onCategoryClick(category)
    }
    
    return (
    <div>
    <li>{category.title}</li>
    <li>{category.affirmations[0].affirmation}</li>
    <button onClick={handleClick}>Select</button>
    </div>
    )
}

export default CategoryDetail