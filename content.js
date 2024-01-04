const replacementText = "Nope";

window.onload = event => {
    make_improvements();
    // Attempt to attach the improvement function to dynamically loaded content
    document.body.addEventListener('DOMNodeInserted', function(event){
        if(event.target.tagName === 'ARTICLE'){
            make_improvements();
        }
    }, false);

    var loadMoreButton = document.querySelector(".rcom-load-more-button");
    if (loadMoreButton) {
        loadMoreButton.onclick = () => setTimeout(make_improvements, 6000); // Adjusts for dynamic content loading
    }
};

function make_improvements() {
    console.log("Improve Volokh Extension Invoked");
    var articles = document.getElementsByTagName('article');

    for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        var authorElements = article.querySelectorAll('.byline.author.vcard a');
        if (authorElements.length === 0) {
            continue;
        }

        var authorName = authorElements[0].textContent.trim();
        console.log("Author found: " + authorName);

        if (authorName === "Josh Blackman") {
            console.log("Replacing article by Josh Blackman");
            var replacementElement = document.createElement('h1');
            var replacementContent = document.createTextNode(replacementText);
            replacementElement.appendChild(replacementContent);
            replacementElement.classList.add("rcom-standard-article"); // Preserves styling

            article.replaceWith(replacementElement);
        }
    }
}
