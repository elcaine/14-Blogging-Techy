const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value.trim();
    const contents = document.querySelector('#blog-contents').value.trim();

    if (title && contents) {
      let response; 
      const idd = $('#idd').text();
      
      if(idd){ // UPDATE existing blog
        console.log('Established blog being restablished');
          response = await fetch(`/api/blogs/${idd}`, {
            method: 'PUT',
            body: JSON.stringify({ title, contents }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        
        if (response.ok) {
          document.location.replace('/dash');
        } else {
          alert('Failed to update blog');
        }
      } else { // NEW BLOG created
        console.log('New blog being made');
         const response = await fetch(`/api/blogs`, {
          method: 'POST',
          body: JSON.stringify({ title, contents }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          document.location.replace('/dash');
        } else {
          alert('Failed to create blog');
        }
      }
    }
  };

  $('#new-blog-form').on('submit', newFormHandler);