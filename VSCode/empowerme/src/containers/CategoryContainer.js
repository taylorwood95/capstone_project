import React, { useState, useEffect } from 'react'
import CategoryList from '../components/category/CategoryList';
import Category from '../components/category/Category';
import CategoryForm from '../components/category/CategoryForm'

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

    const addCategory = (category) => {
        setCategories([...categories, category])

    }

    return (
    <div>

        <CategoryList categories={categories} onCategoryClick={onCategoryClick}/>
        <div>
            {/* {selectedCategory ? <Category categories={categories} category={selectedCategory}/> : null} */}
        </div>
        <div>
             <p>BUtton for new category on onClick</p>
             <CategoryForm addCategory={addCategory}/>
        </div>
    </div>
    )
}

export default CategoryContainer