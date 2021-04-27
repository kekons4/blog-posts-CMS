const createComment = async(event) => {
    event.preventDefault();

    const body = document.querySelector('#body').value.trim();
    const user_id = document.querySelector('#create-comment').getAttribute('data-user');
    const blog_id = document.querySelector('#create-comment').getAttribute('data-blog');

    const response = await fetch('/api/comments/create', {
        method: 'POST',
        body: JSON.stringify({ body, user_id, blog_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/blogs/${blog_id}`);
      } else {
        alert('Failed create new comment');
      }
};

document.querySelector('.create-comment').addEventListener('submit', createComment);