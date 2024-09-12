
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('loginMessage').textContent = '';

   
    document.getElementById('spinner').style.display = 'block';
   
    document.getElementById('spinner').style.display = 'none';

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    
    
    
    let valid = true;
    if (!username) {
        document.getElementById('usernameError').textContent = 'Username/Email is required.';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(username)) {
        document.getElementById('usernameError').textContent = 'Invalid email format.';
        valid = false;
    }

    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        valid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        valid = false;
    }

    if (!valid) return;

  
    document.getElementById('loginMessage').textContent = 'Logging in...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('loginMessage').textContent = 'Login successful!';
            document.getElementById('loginMessage').style.color = 'green';
        } else {
            document.getElementById('loginMessage').textContent = 'Login failed.';
            document.getElementById('loginMessage').style.color = 'red';
        }
    } catch (error) {
        document.getElementById('loginMessage').textContent = 'An error occurred.';
        document.getElementById('loginMessage').style.color = 'red';
    }
});


document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});

