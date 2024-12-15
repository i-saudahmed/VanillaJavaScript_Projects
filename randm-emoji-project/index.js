const button = document.getElementById("btn");
const emojiNameE1 = document.getElementById("emoji-name");

let emoji = [];

async function getEmoji() {
  const response = await fetch(
    "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1"
  );
  const data = await response.json();
 
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

button.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  button.innerText = emoji[randomNum].emojiName;
  emojiNameE1.innerText = emoji[randomNum].emojiCode;
});
