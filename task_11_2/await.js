async function fetchCats() {
  try {
    let catUrl = await fetch(
      'http://thecatapi.com/api/images/get?format=src&type=gif'
    );
    // catUrl = catUrl.json();

    console.log(catUrl.url);
  } catch (error) {
    console.log(error);
  }
}

fetchCats();
