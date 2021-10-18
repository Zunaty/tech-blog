// Waiting for post information
async function addPostFormHandler(event) {
    event.preventDefault();
  
    const posttitle = document.querySelector('#addPost-title').value.trim();
    const posttext = document.querySelector('#addPost-text').value.trim();

    const addpostInfo = {
        title: posttitle,
        body: posttext,
        date: Date.now()
    };

    const x = JSON.stringify(addpostInfo);

    if (posttitle && posttext) {
        const response = await fetch('/api/posts/', {
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

document.querySelector('.addPostForm').addEventListener('submit', addPostFormHandler);