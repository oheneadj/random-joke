const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const genBtn = document.getElementById("genBtn");
const quoteBlock = document.getElementById("quote-block");

genBtn.addEventListener("click", () => {
  genBtn.disabled = !genBtn.disabled;
  genBtn.innerText = "Getting New Joke...";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8b17e9f042mshf2c05bade66a115p1db1aejsn144a6b7f71a5",
      "X-RapidAPI-Host": "joke110.p.rapidapi.com",
    },
  };

  fetch("https://joke110.p.rapidapi.com/random_joke", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.punchline);
      setup.classList.remove("d-none");
      punchline.classList.remove("d-none");
      setup.innerText = response.setup;
      punchline.innerText = response.punchline;
      genBtn.innerText = "Get Random Joke";
      genBtn.disabled = !genBtn.disabled;
    })
    .catch((err) => console.error(err));
});
