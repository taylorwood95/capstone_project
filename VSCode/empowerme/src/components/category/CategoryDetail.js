import React from 'react'
import { Link } from 'react-router-dom';


const CategoryDetail = ({category, onCategoryClick}) => {
    
    const handleClick = () => {
        onCategoryClick(category)
    }
    
    return (
    <div>
    <li>{category.title}</li>
    {/* <Link to="/affirmations-list"> */}
    <button onClick={handleClick}>Select</button>
    {/* </Link> */}
    </div>
    )
}

export default CategoryDetail;