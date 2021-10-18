async function editPostFormHandler(event) {
    event.preventDefault();
  
    const posttitle = document.querySelector('#editPost-title').value.trim();
    const posttext = document.querySelector('#editPost-text').value.trim();

    const editpostInfo = {
        title: posttitle,
        body: posttext,
        date: Date.now()
    };

    const x = JSON.stringify(editpostInfo);

    if (posttitle && posttext) {
        const response = await fetch('/api/posts/', {
            method: 'put',
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

document.querySelector('.editPostForm').addEventListener('submit', editPostFormHandler);