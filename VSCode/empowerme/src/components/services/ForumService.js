const baseURL = 'http://localhost:8080/api/forum'

const ForumService =  {
  getBookings() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addBooking(forum) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(forum),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateBooking(forum) {
    return fetch(baseURL + forum.id, {
      method: 'PUT',
      body: JSON.stringify(forum),
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

export default ForumService;