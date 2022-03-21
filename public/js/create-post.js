const createPostHandler = async (event) => {
  event.preventDefault();
  // html selector
  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();
  // if title and content are present
  if (title && content) {
    // fetch query string
    const response = await fetch('/api/posts', {
      // Post method, makes json title and content readable
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
    // if the response is okay, then refresh homepage to see new post
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#create-post').addEventListener('submit', createPostHandler);