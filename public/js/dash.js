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
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log('id in dash.js: ', id);
    document.location.replace(`/post/update/${id}`);

  }
};

// This caputures button clicked to initiate add-comment (takes to add-comment-form)
const addCommentHandler = async (event) => {
  // console.log('Add comment button event: \t', event);
  const did = event.target.getAttribute('data-id');
  document.location.replace(`/comment/${did}`);
};

$('#comment-btn').on('click', addCommentHandler);

// Delete post from creator's dashboard
$('.project-list .btn-danger').on('click', delButtonHandler);

// Update post from creator's dashboard
$('.update').on('click', updateButtonHandler);//()=>{document.location.replace('/post/update');});

// Display clicked blog
$('#blog').on('click', 'div', async (event)=>{
    event.preventDefault();
    const id = event.currentTarget.id;
    if(!id){ return;}
    else{
        document.location.replace(`/post/${id}`);
    } 
});

$('#add-blog').on('click', async (event)=>{
  event.preventDefault();
  document.location.replace(`/post/new`);
});





// const updateButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/blogs/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ title, contents }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/dash');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };
