import React, { useState } from 'react'
import CategoryService from '../services/CategoriesService'

const CategoryForm = (addCategory) => {

    const [categoryData, setCategoryData] = useState("")

    const onChange =  (event) => {
       
        setCategoryData(event.target.value);
    }

    const onSubmit = (event) => {
        console.log(event.target[0].value)
        console.log(categoryData)
        event.preventDefault();
        CategoryService.addCategory(categoryData).then((data) => {
            addCategory(data)
        })
        // setCategoryData()
        
    }



    return (
    <div>
        <form onSubmit={onSubmit}>
        <h1>Add Category:</h1>
        <label htmlFor='title'>Category:</label>
        <input type="text" id="categoryname"  onChange={onChange} name="categorytitle" value={categoryData}/>
        <button type='submit'>Add Category</button>
        </form>

        
    </div>
    )
}

export default CategoryForm