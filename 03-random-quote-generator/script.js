const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("generateBtn");

async function fetchQuote() {
  try {
    button.disabled = true;
    button.textContent = "Loading...";

    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();

    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `— ${data.author}`;

    button.disabled = false;
    button.textContent = "Get New Quote";
  } catch (error) {
    quoteText.textContent = "Oops! Failed to fetch quote.";
    authorText.textContent = "";
    button.disabled = false;
    button.textContent = "Try Again";
  }
}

button.addEventListener("click", fetchQuote);
