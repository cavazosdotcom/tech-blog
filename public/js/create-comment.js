const createPostHandler = async (event) => {
  event.preventDefault();

  // const title = document.querySelector('#post-title').value.trim();\
  // selects the html we want to handle
  const content = document.querySelector('#comment-content').value.trim();
  const dataId = event.target.getAttribute('data-id');

  // If both content and dataId are present
  if (content && dataId) {
    // fetch this query string
    const response = await fetch(`/api/posts/${dataId}/comments`, {
      // POSt method, makes the json content readable
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: { 'Content-Type': 'application/json' },
    });
    // if the response is okay, then refresh the page to see the new comment
    if (response.ok) {
      document.location.replace(`/posts/${dataId}/comments`);
    } else {
      alert(response.statusText);
    }
  }
};
// event listener, submit form
document.querySelector('#create-comment').addEventListener('submit', createPostHandler);