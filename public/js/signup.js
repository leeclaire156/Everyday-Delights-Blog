var signupBtn = document.querySelector(".signup-button");

signupBtn.addEventListener("click", signUp);

async function signUp(event) {
    event.preventDefault();
    // Collect values from the sign up form
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        console.log(username, password);
        //     // Send a POST request to the API endpoint
        //     const response = await fetch('/api/users/', {
        //         method: 'POST',
        //         body: JSON.stringify({ username, password }),
        //         headers: { 'Content-Type': 'application/json' },
        //     });

        //     if (response.ok) {
        //         // If successful, redirect the browser to the homepage
        //         document.location.replace('/homepage');
        //     } else {
        //         alert(response.statusText);
        //     }
    }
};

