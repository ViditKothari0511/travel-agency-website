// Call the function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create footer element
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>Your trusted partner in creating unforgettable travel experiences. We specialize in crafting unique journeys that connect you with cultures, landscapes, and people around the globe.</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
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
                <p><i class="fas fa-map-marker-alt"></i> 123 Travel Street, City, Country</p>
                <p><i class="fas fa-phone"></i> +1 234 567 890</p>
                <p><i class="fas fa-envelope"></i> info@travelagency.com</p>
            </div>
        </div>
        <div class="footer-bottom">
            <a href="payment-procedure.html">Payment Procedure</a>
            <span>|</span>
            <a href="privacy-policy.html">Privacy Policy</a>
            <span>|</span>
            <a href="terms-and-conditions.html">Terms and Conditions</a>
            <span>|</span>
            <a href="terms-of-use.html">Terms of Use</a>
            <p>&copy; 2024 Travel Agency. All rights reserved.</p>
        </div>
    `;

    // Add footer to the body
    document.body.appendChild(footer);
}); 