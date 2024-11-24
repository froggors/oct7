document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('randomButton');
     if (button) {
        button.addEventListener('click', function() {
            // List of URLs
           var websites = [
               'https://www.ynet.co.il/news/article/sjdhowpy6',
               'https://13tv.co.il/item/news/domestic/internal/ariel-bivas-904184766/',
               'https://www.kfarazzabringthemhome.org/copy-of-gali',
               'https://www.kfarazzabringthemhome.org/gali',
               'https://bth-ka.co.il/%d7%a1%d7%99%d7%a4%d7%95%d7%a8-%d7%90%d7%9e%d7%99%d7%9c%d7%99/',
               'https://www.ynet.co.il/news/article/yokra14088616',
               'https://www.hcinema.org.il/%D7%90%D7%A8%D7%91%D7%9C-%D7%99%D7%94%D7%95%D7%93/',
               'https://www.maariv.co.il/news/israel/article-1072899',
               'https://www.makorrishon.co.il/news/720747/',
               'https://www.hidabroot.org/article/1201491',
               'https://www.mako.co.il/news-military/6361323ddea5a810/Article-cd7cfba08cc7c81027.htm',
                'https://haipo.co.il/item/496209'
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