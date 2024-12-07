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
               'AAveraMengistu.html', // 10
               'AShlomoMantzur.html',
               'AEliyahuMargalit.html',
               'ATamirNimrodi.html',
               'AOmerNeutra.html',
               'AKeithSeigal.html', // 15
               'AYonatanSamerano.html',
               'AIdanShtivi.html',
               'ADanielPeretz.html',
               'ATsachiIdan.html',
               'AMatanZangauker.html', // 20
               'AArielCunio.html',
               'ADavidCunio.html',
               'AAmiramCooper.html',
               'ABarKupershtein.html',
               'AOfraKeidar.html', // 25
               'AItzhakElgarat.html',
               'AEdanAlexander.html',
               'ARonenEngel.html',
               'ARanGvili.html',
               'AMenyGodard.html', // 30
               'AHadarGoldin.html',
               'ATamirAdar.html',
               'AAlonOhel.html',
               'AAvivAtzili.html',
               'ARomiGonen.html', // 35
               'ABIpinJoshi.html',
               'ASaguiDekel.html'
               ];
                // Generate a random index
                 var myRandom = new Math.seedrandom(Date.now());
                 var randomIndex = Math.floor(myRandom() * websites.length);
                  // Redirect to the random website
                   window.location.href = websites[randomIndex];
                });
                } else {
                    console.error('Button with ID "randomButton" not found.'); 
                   } 
   });