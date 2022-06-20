const replacementText = "CENSORED";
var articles = document.getElementsByTagName('article');

for (var i = 0; i < articles.length; i++) {
  article = articles[i];
  authorElement = article.getElementsByClassName("author-footer--author-name");
  authorName = authorElement[0].textContent;
  if (authorName === "Josh Blackman") {
    var replacementElement = document.createElement('article');
    var replacementContent = document.createTextNode(replacementText);
    replacementElement.appendChild(replacementContent);

    article.replaceWith(replacementElement);
  }
}
