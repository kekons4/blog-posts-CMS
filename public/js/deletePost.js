const deletePost = async (event) => {
    event.preventDefault();
    const id = $(event.target).attr('data-id');
    console.log(id);
    const response = await fetch('/api/blogs/delete', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert('Failed delete post');
      }
};

$('#my-posts').on('click', '#delete-post',deletePost);