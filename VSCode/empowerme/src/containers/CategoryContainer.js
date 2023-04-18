import React, { useState, useEffect } from 'react'
import CategoryList from '../components/category/CategoryList';

const CategoryContainer = () => {
    const url = "http://localhost:8080/api/categories"
    const [categories, setCategories] = useState ([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const getCategories = () => {
        fetch(url)
        .then(results => results.json())
        .then(categoryData => setCategories(categoryData))
        console.log(categories);
    }

    useEffect(() => {
        getCategories();
    },[])

    const onCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    return (
    <div>
        <CategoryList categories={categories}/>
    </div>
    )
}

export default CategoryContainer