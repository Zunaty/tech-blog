// Waiting for comment information
async function addCommentFormHandler(event) {
    event.preventDefault();
  
    const commentText = document.querySelector('#addComment-title').value.trim();
    const postID = document.querySelector('#addComment-id').value.trim();

    const addcommentInfo = {
        title: posttitle,
        body: posttext,
        date: Date.now()
    };

    const x = JSON.stringify(addcommentInfo);

    if (commentText && postID) {
        const response = await fetch('/api/comment/', {
            method: 'post',
            body: x,
            headers: { 'Content-Type': 'application/json' }
        });
  
        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            console.log(response.statusText);
        }
    }
};

document.querySelector('.addCommentForm').addEventListener('submit', addCommentFormHandler);