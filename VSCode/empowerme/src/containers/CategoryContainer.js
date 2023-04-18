import React, { useState, useEffect } from 'react'
import CategoryList from '../components/category/CategoryList';
import Category from '../components/category/Category';

const CategoryContainer = () => {
    const url = "http://localhost:8080/api/categories"
    const [categories, setCategories] = useState ([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const getCategories = () => {
        fetch(url)
        .then(results => results.json())
        .then(categoryData => setCategories(categoryData))
    }

    useEffect(() => {
        getCategories();
    },[])

    const onCategoryClick = (category) => {

        setSelectedCategory(category);
    }

    return (
    <div>

        <CategoryList categories={categories} onCategoryClick={onCategoryClick}/>
        <div>
            {selectedCategory ? <Category categories={categories} category={selectedCategory}/> : null}
        </div>
    </div>
    )
}

export default CategoryContainer