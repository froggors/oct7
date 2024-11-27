document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('randomButton');
     if (button) {
        button.addEventListener('click', function() {
            // List of URLs
           var websites = [
               'ADanielOz.html',
               'AYairHorn.html',
               'AEitanHorn.html',
               'AInbarHayman.html',
               'AMaximHerkin.html',
               'AJudiWeinstein.html',
               'AIlanWeiss.html',
               'AOmerWenkert.html',
               'AGadiHaggai.html',
               'ASaguiDekel.html'
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