const createPostHandler = async (event) => {
    event.preventDefault();
  
    // const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#comment-content').value.trim();
    const dataId = event.target.getAttribute('data-id');
  
    if (content && dataId) {
      const response = await fetch(`/api/posts/${dataId}/comments`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/posts/${dataId}/comments`);
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('#create-comment').addEventListener('submit', createPostHandler);