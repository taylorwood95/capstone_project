import React from 'react'
import CategoryDetail from './CategoryDetail'

const CategoryList = ({categories, onCategoryClick}) => {
    const allCategories = categories.map ((category, index) => {
        return <CategoryDetail key={index} category={category} onCategoryClick={onCategoryClick}/>
    })


    return (
    <div>
        <ul>
            <p>Category List </p>
            {allCategories}
        </ul>
    </div>
    )
}

export default CategoryList