const createPost = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
    const user_id = document.querySelector('#create-post').getAttribute('data-item');

    const response = await fetch('/api/blogs/create', {
        method: 'POST',
        body: JSON.stringify({ title, body, user_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed create new post');
      }
};

document.querySelector('#create-post').addEventListener('click', createPost);