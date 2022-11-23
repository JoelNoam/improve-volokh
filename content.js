const replacementText = "Nope";

window.onload = event => {
  make_improvements();
  var a = document.getElementsByClassName("rcom-load-more-button")[0]; // should just be one, I think
  a.onclick = setTimeout(make_improvements, 6000); // waits some time for next part of page to load
  // only works right now for the first load. Might have it run just every few seconds in an infinite loop
};

function make_improvements() {
  //window.alert("invoked");
  console.log("invoked");
  var articles = document.getElementsByTagName('article');
  
  for (var i = 0; i < articles.length; i++) {
    article = articles[i];
    authorElement = article.getElementsByClassName("author");
    authorName = authorElement[0].textContent.trim();
    console.log(authorName);
    if (authorName === "Josh Blackman") {
      //window.alert("found");
      var replacementElement = document.createElement('h1');
      var replacementContent = document.createTextNode(replacementText);
      replacementElement.appendChild(replacementContent);
      replacementElement.classList.add("rcom-standard-article"); // triggers green line formatting
  
      article.replaceWith(replacementElement);
    }
  }
}
