const baseURL = 'http://localhost:8080/api/forum'

const ForumService =  {
  getPosts() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addPost(forum) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(forum),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updatePost(forum) {
    return fetch(baseURL + forum.id, {
      method: 'PUT',
      body: JSON.stringify(forum),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deletePost(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};

export default ForumService;