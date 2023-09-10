const newCommFormHandler = async (event) => {
    event.preventDefault();
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
    const contents = document.querySelector('#comment-contents').value.trim();
console.log('addcomment.js--> newCommFormHandler: ', contents);
    if (contents) {
        console.log('New comment being made');
         const response = await fetch(`/api/comms`, {
          method: 'POST',
          body: JSON.stringify({ contents }),
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
  };

  $('#new-comment-form').on('submit', newCommFormHandler);