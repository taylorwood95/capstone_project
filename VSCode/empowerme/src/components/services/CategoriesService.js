const baseURL = 'http://localhost:8080/api/categories'

const CategoryService =  {
  getBookings() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addBooking(category) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(category),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateBooking(category) {
    return fetch(baseURL + category.id, {
      method: 'PUT',
      body: JSON.stringify(category),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deleteBooking(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};

export default CategoryService;