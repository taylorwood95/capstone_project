const baseURL = 'http://localhost:8080/api/affirmations'

const AffirmationService =  {
  getAffirmations() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addAffirmation(affirmation) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(affirmation),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateAffirmation(affirmation) {
    return fetch(baseURL + affirmation.id, {
      method: 'PUT',
      body: JSON.stringify(affirmation),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deleteAffirmation(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};

export default AffirmationService;