import React from 'react'
import { Link } from 'react-router-dom';


const CategoryDetail = ({category, onCategoryClick}) => {
    
    const handleClick = () => {
        onCategoryClick(category)
    }
    
    return (
    <div>
    <li>{category.title}</li>
    <p>Category Detail</p>
    
    <button onClick={handleClick}>Select</button>

    </div>
    )
}

export default CategoryDetail;