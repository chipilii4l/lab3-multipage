// FAQ Toggle Functionality
document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('visible');
    });
});

// Theme Toggle Functionality
document.getElementById('themeToggle')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Form Validation for Contact Page
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        const response = document.createElement('p');
        response.textContent = `Thanks, ${name}. We'll get back to you soon!`;
        e.target.appendChild(response);
        e.target.reset();
    }
});

// API Integration for User Listing
document.getElementById('loadUsersBtn')?.addEventListener('click', async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
    } catch (err) {
        console.error('Failed to load users:', err);
    }
});
