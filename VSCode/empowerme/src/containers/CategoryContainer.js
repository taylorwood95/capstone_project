import React, { useState, useEffect } from 'react'

const CategoryContainer = () => {
    const url = "http://localhost:8080/api/categories"
    const [categories, setCategories] = useState ([]);

    const getCategories = () => {
        fetch(url)
        .then(results => results.json())
        .then(categoryData => setCategories(categoryData))
    }

    useEffect(() => {
        getCategories();
    },[])

    return (
    <div>
        CategoryContainer
    </div>
    )
}

export default CategoryContainer