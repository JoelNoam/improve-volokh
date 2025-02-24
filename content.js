(function() {
  function make_improvements(root = document) {
    console.log("making improvements");
    // When "More" is clicked, wait a moment and then re-run
    const loadMoreButton = document.querySelector(".rcom-load-more-button");
    if (loadMoreButton) {
      loadMoreButton.onclick = () => setTimeout(make_improvements, 3000);
    }
    const articles = root.querySelectorAll('article.rcom-standard-article.volokh-post');
    articles.forEach(article => {
      const authorLink = article.querySelector(
        '.byline.author.vcard a, .author-footer--author-name a'
      );
      if (!authorLink) return;
      const href = authorLink.getAttribute('href') || '';
      if (href.includes('/people/josh-blackman/')) {
        article.innerHTML = '<h1 style="font-weight:bold;">Nope</h1>';
      }
    });
  }

  // Initial pass
  make_improvements();

  // When "More" is clicked, wait a moment and then re-run
  const loadMoreButton = document.querySelector(".rcom-load-more-button");
  if (loadMoreButton) {
    loadMoreButton.onclick = () => setTimeout(make_improvements, 3000);
  }

})();
