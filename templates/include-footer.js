// Function to include footer
function includeFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create footer element
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>We are passionate about creating unforgettable travel experiences that connect you with the world.</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html" onclick="localStorage.setItem('isInternalNavigation', 'true')">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Info</h3>
                <p>Email: info@travelagency.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Travel Street, Adventure City</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Travel Agency. All rights reserved.</p>
        </div>
    `;

    // Add footer to the body
    document.body.appendChild(footer);
}); 