// https://api.chucknorris.io/jokes/random

const content = document.getElementById("content");

async function getJoke() {
  try {
    const urlChuckNorris = "https://api.chucknorris.io/jokes/random";

    let response = await fetch(urlChuckNorris);
    let data = await response.json();
    let jokeEng = data.value;
    console.log(jokeEng);

    const urlMyMemory =
      "https://api.mymemory.translated.net/get?q=" +
      jokeEng +
      "&langpair=en|fr";

    response = await fetch(urlMyMemory);
    data = await response.json();
    let jokeFr = data.responseData.translatedText;

    content.textContent = jokeFr;
  } catch (error) {
    console.log(`Erreur : `, error);
    content.textContent = "Oups...pas de blagues en stock";
  }
}

getJoke();
