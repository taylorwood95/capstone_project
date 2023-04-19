const baseURL = 'http://localhost:8080/api/affirmationsComments'

const AffirmationsCommentService =  {
  getBookings() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addBooking(affirmationComment) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(affirmationComment),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateBooking(affirmationComment) {
    return fetch(baseURL + affirmationComment.id, {
      method: 'PUT',
      body: JSON.stringify(affirmationComment),
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

export default AffirmationsCommentService;