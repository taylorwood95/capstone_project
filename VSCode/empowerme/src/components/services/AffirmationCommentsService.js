const baseURL = 'http://localhost:8080/api/affirmationsComments'

const AffirmationsCommentService =  {
  getAffirmationComments() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addAffirmationComment(affirmationComment) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(affirmationComment),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateAffirmationComment(affirmationComment) {
    return fetch(baseURL + affirmationComment.id, {
      method: 'PUT',
      body: JSON.stringify(affirmationComment),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deleteAffirmationComment(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};

export default AffirmationsCommentService;