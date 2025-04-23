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
document.addEventListener('DOMContentLoaded', includeFooter); 