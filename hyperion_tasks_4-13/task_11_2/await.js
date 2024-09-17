// define the async function
async function fetchCats() {
  //inside a try/catch implement the await
  try {
    // do a fetch call to the API and await it, drop the result directly into a variable called cat
    let cat = await fetch(
      'http://thecatapi.com/api/images/get?format=src&type=gif'
    );
    // log the url directly to the console(this time we don't receive a JSON object so we
    // dont have to parse it, instead we can just select the .url part of the returned object directly)
    console.log(cat.url);
  } catch (error) {
    // catch the error and log it to console if it occurs
    console.log(error);
  }
}

//test run the function
fetchCats();
