const newCommFormHandler = async (event) => {
    event.preventDefault();
    const contents = $('#comment-contents').val();
    const blog_id = event.target.id;
    if (contents) {
        console.log('New comment being made');
        const response = await fetch(`/api/comms`, {
        method: 'POST',
        body: JSON.stringify({ contents, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
        });

        if (response.ok) {
          document.location.replace(`/post/${blog_id}`);
        } else {
          alert('Failed to create comment');
        }
    }
  };

  $('.new-project-form').on('submit', newCommFormHandler);