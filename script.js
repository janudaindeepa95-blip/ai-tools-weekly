// Simple email subscription system (stores in localStorage)
function subscribe() {
    const email1 = document.getElementById('email-input').value;
    const email2 = document.getElementById('email-input2').value;
    const email = email1 || email2;
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }
    
    // Get existing subscribers or initialize array
    let subscribers = JSON.parse(localStorage.getItem('aiNewsletterSubscribers')) || [];
    
    // Check if email already exists
    if (subscribers.includes(email)) {
        alert('You are already subscribed!');
        return;
    }
    
    // Add new subscriber
    subscribers.push(email);
    localStorage.setItem('aiNewsletterSubscribers', JSON.stringify(subscribers));
    
    // Update subscriber count display
    updateSubscriberCount();
    
    // Show success message
    alert(`Thank you! You've been subscribed to AI Tools Weekly. Check your email for confirmation.`);
    
    // Clear input fields
    document.getElementById('email-input').value = '';
    document.getElementById('email-input2').value = '';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function updateSubscriberCount() {
    const subscribers = JSON.parse(localStorage.getItem('aiNewsletterSubscribers')) || [];
    const baseCount = 2347;
    const totalCount = baseCount + subscribers.length;
    
    const countElement = document.getElementById('subscriber-count');
    if (countElement) {
        countElement.textContent = totalCount.toLocaleString();
        countElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            countElement.style.transform = 'scale(1)';
        }, 300);
    }
}

// Update count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateSubscriberCount();
});
