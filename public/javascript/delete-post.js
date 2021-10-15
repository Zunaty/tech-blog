async function deletebtn(id) {
    const x = id;

    if (id) {
        const response = await fetch(`/api/posts/${x}`, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json'} 
        });
  
        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            console.log(response.statusText);
        }
    }
};