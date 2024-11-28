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
               'AMaximHerkin.html', // 5
               'AJudiWeinstein.html',
               'AIlanWeiss.html',
               'AOmerWenkert.html',
               'AGadiHaggai.html',
               'AAveraMengistu.html', // 5
               'AShlomoMantzur.html',
               'AEliyahuMargalit.html',
               'ATamirNimrodi.html',
               'AOmerNeutra.html',
               'AKeithSeigal.html', // 5
               'AYonatanSamerano.html',
               'AIdanShtivi.html',
               'ADanielPeretz.html',
               'ATsachiIdan.html',
               'AMatanZangauker.html', //5
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