function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');

  if (!terms) {
    return; // quit this function if there isn't a terms section on page
  }

  terms.addEventListener('scroll', function (e) {
    console.log(e);
  });
}

scrollToAccept();
