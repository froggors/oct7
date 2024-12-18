document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('randomButton');
     if (button) {
        button.addEventListener('click', function() {
            // List of URLs
           var websites = [
               'AAgamBerger.html',
               'AAlexTroufanov.html',
               'AAlonOhel.html',
               'AAmiramCooper.html',
               'AArbelYehoud.html', // 5
               'AArielBibas.html',
               'AArielCunio.html',
               'AAryehZalmanowitz.html',
               'AAsafHamami.html', 
               'AAveraMengistu.html', // 10
               'AAvintarOr.html',
               'AAvivAtzili.html',
               'ABanwatSitao.html',
               'ABarKupershtein.html', 
               'ABIpinJoshi.html', // 15
               'ADaniellaGilboa.html',
               'ADanielOz.html',
               'ADanielPeretz.html',
               'ADavidCunio.html', 
               'ADrorOr.html', // 20
               'AEdanAlexander.html',
               'AEitanHorn.html',
               'AEliyahCohen.html',
               'AEliyahuMargalit.html', 
               'AEmilyTehila.html', // 25
               'AEvyatarDavid.html',
               'AGadiHaggai.html',
               'AGaliBerman.html', 
               'AGuyGilboa.html', 
               'AGuyIllouz.html', // 30
               'AHadarGoldin.html',
               'AIdanShtivi.html',
               'AIlanWeiss.html',
               'AInbarHayman.html', 
               'AItayChen.html', // 35
               'AItzhakElgarat.html',
               'AJudiWeinstein.html',
               'AKeithSeigal.html',
               'AKfirBibas.html',
               'ALiriAlbag.html', // 40
               'AMatanZangauker.html',
               'AMaximHerkin.html',
               'AMenyGodard.html',
               'AMuhammadAtarash.html',
               'ANimrodCohen.html', // 45
               'AOfraKeidar.html', 
               'AOhadBenAmi.html',
               'AOhadYahalomi.html',
               'AOmerNeutra.html',
               'AOmerWenkert.html',  // 50
               'ARanGvili.html',
               'ARomBraslavski.html',
               'ARomiGonen.html',
               'ARonenEngel.html', 
               'ASaguiDekel.html', // 55
               'ASaharBaruch.html', 
               'ASatianSwankam.html',
               'AShiriBibas.html',
               'AShlomoMantzur.html', 
               'ASontayaOkarsery.html', // 60
               'ATalHaimi.html', 
               'ATamirNimrodi.html',
               'ATsachiIdan.html',
               'AUrielBaruch.html', // 65
               'AWachatraSerion.html',
               'AYairHorn.html',
               'AYairYaakov.html', 
               'AYardenBibas.html',
               'AYonatanSamerano.html', // 70
               'AYosefChaim.html', 
               'AZivBerman.html',
               'ASegevKalfon.html',
               'AOmriMiran.html',
               'AOrLevy.html', // 75
               'AEitanLevi.html',
               'ANaamaLevy.html',
               'AShayLevinson.html',
               'AOdedLifshitz.html',
               'AGadiMozes.html', // 80
               'AJoshuaLoitu.html',
               'AEitanMor.html',
               'AOferKalderon.html',
               'ALiorRudaeff.html',
               'ASurcoRomano.html', // 85
               'ASodistanRintlak.html',
               'AOronShaul.html',
               'ATalShoham.html',
               'ADoronSteinbrecher.html',
               'AOmerShemTov.html', // 90
               'AEliSharabi.html',
               'AYossiSharabi.html',
               'APungascTena.html',
               'ANetfongPinta.html'
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