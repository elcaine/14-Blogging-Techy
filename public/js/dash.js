const delButtonHandler = async (event) => {
  event.stopPropagation();
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dash');
    } else {
      console.log('Failed to delete project');
    }
  }
};

const updateButtonHandler = async (event) => {
  event.stopPropagation();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    document.location.replace(`/post/update/${id}`);
  }
};

// This caputures button clicked to initiate add-comment (takes to add-comment-form)
const addCommentHandler = async (event) => {
  event.preventDefault();
  const did = await event.currentTarget.id;
  if(!did){ return;}
  else{
    document.location.replace(`/comment/${did}`);
  }
};

// Create/add comment to blog post
$('.comment-btn').on('click', addCommentHandler);

// Delete post from creator's dashboard
$('.project-list .btn-danger').on('click', delButtonHandler);

// Update post from creator's dashboard
$('.update').on('click', updateButtonHandler);

// Display clicked blog
$('#blog').on('click', 'div', async (event)=>{
    event.preventDefault();
    const id = event.currentTarget.id;
    if(!id){ return;}
    else{
        document.location.replace(`/post/${id}`);
    } 
});

// Create blog
$('#add-blog').on('click', async (event)=>{
  event.preventDefault();
  document.location.replace(`/post/new`);
});
