const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dash');
    } else {
      alert('Failed to delete project');
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
  const did = event.currentTarget.id;
  console.log('$$$$$$$$$$$$... did: ', did, '\tevent... ', event.target);
  // const did = event.target.getAttribute('data-id');
  // console.log('$$$$$$$$$$$$$$$$$$$... ', event.target, '\tdid... ', did);
  document.location.replace(`/comment/${did}`);
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
