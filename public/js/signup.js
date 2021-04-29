// handles the request to the signup api endpoint
const signupFormHandler = async(event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const passwordConfirm = document.querySelector('#password-confirm-login').value.trim();

    if(password !== passwordConfirm) {
        alert("ERROR the passwords do not match, try again");
        return;
    }

    if (email && password) {
        // TODO: Add a comment describing the functionality of this expression
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ email, username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('ERROR there already exists an account with that email');
        }
    }
};

// event listener
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);