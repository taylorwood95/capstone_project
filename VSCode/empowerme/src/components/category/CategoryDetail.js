import React from 'react'

const CategoryDetail = ({category, onCategoryClick}) => {
    
    const handleClick = () => {
        onCategoryClick(category)
    }
    
    return (
    <div>
    <li>{category.title}</li>
    <button onClick={handleClick}>Select</button>
    </div>
    )
}

export default CategoryDetail;