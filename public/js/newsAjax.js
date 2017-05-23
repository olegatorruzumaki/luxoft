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
        var article = document.createElement('article');
        var span = document.createElement('span');
        var h2 = document.createElement('h2');
        var time = document.createElement('time');
        var p = document.createElement('p');
        var a = document.createElement('a');

        article.className = "block-news__news";
        h2.className = "block-news__header";
        time.className = "block-news__date";
        a.className = "block-news__more";

        h2.innerHTML = news.header;
        time.innerHTML = news.date;
        p.innerHTML = news.content;
        a.innerHTML = 'more >';
        a.href = '#';

        divNews.insertBefore(article, divNews.children[1]);
        article.appendChild(span);
        span.appendChild(h2);
        span.appendChild(time);
        article.appendChild(p);
        article.appendChild(a);
    });

}

loadNews();