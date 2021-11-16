async function viewCmtbtn(id) {
    const x = id;

    if (id) {
        const response = await fetch(`/post/${x}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json'} 
        });
  
        if (response.ok) {
            document.location.replace(`/post/${x}`);
        } else {
            console.log(response.statusText);
        }
    }
};