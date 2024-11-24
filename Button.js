document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('randomButton');
     if (button) {
        button.addEventListener('click', function() {
            // List of URLs
           var websites = [
               'https://www.example1.com',
               'https://www.example2.com',
               'https://www.example3.com' 
               ];
                // Generate a random index
                 var randomIndex = Math.floor(Math.random() * websites.length);
                  // Redirect to the random website
                   window.location.href = websites[randomIndex];
                });
                } else {
                    console.error('Button with ID "randomButton" not found.'); 
                   } 
   });