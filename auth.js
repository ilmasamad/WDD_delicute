// Authentication functionality
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    // Login form handler
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Simple validation
            if (!email || !password) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Simulate login process
            showNotification('Logging in...', 'info');
            
            setTimeout(() => {
                // Store user session (simplified)
                const userData = {
                    email: email,
                    loginTime: new Date().toISOString(),
                    remember: remember
                };
                
                if (remember) {
                    localStorage.setItem('userSession', JSON.stringify(userData));
                } else {
                    sessionStorage.setItem('userSession', JSON.stringify(userData));
                }
                
                showNotification('Login successful! Welcome back! 🎉', 'success');
                
                // Redirect to home page after successful login
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }, 1000);
        });
    }
    
    // Signup form handler
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const terms = document.getElementById('terms').checked;
            
            // Validation
            if (!firstName || !lastName || !email || !password || !confirmPassword) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showNotification('Passwords do not match', 'error');
                return;
            }
            
            if (password.length < 6) {
                showNotification('Password must be at least 6 characters', 'error');
                return;
            }
            
            if (!terms) {
                showNotification('Please accept the terms and conditions', 'error');
                return;
            }
            
            // Simulate signup process
            showNotification('Creating your account...', 'info');
            
            setTimeout(() => {
                // Store user data (simplified)
                const userData = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    signupTime: new Date().toISOString()
                };
                
                localStorage.setItem('userSession', JSON.stringify(userData));
                
                showNotification('Account created successfully! Welcome to Sweet Dreams! 🧁', 'success');
                
                // Redirect to home page after successful signup
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }, 1000);
        });
    }
});

// Password toggle functionality
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('passwordToggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Form input animations
document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('.form-group input');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    const colors = {
        success: '#4caf50',
        error: '#f44336',
        info: '#2196f3'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}