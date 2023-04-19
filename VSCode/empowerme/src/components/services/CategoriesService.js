const baseURL = 'http://localhost:8080/api/categories'

const CategoryService =  {
  getCategories() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addCategory(category) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(category),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateCategory(category) {
    return fetch(baseURL + category.id, {
      method: 'PUT',
      body: JSON.stringify(category),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deleteCategory(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};

export default CategoryService;