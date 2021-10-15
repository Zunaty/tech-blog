// Waits for the login information to be inserted
async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#userEmail').value.trim();
    const password = document.querySelector('#userPass').value.trim();

    const loginInfo = {email: email, password: password};
  
    const loginData = JSON.stringify(loginInfo);

    if (email && password) {
        const response = await fetch('/api/user/login/', {
            method: 'POST',
            body: loginData,
            headers: { 'Content-Type': 'application/json'} 
        });
  
        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            console.log(response.statusText);
        }
    }
};

document.querySelector('.loginForm').addEventListener('submit', loginFormHandler);