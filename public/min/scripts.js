function loadNews() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'news.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            try {
                var news = JSON.parse(xhr.responseText);
            } catch (e) {
                alert(e.message);
            }
            showNews(news);
        }

    };

    xhr.send();
}

function showNews(news) {

    news.forEach(function(news) {
        // var article = document.createElement('article');
        // var span = document.createElement('span');
        // var h2 = document.createElement('h2');
        // var time = document.createElement('time');
        // var p = document.createElement('p');
        // var a = document.createElement('a');
        //
        // article.className = "block-news__news";
        // h2.className = "block-news__header";
        // time.className = "block-news__date";
        // a.className = "block-news__more";
        //
        // h2.innerHTML = news.header;
        // time.innerHTML = news.date;
        // p.innerHTML = news.content;
        // a.innerHTML = 'more >';
        // a.href = '#';
        //
        // divNews.insertBefore(article, divNews.children[1]);
        // article.appendChild(span);
        // span.appendChild(h2);
        // span.appendChild(time);
        // article.appendChild(p);
        // article.appendChild(a);

        $('#h2divNews').after('<article id="newsArticle-'+news.id+'" class="block-news__news">');
        $('#newsArticle-'+news.id).append('<span id="newsSpan-'+news.id+'">');
        $('#newsSpan-'+news.id).append('<h2 class="block-news__header">'+news.header+'</h2>');
        $('#newsSpan-'+news.id).append('<time class="block-news__date">'+news.date+'</time>');
        $('#newsArticle-'+news.id).append('<p>'+news.content+'</p>');
        $('#newsArticle-'+news.id).append('<a class="block-news__more" href="#">more ></a>');

    });

}

loadNews();

var sliderElement = document.getElementById('sliderCarousel');
var sliderStartPoint = 0;
var sliderInterval;

function sliderFunc() {
    sliderInterval = setInterval(function () {
        sliderStartPoint--;
        sliderElement.style.transform = "translateX("+sliderStartPoint + "px)";
        if (sliderStartPoint < -666) {
            sliderStartPoint = 0;
        }
    }, 100);
}

function sliderMouseOver() {
    clearInterval(sliderInterval);
}

sliderFunc();
