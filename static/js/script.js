
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('myForm').addEventListener('submit', function (event) {
            event.preventDefault();

            // Perform form submission using fetch
            fetch('/', {
                method: 'POST',
                body: new FormData(document.getElementById('myForm')),
            })
            .then(response => response.json())
            .then(data => {
                // Open a new window with the redirect URL
                window.open(data.redirect_url, '_blank');
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });
    
