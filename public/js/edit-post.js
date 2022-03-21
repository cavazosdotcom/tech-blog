const editPostHandler = async (event) => {
  event.preventDefault();
  // html selectors
  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();
  const id = event.target.getAttribute('data-id');

  // fetch this query string
  const response = await fetch(`/api/posts/${id}`, {
    // Put method tp edit, turn body readable
    method: 'PUT',
    body: JSON.stringify({ id, title, content }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};


const deletePostHandler = async (event) => {
  event.preventDefault();
  // check if selected target has an id to delete
  if (event.target.hasAttribute('data-id')) {
    // select that id
    const id = event.target.getAttribute('data-id');
    // fetch query string
    const response = await fetch(`/api/posts/${id}`, {
      // delete method
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete project');
    }
  }
};
  
// event listeners
document.querySelector('.edit').addEventListener('click', editPostHandler);
document.querySelector('.delete').addEventListener('click', deletePostHandler);