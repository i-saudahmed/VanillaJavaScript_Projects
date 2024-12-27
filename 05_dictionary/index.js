const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  let inputValue = document.getElementById("inp-word").value;
  fetch(`${url}${inputValue}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
        <div class="word">
            <h3>${inputValue}</h3>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
        </div>
        <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
            ${data[0].meanings[0].definitions[0].example || ""}
        </p>
      `;
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">Could not find the word</h3>`;
    });
});
